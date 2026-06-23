import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FeaturedBottle() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textTopRef = useRef<HTMLDivElement>(null);
  const textBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const section = sectionRef.current!;
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // ── FEATURED BOTTLE ──
    const bottleGroup = new THREE.Group();
    scene.add(bottleGroup);

    // Main body - elegant rectangular with rounded edges
    const bodyGeo = new THREE.CylinderGeometry(0.7, 0.75, 2.2, 8, 1);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0D0A04,
      metalness: 0.05,
      roughness: 0.03,
      transmission: 0.9,
      thickness: 1.5,
      ior: 1.5,
      reflectivity: 1,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      envMapIntensity: 2,
    });
    const body = new THREE.Mesh(bodyGeo, glassMat);
    bottleGroup.add(body);

    // Inner liquid
    const liquidGeo = new THREE.CylinderGeometry(0.58, 0.63, 1.7, 8);
    const liquidMat = new THREE.MeshPhysicalMaterial({
      color: 0xB87010,
      metalness: 0,
      roughness: 0.1,
      transparent: true,
      opacity: 0.5,
      transmission: 0.4,
    });
    const liquid = new THREE.Mesh(liquidGeo, liquidMat);
    liquid.position.y = -0.1;
    bottleGroup.add(liquid);

    // Shoulder
    const shoulderGeo = new THREE.CylinderGeometry(0.38, 0.7, 0.5, 8);
    const shoulder = new THREE.Mesh(shoulderGeo, glassMat);
    shoulder.position.y = 1.35;
    bottleGroup.add(shoulder);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.28, 0.38, 0.55, 8);
    const neck = new THREE.Mesh(neckGeo, glassMat);
    neck.position.y = 1.88;
    bottleGroup.add(neck);

    // Cap
    const capGeo = new THREE.CylinderGeometry(0.33, 0.3, 0.7, 32);
    const capMat = new THREE.MeshPhysicalMaterial({
      color: 0xD4B06A,
      metalness: 0.98,
      roughness: 0.05,
      reflectivity: 1,
    });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = 2.51;
    bottleGroup.add(cap);

    // Cap top sphere
    const capTopGeo = new THREE.SphereGeometry(0.33, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const capTop = new THREE.Mesh(capTopGeo, capMat);
    capTop.position.y = 2.85;
    bottleGroup.add(capTop);

    // Gold base ring
    const baseGeo = new THREE.TorusGeometry(0.72, 0.06, 16, 32);
    const baseMat = new THREE.MeshPhysicalMaterial({ color: 0xD4B06A, metalness: 0.95, roughness: 0.1 });
    const baseRing = new THREE.Mesh(baseGeo, baseMat);
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = -1.12;
    bottleGroup.add(baseRing);

    // Label
    const labelGeo = new THREE.PlaneGeometry(1.0, 0.65);
    const labelMat = new THREE.MeshPhysicalMaterial({
      color: 0xD4B06A,
      metalness: 0.85,
      roughness: 0.25,
      transparent: true,
      opacity: 0.9,
    });
    const label = new THREE.Mesh(labelGeo, labelMat);
    label.position.set(0, 0.2, 0.73);
    bottleGroup.add(label);

    // ── ORBITING INGREDIENT SPHERES ──
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    const ingredientNames = ['Bergamot', 'Rose', 'Saffron', 'Oud', 'Amber', 'Musk'];
    const orbitSpheres: THREE.Mesh[] = [];

    ingredientNames.forEach((_, i) => {
      const angle = (i / ingredientNames.length) * Math.PI * 2;
      const orbitGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const orbitMat = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0xD4B06A : 0xF0D080,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0xA07020,
        emissiveIntensity: 0.3,
      });
      const orbitSphere = new THREE.Mesh(orbitGeo, orbitMat);
      orbitSphere.position.set(Math.cos(angle) * 2.5, Math.sin(angle * 0.5) * 0.8, Math.sin(angle) * 2.5);
      orbitGroup.add(orbitSphere);
      orbitSpheres.push(orbitSphere);
    });

    // ── PARTICLES ──
    const pCount = 1200;
    const pPos = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);

    for (let i = 0; i < pCount; i++) {
      const r = 1 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 1.5;
      pPos[i * 3 + 2] = r * Math.cos(phi);

      const brightness = 0.3 + Math.random() * 0.7;
      pColors[i * 3] = brightness * 0.83;
      pColors[i * 3 + 1] = brightness * 0.69;
      pColors[i * 3 + 2] = brightness * 0.42;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleMesh = new THREE.Points(pGeo, pMat);
    scene.add(particleMesh);

    // ── LIGHTS ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const keyLight = new THREE.DirectionalLight(0xD4B06A, 4);
    keyLight.position.set(4, 6, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
    fillLight.position.set(-4, 0, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xD4B06A, 2.5);
    rimLight.position.set(-2, 4, -4);
    scene.add(rimLight);

    const pointGold = new THREE.PointLight(0xD4B06A, 5, 10);
    pointGold.position.set(2, 3, 4);
    scene.add(pointGold);

    const pointBlue = new THREE.PointLight(0x4060A0, 2, 8);
    pointBlue.position.set(-3, -2, 3);
    scene.add(pointBlue);

    // ── SCROLL-DRIVEN ANIMATION ──
    let targetRotY = 0;
    let currentRotY = 0;
    let orbitVisible = false;
    let rafId: number;
    let isVisible = false;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const totalHeight = section.clientHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));

      // Phase-based animation
      if (progress < 0.25) {
        // Zoom in
        const p = progress / 0.25;
        camera.position.z = 8 - p * 3;
        bottleGroup.scale.setScalar(0.6 + p * 0.4);
        orbitGroup.scale.setScalar(0.3 + p * 0.4);
        pMat.opacity = p * 0.4;

        if (textTopRef.current) {
          textTopRef.current.style.opacity = String(p);
          textTopRef.current.style.transform = `translateX(-50%) translateY(${(1 - p) * 30}px)`;
        }
      } else if (progress < 0.5) {
        // Bottle rotates
        const p = (progress - 0.25) / 0.25;
        targetRotY = p * Math.PI * 1.5;
        camera.position.z = 5;
        bottleGroup.scale.setScalar(1);
        orbitGroup.scale.setScalar(0.7 + p * 0.3);
        pMat.opacity = 0.4 + p * 0.3;
        orbitVisible = true;

        if (textTopRef.current) textTopRef.current.style.opacity = '1';
      } else if (progress < 0.75) {
        // Camera closer
        const p = (progress - 0.5) / 0.25;
        camera.position.z = 5 - p * 2.5;
        targetRotY = Math.PI * 1.5 + p * Math.PI * 0.5;
        pMat.opacity = 0.7 + p * 0.2;
      } else {
        // Cap opens, mist escapes
        const p = (progress - 0.75) / 0.25;
        cap.position.y = 2.51 + p * 0.8;
        capTop.position.y = 2.85 + p * 0.8;
        pMat.opacity = 0.9 + p * 0.1;
        pMat.size = 0.035 + p * 0.03;

        if (textBottomRef.current) {
          textBottomRef.current.style.opacity = String(p);
          textBottomRef.current.style.transform = `translateX(-50%) translateY(${(1 - p) * -30}px)`;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // ── ANIMATION LOOP ──
    let t = 0;
    const animate = () => {
      if (!isVisible) return;
      rafId = requestAnimationFrame(animate);
      t += 0.01;

      currentRotY += (targetRotY - currentRotY) * 0.05;
      bottleGroup.rotation.y = currentRotY + Math.sin(t * 0.3) * 0.1;
      bottleGroup.rotation.x = Math.sin(t * 0.2) * 0.05;

      liquid.rotation.y = t * 0.2;

      if (orbitVisible) {
        orbitGroup.rotation.y = t * 0.3;
        orbitGroup.rotation.x = t * 0.1;
      }

      particleMesh.rotation.y = t * 0.05;

      pointGold.intensity = 4 + Math.sin(t * 1.2) * 1;
      pointGold.position.x = Math.sin(t) * 4;
      pointGold.position.z = Math.cos(t) * 4;

      renderer.render(scene, camera);
    };

    // Pause render loop when section is off-screen
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) animate();
      },
      { rootMargin: '200px' }
    );
    visibilityObserver.observe(section);
    isVisible = true;
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

    return () => {
      cancelAnimationFrame(rafId);
      visibilityObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="featured"
      ref={sectionRef}
      style={{ 
        position: 'relative', 
        height: 'clamp(250vh, 500vw, 400vh)',
        minHeight: '300vh',
      }}
    >
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, rgba(20,12,4,1) 0%, rgba(8,8,8,1) 70%)',
      }}>
        <div className="noise-overlay" />

        {/* Three.js Canvas */}
        <div
          ref={mountRef}
          style={{ position: 'absolute', inset: 0 }}
        />

        {/* Top text */}
        <div
          ref={textTopRef}
          style={{
            position: 'absolute', top: '14%', left: '50%',
            transform: 'translateX(-50%) translateY(30px)',
            textAlign: 'center', zIndex: 10,
            opacity: 0, transition: 'opacity 0.5s ease, transform 0.5s ease',
            width: '100%', padding: '0 40px',
          }}
        >
          <div className="section-label" style={{ marginBottom: '12px' }}>— The Signature —</div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 700, color: 'var(--white)', lineHeight: 1,
          }}>
            Noir <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Essence</em>
          </h2>
        </div>

        {/* Bottom text */}
        <div
          ref={textBottomRef}
          style={{
            position: 'absolute', bottom: '14%', left: '50%',
            transform: 'translateX(-50%) translateY(-30px)',
            textAlign: 'center', zIndex: 10,
            opacity: 0, transition: 'opacity 0.5s ease, transform 0.5s ease',
            width: '100%', padding: '0 40px',
          }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontStyle: 'italic',
            color: 'var(--gold-light)',
            marginBottom: '24px',
            lineHeight: 1.5,
          }}>
            "The scent that transcends time"
          </p>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '40px',
            flexWrap: 'wrap',
          }}>
            {['Oud', 'Black Orchid', 'Amber', 'Vetiver'].map(ing => (
              <div key={ing} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
                <span style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--gray)', textTransform: 'uppercase' }}>
                  {ing}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', right: '40px', top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
          opacity: 0.4, zIndex: 10,
        }}>
          <div style={{
            writingMode: 'vertical-rl',
            fontSize: '9px', letterSpacing: '0.4em',
            color: 'var(--gold)', textTransform: 'uppercase',
          }}>Scroll</div>
          <div style={{ width: '1px', height: '80px', background: 'linear-gradient(var(--gold), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
