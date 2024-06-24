import * as THREE from 'three';
import { useRef, useState } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import {
  BallCollider,
  RapierRigidBody,
  RigidBody,
  useRopeJoint,
} from '@react-three/rapier';

import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function BadgeBand() {
  // References for the band and the joints
  const band = useRef<THREE.Mesh<MeshLineGeometry, MeshLineMaterial>>(null);
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody>(null);
  const j2 = useRef<RapierRigidBody>(null);
  const j3 = useRef<RapierRigidBody>(null);

  // Canvas size
  const { width, height } = useThree((state) => state.size);

  // A Catmull-Rom curve
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);

  useFrame(() => {
    if (
      !fixed.current ||
      !j1.current ||
      !j2.current ||
      !j3.current ||
      !band.current
    )
      return;

    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2.current.translation());
    curve.points[2].copy(j1.current.translation());
    curve.points[3].copy(fixed.current.translation());

    band.current.geometry.setPoints(curve.getPoints(32));
  });

  return (
    <>
      <RigidBody ref={fixed} type="fixed" />
      <RigidBody position={[0.5, 0, 0]} ref={j1}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[1, 0, 0]} ref={j2}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[1.5, 0, 0]} ref={j3}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="black"
          resolution={new THREE.Vector2(width, height)}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
