import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import images from '../assets'


const Capability = () => {
  return (
    <div className='ml-3 mb-40 sm:mb-10 '>
      <h1 className="text-6xl font-bold md:text-4xl ">
        {/* <Typewriter
          options={{
            strings: ['What Makes ProximaAI Platforms Powerful.'],
            autoStart: true,
            loop: true,
            pauseFor: 60000
          }}
        /> */}
        What Makes Proxima <br /> Platforms Powerful.
      </h1>

      <div className="flex  gap-4 mt-8 sm:overflow-x-auto ">
        <div className="flex-1 p-4 rounded">
        <h2 className="text-xl font-bold mb-4">Day 1 Value</h2>
          <p className='sm:w-[250px]'>

Our platforms deliver value out of the box.



</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">AI Decision Advantage Accross Your Organisation</h2>
          <p className='sm:w-[250px]'>Bring intelligence to your entire enterprise, and to the core of the decisions and operations that matter most.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
Full Stack Interoperability</h2>
          <p className='sm:w-[250px]'>ProximaAI meets you where you are, automatically connecting with and enhancing your existing data systems.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
Multi-Layered Security and Data Privacy</h2>
          <p className='sm:w-[250px]'>Our approach to security enables collaboration instead of inhibiting it. With founding roots in intel and defense</p>
         
        </div>
      </div>


  


</div>
  )
}

export default Capability
