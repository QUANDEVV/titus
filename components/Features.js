import React from 'react'
import Typewriter from 'typewriter-effect';


const Features = () => {
  return (

    <section className='border-2  border-black +'style={{borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}}>

<div className='ml-3 mb-40 sm:mb-10 mt-16' >
      
<div className=" text-neutral-800 text-6xl ">Powering AI-assisted decision<br/>making — from war zones to<br/>factory floors.</div>

  <div className="flex  gap-4 mt-28 sm:overflow-x-auto ">
        <div className="flex-1 p-4 rounded ml-44 ">
          {/* <h2 className="text-4xl font-semibold mb-4"></h2> */}
          <p className='sm:w-[250px] text-[20px] font-[500]' >

          Experience a new era of customer interaction with ProximaAI. Our advanced virtual agents seamlessly connect brands and customers, employing modern techniques for smooth and efficient communication.

</p>
         
        </div>

        

        <div className="flex flex-col flex-1 p-4 rounded ">
          <div className='flex flex-col gap-[32px]'>
          <h2 className="text-xl  ">
          We are in an era of unprecedented disruption. Palantir recognizes our customers' existential need to utilize software for trusted, secure decision making — and to win in the warfighting context.</h2>
          <p className='text-xl sm:w-[250px] '>Organizations cannot settle for incremental efficiencies. Bring intelligence to the core of everything that matters most to your enterprise.</p>
          </div>

          <p  className='border-2 mt-3 py-20 border-black +'style={{borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}}>Learn more about proxima</p>
         
         
        </div>

        
      </div>


</div>
</section>

  )
}

export default Features