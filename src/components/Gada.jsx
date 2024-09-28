"use client";
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'; 
import { gsap } from 'gsap';

export default function Gada() {
  const { nodes, materials } = useGLTF('/lord_hanuman_gada.glb');
  const modelRef = useRef();
  let scrollTimeout = null;

  const arrPositionModel = [
    { name: 'section1', position: { x: 2, y: 2.5, z: 0 }, rotation: { x: 0, y: 1.224, z: 0 } },
    { name: 'section2', position: { x: -2, y: 0, z: 0 }, rotation: { x: 0, y: 1.224, z: 0 } },
    { name: 'section3', position: { x: 2, y: -3.5, z: 0 }, rotation: { x: 0, y: 1.224, z: 0 } },
  ];

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; 
    }
  });

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(arrPositionModel[0].position.x, arrPositionModel[0].position.y, arrPositionModel[0].position.z);
      modelRef.current.rotation.set(arrPositionModel[0].rotation.x, arrPositionModel[0].rotation.y, arrPositionModel[0].rotation.z);
    }

    const modelMove = () => {
      const sections = document.querySelectorAll('.section');
      let currentSectionIndex = null;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
          currentSectionIndex = index;
        }
      });

      if (currentSectionIndex !== null && modelRef.current) {
        const newCoordinates = arrPositionModel[currentSectionIndex];

        gsap.to(modelRef.current.position, {  
          x: newCoordinates.position.x,
          y: newCoordinates.position.y,
          z: newCoordinates.position.z,
          duration: 2, 
          ease: "power1.out"
        });

        gsap.to(modelRef.current.rotation, {  
          x: newCoordinates.rotation.x,
          y: newCoordinates.rotation.y,
          z: newCoordinates.rotation.z,
          duration: 2,
          ease: "power1.out"
        });
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        console.log('Scrolling stopped.');
      }, 100); 
    };

    
    gsap.from(modelRef.current.position, { 
      opacity: 0, 
      duration: 1, 
      y: -3 
    });

    window.addEventListener('scroll', modelMove);
    return () => {
      window.removeEventListener('scroll', modelMove);
      clearTimeout(scrollTimeout); 
    };
  }, []);

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 0, 5]} intensity={5} color={0xffe84a} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={3}
        color={0xffe84a}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      <pointLight position={[0, -1, 0]} intensity={3} color={0xffe84a} />
      
      <group ref={modelRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[0.2, 0.2, 0.2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
            <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
              <mesh geometry={nodes.Gada_Material004_0.geometry} material={materials['Material.004']} />
              <mesh geometry={nodes.Gada_Material004_0_1.geometry} material={materials['Material.004']} />
              <mesh geometry={nodes.Gada_Material004_0_2.geometry} material={materials['Material.004']} />
              <mesh geometry={nodes.Gada_Material004_0_3.geometry} material={materials['Material.004']} />
              <mesh geometry={nodes.Gada_Material004_0_4.geometry} material={materials['Material.004']} />
              <mesh geometry={nodes.Gada_Material004_0_5.geometry} material={materials['Material.004']} />
              <mesh geometry={nodes.Gada_Material_0.geometry} material={materials.Material} />
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload('/lord_hanuman_gada.glb');
