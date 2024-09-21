import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FC, useRef } from 'react';
import * as THREE from 'three';

const Model: FC<{ url: string; position: [number, number, number]; onClick: () => void }> = ({ url, position, onClick }) => {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url) as { scene: THREE.Group };

  // Auto-rotate the model on its own axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh onClick={onClick} position={position}>
      <primitive ref={modelRef} object={scene} />
    </mesh>
  );
};

type HeroSectionProps = {
  isDarkMode: boolean;
};

const HeroSection: FC<HeroSectionProps> = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Canvas for 3D Models */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        
        {/* Karipap model, click to go to "Skills" */}
        <Model url="/assets/karipap.glb" position={[-1.5, 0, 0]} onClick={() => scrollToSection('skills')} />
        
        {/* Laksa model, click to go to "About Me" */}
        <Model url="/assets/laksa.glb" position={[1.5, 0, 0]} onClick={() => scrollToSection('about-me')} />
        
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </section>
  );
};

export default HeroSection;