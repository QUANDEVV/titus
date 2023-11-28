import Typewriter from 'typewriter-effect';
import React from 'react';
import Link from 'next/link';
// import ai from '../videos/ai.mp4'
import ReactPlayer from 'react-player';
import video from '../public/videos/ai.mp4'
// import videos from '../public/videos/Aii.mp4'
import videos from '../public/videos/prox.mp4'



const Hero = () => {
  return (
    <section className='border-2 mt-32 border-black +'style={{borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}}>

    <div className='ml-3 mb-20 mt-4  '>
      <h1 className="text-8xl font-semibold md:text-5xl  sm:h-[130px]">
        {/* <Typewriter
          options={{
            strings: ['Connecting Brands through Virtual Agents.'],
            autoStart: true,
            loop: true,
            pauseFor : 600000
         
          }}
        /> */}

        Connecting Brands through 
        <br/>
        virtual Agents
      </h1>
      {/* <p className="mt-12 xs:mt-[80px] text-lg leading-8 text-gray-600 ">
                            Proxima leverages on modern practices to not only improve interaction,
                            but to also simplify and smoothen it.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/demo"
                                className="rounded-md border-2 border-proxima px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Try Demo
                            </Link>
    </div> */}

    <video 
  className='w-full mx-auto h-auto mt-32 '  
  autoPlay 
  muted 
  loop
>
  <source src={videos} type='video/mp4' />
</video>
    </div>


    

 


    </section>


  );
};

export default Hero;
