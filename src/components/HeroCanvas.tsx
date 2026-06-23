import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── PERFUME BOTTLE ──
    const bottleGroup = new THREE.Group();
    scene.add(bottleGroup);

    // Bottle body - main glass cylinder
    const bodyGeo = new THREE.CylinderGeometry(0.55, 0.65, 1.8, 64, 1, false);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1A1008,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.85,
      thickness: 1.2,
      ior: 1.5,
      reflectivity: 0.9,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
    });
    const body = new THREE.Mesh(bodyGeo, glassMat);
    bottleGroup.add(body);

    // Bottle shoulders
    const shoulderGeo = new THREE.CylinderGeometry(0.3, 0.55, 0.4, 64);
    const shoulder = new THREE.Mesh(shoulderGeo, glassMat);
    shoulder.position.y = 1.1;
    bottleGroup.add(shoulder);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.22, 0.3, 0.5, 32);
    const neck = new THREE.Mesh(neckGeo, glassMat);
    neck.position.y = 1.55;
    bottleGroup.add(neck);

    // Cap
    const capGeo = new THREE.CylinderGeometry(0.28, 0.26, 0.6, 32);
    const capMat = new THREE.MeshPhysicalMaterial({
      color: 0xD4B06A,
      metalness: 0.95,
      roughness: 0.1,
      reflectivity: 1,
    });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = 2.1;
    bottleGroup.add(cap);

    // Cap top
    const capTopGeo = new THREE.SphereGeometry(0.28, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const capTop = new THREE.Mesh(capTopGeo, capMat);
    capTop.position.y = 2.4;
    bottleGroup.add(capTop);

    // Liquid inside
    const liquidGeo = new THREE.CylinderGeometry(0.48, 0.58, 1.4, 32);
    const liquidMat = new THREE.MeshPhysicalMaterial({
      color: 0xA8640A,
      metalness: 0,
      roughness: 0.1,
      transparent: true,
      opacity: 0.6,
      transmission: 0.3,
    });
    const liquid = new THREE.Mesh(liquidGeo, liquidMat);
    liquid.position.y = -0.15;
    bottleGroup.add(liquid);

    // Gold label plate
    const labelGeo = new THREE.PlaneGeometry(0.8, 0.5);
    const labelMat = new THREE.MeshPhysicalMaterial({
      color: 0xD4B06A,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.85,
    });
    const labelFront = new THREE.Mesh(labelGeo, labelMat);
    labelFront.position.set(0, 0, 0.56);
    bottleGroup.add(labelFront);

    // Base
    const baseGeo = new THREE.CylinderGeometry(0.65, 0.62, 0.12, 32);
    const baseMat = new THREE.MeshPhysicalMaterial({ color: 0xD4B06A, metalness: 0.9, roughness: 0.15 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = -0.96;
    bottleGroup.add(base);

    bottleGroup.position.set(2.5, -0.3, 0);
    bottleGroup.scale.setScalar(1.2);

    // ── PARTICLES ──
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 2;

      const brightness = 0.4 + Math.random() * 0.6;
      particleColors[i * 3] = brightness * 0.83;
      particleColors[i * 3 + 1] = brightness * 0.69;
      particleColors[i * 3 + 2] = brightness * 0.42;

      sizes[i] = Math.random() * 3 + 0.5;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── SMOKE PLANES ──
    const smokePlanes: THREE.Mesh[] = [];
    const smokeMat = new THREE.MeshBasicMaterial({
      color: 0xD4B06A,
      transparent: true,
      opacity: 0.02,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    for (let i = 0; i < 8; i++) {
      const smokeGeo = new THREE.PlaneGeometry(4 + Math.random() * 4, 4 + Math.random() * 4);
      const smoke = new THREE.Mesh(smokeGeo, smokeMat.clone() as THREE.MeshBasicMaterial);
      smoke.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        -1 - Math.random() * 2
      );
      smoke.rotation.z = Math.random() * Math.PI;
      scene.add(smoke);
      smokePlanes.push(smoke);
    }

    // ── LIGHTS ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xD4B06A, 3);
    keyLight.position.set(3, 5, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1);
    fillLight.position.set(-3, 0, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xD4B06A, 2);
    rimLight.position.set(-2, 3, -3);
    scene.add(rimLight);

    const pointLight1 = new THREE.PointLight(0xD4B06A, 4, 8);
    pointLight1.position.set(2, 2, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8060FF, 1.5, 6);
    pointLight2.position.set(-3, -1, 2);
    scene.add(pointLight2);

    // ── STAR FIELD ──
    const starCount = 300;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 30;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      starPositions[i * 3 + 2] = -5 - Math.random() * 10;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── MOUSE PARALLAX ──
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── ANIMATION ──
    let t = 0;
    const animate = () => {
      const raf = requestAnimationFrame(animate);
      (animate as any)._raf = raf;
      t += 0.008;

      // Bottle rotation & parallax
      bottleGroup.rotation.y = Math.sin(t * 0.4) * 0.25 + mouseX * 0.15;
      bottleGroup.rotation.x = mouseY * 0.08;
      bottleGroup.position.y = -0.3 + Math.sin(t * 0.5) * 0.08;

      // Liquid sway
      liquid.rotation.y = t * 0.3;

      // Particles orbit
      particles.rotation.y = t * 0.05;
      particles.rotation.x = t * 0.02;

      // Smoke drift
      smokePlanes.forEach((smoke, i) => {
        (smoke.material as THREE.MeshBasicMaterial).opacity = 0.015 + Math.sin(t + i) * 0.008;
        smoke.rotation.z += 0.001 * (i % 2 === 0 ? 1 : -1);
        smoke.position.y += 0.001;
        if (smoke.position.y > 5) smoke.position.y = -5;
      });

      // Light pulsing
      pointLight1.intensity = 3.5 + Math.sin(t * 1.5) * 0.8;
      pointLight1.position.x = Math.sin(t) * 3;
      pointLight1.position.z = Math.cos(t) * 3;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      const W2 = mount.clientWidth;
      const H2 = mount.clientHeight;
      camera.aspect = W2 / H2;
      camera.updateProjectionMatrix();
      renderer.setSize(W2, H2);
    };
    window.addEventListener('resize', onResize);

    // Scroll effect
    const onScroll = () => {
      const progress = window.scrollY / (window.innerHeight * 0.8);
      bottleGroup.scale.setScalar(1.2 + progress * 0.4);
      camera.position.z = 5 - progress * 1.5;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame((animate as any)._raf);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

    return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
