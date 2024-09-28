"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from '@react-three/postprocessing'; 
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]} 
    >
      <Suspense fallback={null}>{children}</Suspense>
      
      <Environment preset="dawn" />

      <EffectComposer>
        <Bloom 
          intensity={0.5} 
          width={200} 
          height={200} 
          kernelSize={3} 
          luminanceThreshold={0.1} 
          luminanceSmoothing={0.3} 
        />
      </EffectComposer>
    </Canvas>
  );
};

export default RenderModel;
