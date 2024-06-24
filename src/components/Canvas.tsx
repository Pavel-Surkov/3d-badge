import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import Badge from './Badge';
import { Environment } from '@react-three/drei';
import { useControls } from 'leva';

export default function CanvasComponent() {
  const { debug } = useControls({ debug: true });

  return (
    <Canvas>
      <ambientLight intensity={Math.PI} />
      <Physics
        debug={debug}
        interpolate
        gravity={[0, -38, 0]}
        timeStep={1 / 60}
      >
        <Badge />
      </Physics>
      <Environment background blur={0.75}>
        <color attach="background" args={['black']} />
        {/* <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        /> */}
      </Environment>
    </Canvas>
  );
}
