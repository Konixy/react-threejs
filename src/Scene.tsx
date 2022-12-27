import React, { Suspense, useEffect } from 'react';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Tracks from './Tracks.jsx';

export function Scene() {
  const three = useThree();
  useEffect(() => {
    three.setSize(window.innerWidth, window.innerHeight);
  }, [window.innerWidth, window.innerHeight]);

  return (
    <Suspense fallback={null}>
      <Environment files={'/textures/envmap2.hdr'} background={true} />
      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />

      <Tracks />
    </Suspense>
  );
}
