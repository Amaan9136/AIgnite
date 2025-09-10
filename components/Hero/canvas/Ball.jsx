import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.icon]); // Use the same texture for all faces
  const ballRef = useRef();

  const [time, setTime] = useState(0); // For creating oscillation over time

  // Controlled rotation with oscillation on Y, X, and Z axes
  useFrame(({ clock }) => {
    if (ballRef.current) {
      // Use elapsed time (clock.getElapsedTime()) to make rotation consistent across devices
      const elapsedTime = clock.getElapsedTime();
      
      // Apply larger oscillation for left-right movement on the Y-axis (slower)
      ballRef.current.rotation.y = Math.sin(elapsedTime) * 0.5; // Increase factor for wider left-right movement

      // Apply small oscillation on the X-axis for slight back-and-forth movement (slow)
      ballRef.current.rotation.x = Math.sin(elapsedTime) * 0.2; // Small oscillation on the X-axis

      // Apply oscillation to the Z-axis for back and forth movement
      ballRef.current.rotation.z = Math.sin(elapsedTime) * 0.2; // Small oscillation on the Z-axis

      // Apply oscillation to the Y-position for vertical movement (up and down)
      ballRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.2; // Small oscillation on the Y-position (up and down)
    }
  });

  return (
    <Float
      speed={0.5} // Slower floating speed to keep the ball in view
      rotationIntensity={0} // Disable floating rotation intensity to keep the texture steady
      floatIntensity={0.2} // Slight floating intensity
      floatingAxes="xy" // Restrict floating to X and Y axes
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#000000" 
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Front decal with the same texture */}
        <Decal
          position={[0, 0, 1]} // Place on the front
          rotation={[0, 0, 0]} // No tilting, keeps the logo flat and visible
          flatShading
          map={decal}
        />
        {/* Back decal with the same texture */}
        <Decal
          position={[0, 0, -1]} // Place on the opposite side (back)
          rotation={[Math.PI, 0, Math.PI]} // Rotate 180 degrees along Y-axis and 180 degrees along Z-axis
          flatShading
          map={decal}
        />
        {/* Left decal with the same texture */}
        <Decal
          position={[-1, 0, 0]} // Place on the left side
          rotation={[0, Math.PI / 2, 0]} // Rotate 90 degrees on the Y-axis
          flatShading
          map={decal}
        />
        {/* Right decal with the same texture */}
        <Decal
          position={[1, 0, 0]} // Place on the right side
          rotation={[0, -Math.PI / 2, 0]} // Rotate -90 degrees on the Y-axis for the opposite side
          flatShading
          map={decal}
        />
        {/* Top decal with the same texture */}
        <Decal
          position={[0, 1, 0]} // Place on the top
          rotation={[Math.PI / 2, 0, 0]} // Rotate 90 degrees on the X-axis
          flatShading
          map={decal}
        />
        {/* Bottom decal with the same texture */}
        <Decal
          position={[0, -1, 0]} // Place on the bottom
          rotation={[-Math.PI / 2, 0, 0]} // Rotate -90 degrees on the X-axis
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
    const iconUrl = typeof icon === "string" ? icon : icon.src;
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      frameloop="always" // Ensures continuous animation
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={iconUrl} /> {/* Pass the icon as prop for all six faces */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
