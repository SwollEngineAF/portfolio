import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FC, useRef } from 'react';
import * as THREE from 'three';

type GLTFResult = {
  scene: THREE.Group;
};

const KaripapModel: FC = () => {
  const { scene } = useGLTF('/assets/karipap.glb') as GLTFResult;
  const modelRef = useRef<THREE.Group>(null);

  // Auto-rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
};

type HeroSectionProps = {
  isDarkMode: boolean;
};

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Canvas for 3D Model */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <KaripapModel />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </section>
  );
};

export default HeroSection;