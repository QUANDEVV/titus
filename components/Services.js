import React from 'react'
import Typewriter from 'typewriter-effect';


const Services = () => {
  return (


<div className='ml-3 mb-40 sm:mb-10 '>
      
<h1 className="text-6xl font-bold md:text-4xl ">

<Typewriter
          options={{
            strings: ['Data Analytics for  <br />Tenant-Client  <br />Interactions.'],
            autoStart: true,
            loop: true,
            pauseFor : 60000
         
          }}
        />
 
  </h1>

  <div className="flex  gap-4 mt-8 sm:overflow-x-auto ">
        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">In-Depth Insight</h2>
          <p className='sm:w-[250px]'>

          ProximaAI offers comprehensive data analytics for tenant-client interactions. We delve deep into communication channels, client demographics, and community metrics to provide actionable insights.

</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Strategic Analysis</h2>
          <p className='sm:w-[250px]'>Gain a competitive edge with ProximaAI's data-driven approach. We meticulously examine chats, issues, and client feedback, empowering you with the information needed to refine your tenant-client interactions.</p>
         
        </div>

        {/* <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          Metrics that Matter</h2>
          <p>ProximaAI tracks critical metrics, including chat counts, growth trends, and client satisfaction surveys. This granular data allows for targeted improvements in virtual agent performance and customer service strategies.</p>
         
        </div> */}

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          Enhancing Engagement</h2>
          <p className='sm:w-[250px]'>Leverage ProximaAI's data analytics to optimize customer engagement. By understanding the nuances of tenant-client interactions, you can tailor your approach for maximum impact and effectiveness.</p>
         
        </div>
      </div>


</div>
  )
}

export default Services