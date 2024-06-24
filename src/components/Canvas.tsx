import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import BadgeBand from './BadgeBand';

export default function CanvasComponent() {
  return (
    <Canvas>
      <Physics>
        <BadgeBand />
      </Physics>
    </Canvas>
  );
}
