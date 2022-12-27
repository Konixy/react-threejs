import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import './index.scss';
import { Scene } from './Scene';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Canvas>
    <Scene />
  </Canvas>,
);
