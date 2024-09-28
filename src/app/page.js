"use client"; 

import React from 'react';
import RenderModel from '@/components/RenderModel';
import Gada from '@/components/Gada';
import Component1 from '@/components/Component1';
import Component2 from '@/components/Component2';
import Component3 from '@/components/Component3';


const Home = () => {
  return (
    <>
      <div className="relative w-full  flex flex-col ">
        <div className='w-full h-full' id='container3D'>
          <RenderModel>
            <Gada/>
          </RenderModel>
        </div>
        <Component1/>
        <Component2/>
        <Component3/>
      </div>
    </>
  );
};

export default Home;