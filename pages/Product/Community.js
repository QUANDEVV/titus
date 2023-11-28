import React from 'react';

const Community = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className='report-section mt-4 flex ml-4 px-14 py-14 flex-row sm:flex-col sm:px-2 sm:py-2 sm:ml-0'>
        {/* Left Content */}
        <div className='sm:flex-1 '>
          <h1 className='text-6xl font-bold md:text-4xl'>Proxima <br /> Community</h1>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Get Detailed insights</h2>
            <p className='w-3/4 sm:w-full'>
              Gain valuable insights into your customer interactions with ProximaAI's
              comprehensive reporting feature. Our platform provides detailed reports
              on various aspects of tenant-client interactions, including chat volumes,
              issue resolutions, and client feedback. These reports empower you with the data
              you need to make informed decisions and refine your customer engagement
              strategies.
            </p>
          </div>
        </div>

        {/* Right Video */}
        <div className='mr-24 mt-20 sm:full sm:mt-4 sm:mr-0'>
          <video 
            className='w-full h-auto sm:h-full mx-auto'  
            autoPlay 
            muted 
            loop
          >
            <source src="/videos/1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Section 2 */}
      <section className='another-section mt-8 px-14 py-14'>
      <div className="flex  gap-4 mt-8 sm:overflow-x-auto ">
        <div className="flex-1 p-4 rounded">
        <video 
            className='w-full h-auto sm:h-full mx-auto'  
            autoPlay 
            muted 
            loop
          >
            <source src="/videos/1.mp4" type="video/mp4" />
          </video>
          <h2 className="text-xl font-bold mb-4">Elevate Customer Engagement</h2>
          <p className='sm:w-[250px]'>

          Experience a new era of customer interaction with ProximaAI. Our advanced virtual agents seamlessly connect brands and customers, employing modern techniques for smooth and efficient communication.

</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <video 
            className='w-full h-auto sm:h-full mx-auto'  
            autoPlay 
            muted 
            loop
          >
            <source src="/videos/2.mp4" type="video/mp4" />
          </video>
          <h2 className="text-xl font-bold mb-4">Seamless Communication</h2>
          <p className='sm:w-[250px]'>ProximaAI streamlines interactions, providing a clear and consistent feedback loop. Break down communication barriers, and build more connected brand-customer relationships.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <video 
            className='w-full h-auto sm:h-full mx-auto'  
            autoPlay 
            muted 
            loop
          >
            <source src="/videos/3.mp4" type="video/mp4" />
          </video>
          <h2 className="text-xl font-bold mb-4">
          Data-Driven Precision</h2>
          <p className='sm:w-[250px]'>ProximaAI meets you where you are, automatically connecting with and enhancing your existing data systems.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <video 
            className='w-full h-auto sm:h-full mx-auto'  
            autoPlay 
            muted 
            loop
          >
            <source src="/videos/2.mp4" type="video/mp4" />
          </video>
          <h2 className="text-xl font-bold mb-4">
          Predictive Strategies</h2>
          <p className='sm:w-[250px]'>Anticipate customer behavior with ProximaAI's predictive analytics. Adjust strategies for client interactions, ensuring a responsive and seamless experience, setting your organization ahead of the curve.</p>
         
        </div>
      </div>
      </section>

      {/* Section 3 */}
      <section className='another-section mt-8 px-14 py-14'>
      <div className="flex  gap-4 mt-8 sm:overflow-x-auto ">
        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Elevate Customer Engagement</h2>
          <p className='sm:w-[250px]'>

          Experience a new era of customer interaction with ProximaAI. Our advanced virtual agents seamlessly connect brands and customers, employing modern techniques for smooth and efficient communication.

</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Seamless Communication</h2>
          <p className='sm:w-[250px]'>ProximaAI streamlines interactions, providing a clear and consistent feedback loop. Break down communication barriers, and build more connected brand-customer relationships.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          Data-Driven Precision</h2>
          <p className='sm:w-[250px]'>ProximaAI meets you where you are, automatically connecting with and enhancing your existing data systems.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          Predictive Strategies</h2>
          <p className='sm:w-[250px]'>Anticipate customer behavior with ProximaAI's predictive analytics. Adjust strategies for client interactions, ensuring a responsive and seamless experience, setting your organization ahead of the curve.</p>
         
        </div>
      </div>
      </section>
    </div>
  );
};

export default Community;
