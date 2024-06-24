import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import Badge from './Badge';

export default function CanvasComponent() {
  return (
    <Canvas>
      <Physics debug>
        <Badge />
      </Physics>
    </Canvas>
  );
}
