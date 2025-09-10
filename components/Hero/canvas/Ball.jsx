import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.icon]);
  const ballRef = useRef();

  // Track startup spin
  const [startup, setStartup] = useState(true);
  const [startTime] = useState(() => Date.now());
  const [spinEndAngle, setSpinEndAngle] = useState(0);

  useFrame(({ clock }) => {
    if (ballRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const t = (Date.now() - startTime) / 1000;

      if (startup) {
        const duration = 4; // slower: 4 seconds for 2 rotations

        if (t < duration) {
          // Smooth intro spin (2 full rotations to the left)
          ballRef.current.rotation.y = -(t / duration) * Math.PI * 1;
        } else {
          // Lock at final angle after spin
          const finalAngle = -Math.PI * 1;
            //  const finalAngle = 0;
          ballRef.current.rotation.y = finalAngle;
          setSpinEndAngle(finalAngle);
          setStartup(false);
        }
    } else {
  ballRef.current.rotation.y = spinEndAngle + Math.sin(elapsedTime * 0.2) * 0.5;
  ballRef.current.rotation.x = 0;
  ballRef.current.rotation.z = 0;
  ballRef.current.position.y = Math.sin(elapsedTime * 0.1) * 0.2;
}


    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0} floatIntensity={0.2} floatingAxes="xy">
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="white" castShadow />
      <pointLight position={[-3, -2, -3]} intensity={0.4} color="white" />

      {/* Ball mesh */}
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#000000"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Decals on all 6 sides */}
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} flatShading map={decal} />
        <Decal position={[0, 0, -1]} rotation={[Math.PI, 0, Math.PI]} flatShading map={decal} />
        <Decal position={[-1, 0, 0]} rotation={[0, Math.PI / 2, 0]} flatShading map={decal} />
        <Decal position={[1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} flatShading map={decal} />
        <Decal position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]} flatShading map={decal} />
        <Decal position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const iconUrl = typeof icon === 'string' ? icon : icon.src;
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }} frameloop="always">
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={iconUrl} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
