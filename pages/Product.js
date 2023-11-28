import React from 'react';
import Image from 'next/image';
import images from '../assets';
import AllFeatures from '../components/ALL FEATURES/AllFeatures';
import Report from '../components/ALL FEATURES/Report';
import Descriptive from '../components/ALL FEATURES/Descriptive';
import Predictive from '../components/ALL FEATURES/Predictive';
import Search from '../components/ALL FEATURES/Search';
import Community from '../components/ALL FEATURES/community';
import Chatinteractions from '../components/ALL FEATURES/chatinteractions';
import Chatanalysis from '../components/ALL FEATURES/chatanalysis';
import Survey from '../components/ALL FEATURES/Survey';
import Dashboard from '../components/ALL FEATURES/Dashboards';
import Navs from '../components/PRODUCT/nav';
import { IoIosArrowRoundForward } from "react-icons/io"







const Product = () => {
  return (
    <div className='ml-40 sm:ml-4 mr-4'>
    
     
     <Navs />


     <h1 className="text-6xl font-bold md:text-4xl ml-2 ">

    Product
  </h1>

  <div className="flex  gap-4 mt-8 sm:overflow-x-auto ">
        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Reports</h2>
          <p className='sm:w-[250px]'>

          Experience a new era of customer interaction with ProximaAI. Our advanced virtual agents seamlessly connect brands and customers, employing modern techniques for smooth and efficient communication.

</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <p className='sm:w-[250px]'>ProximaAI streamlines interactions, providing a clear and consistent feedback loop. Break down communication barriers, and build more connected brand-customer relationships.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          Community</h2>
          <p className='sm:w-[250px]'>ProximaAI meets you where you are, automatically connecting with and enhancing your existing data systems.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          Survey</h2>
          <p className='sm:w-[250px]'>Anticipate customer behavior with ProximaAI's predictive analytics. Adjust strategies for client interactions, ensuring a responsive and seamless experience, setting your organization ahead of the curve.</p>
         
        </div>


        



        
      </div>




      <div className="flex  gap-4 mt-8 sm:overflow-x-auto "> 
        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Search Engine</h2>
          <p className='sm:w-[250px]'>

          Experience a new era of customer interaction with ProximaAI. Our advanced virtual agents seamlessly connect brands and customers, employing modern techniques for smooth and efficient communication.

</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Descriptive analytics</h2>
          <p className='sm:w-[250px]'>ProximaAI streamlines interactions, providing a clear and consistent feedback loop. Break down communication barriers, and build more connected brand-customer relationships.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          predictive analytics</h2>
          <p className='sm:w-[250px]'>ProximaAI meets you where you are, automatically connecting with and enhancing your existing data systems.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          Chat interactions</h2>
          <p className='sm:w-[250px]'>Anticipate customer behavior with ProximaAI's predictive analytics. Adjust strategies for client interactions, ensuring a responsive and seamless experience, setting your organization ahead of the curve.</p>
         
        </div>


        


        



        
      </div>



      <div className="flex  gap-4 mt-8 sm:overflow-x-auto "> 
        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Chatanalysis</h2>
          <p className='sm:w-[250px]'>

          Experience a new era of customer interaction with ProximaAI. Our advanced virtual agents seamlessly connect brands and customers, employing modern techniques for smooth and efficient communication.

</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4"></h2>
          <p className='sm:w-[250px]'></p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
         </h2>
          <p className='sm:w-[250px]'></p>
         
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">
          </h2>
          <p className='sm:w-[250px]'></p>
         
        </div>


        


        



        
      </div>







<div className=''>
<h1 className="text-6xl font-bold md:text-4xl ml-2  mt-16">

   Industries
 </h1>

 <div className="flex  gap-4 mt-8 sm:overflow-x-auto ">
       <div className="flex-1 p-4 rounded">


       <Image 
  src={images.automotive} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
         <h2 className="text-xl font-bold mb-4">Automotive Dealerships</h2>
         <p className='sm:w-[250px]'>

         Proxima can facilitate direct communication between car
manufacturers/dealers and customers, allowing for swift feedback on products and services. Community
platforms can build a sense of brand loyalty, while sentiment analysis could guide product improvements.

</p>
        
       </div>

       <div className="flex-1 p-4 rounded">
       <Image 
  src={images.doctor} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
         <h2 className="text-xl font-bold mb-4">Healthcare Providers</h2>
         <p className='sm:w-[250px]'>For healthcare, Proxima could streamline patient feedback systems,
ensuring that concerns, suggestions, and experiences are conveyed efficiently. It can foster patient
communities for support and knowledge sharing while analyzing sentiments to enhance care delivery.</p>
        
       </div>

       <div className="flex-1 p-4 rounded">
       <Image 
  src={images.online} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }}
  alt="logo" 
/>
         <h2 className="text-xl font-bold mb-4">
         Online Retailers</h2>
         <p className='sm:w-[250px]'>Proxima&#39;s platform could enable online retailers to gather customer feedback
easily and personalize their shopping experiences. Communities could share insights and experiences,
while sentiment analysis could aid in targeted marketing and product recommendations.</p>
        
       </div>

       <div className="flex-1 p-4 rounded">
       <Image 
  src={images.financial} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
         <h2 className="text-xl font-bold mb-4">
         Financial Institutions</h2>
         <p className='sm:w-[250px]'>Proxima can help financial institutions gather customer sentiments
about services and products, enabling them to tailor offerings better. It can also streamline feedback on
customer service experiences and channel them effectively for quick resolutions.</p>
        </div>
       
       </div>



       <div className="flex  gap-4 mt-8 sm:overflow-x-auto "> 

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.travel} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>

          <h2 className="text-xl font-bold mb-4">Travel Agencies</h2>
          <p className='sm:w-[250px]'>

          Proxima could assist travel agencies in collecting traveler feedback for
services, destinations, and accommodations. Community building could enhance the sharing of travel
experiences, while sentiment analysis could guide in offering personalized travel packages.

</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.house} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
          <h2 className="text-xl font-bold mb-4">Real Estate Agencies</h2>
          <p className='sm:w-[250px]'>Proxima&#39;s platform can gather client feedback for real estate services,
ensuring prompt responses to concerns or inquiries. Creating communities could foster trust and
knowledge sharing among buyers and sellers.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.learn} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>

          <h2 className="text-xl font-bold mb-4">
          E-learning Platforms</h2>
          <p className='sm:w-[250px]'>Proxima&#39;s system could gather feedback from students regarding
course content, learning experiences, and support services. It could facilitate student communities for
collaborative learning while using sentiment analysis to enhance course offerings.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.star} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
          <h2 className="text-xl font-bold mb-4">
          Telecommunications Companies</h2>
          <p className='sm:w-[250px]'>Proxima could assist telecom companies in gathering
feedback on services, network quality, and customer support. Building communities of users could
facilitate peer-to-peer support and insights for service improvement.</p>
         
        </div>


        



        
      </div>




      <div className="flex  gap-4 mt-8 sm:overflow-x-auto "> 
        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.hospitality} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
          <h2 className="text-xl font-bold mb-4">Hospitality Industry</h2>
          <p className='sm:w-[250px]'>

          Proxima can streamline guest feedback collection, ensuring that hotels
and resorts gather comprehensive insights from visitors. By creating community spaces for guests,

establishments can understand preferences better and tailor their services. Insights derived from data
analysis could optimize operations and personalize guest experiences.
</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.insurance} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
          <h2 className="text-xl font-bold mb-4">Insurance Providers</h2>
          <p className='sm:w-[250px]'>Proxima&#39;s platform could facilitate smoother communication between
insurance providers and policyholders. It could streamline claims processes, gather feedback on service
quality, and nurture communities for shared experiences, fostering trust and loyalty among clients.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.tech} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
          <h2 className="text-xl font-bold mb-4">
          Technology Companies</h2>
          <p className='sm:w-[250px]'>For tech firms, Proxima&#39;s focus on feedback and sentiment analysis
could be invaluable. It could help in refining user experience, identifying and resolving issues promptly,
and building strong user communities for product improvement and innovation.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.fit} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
          <h2 className="text-xl font-bold mb-4">
          Fitness and Wellness Centers</h2>
          <p className='sm:w-[250px]'>Proxima could aid in creating supportive communities
among members, encouraging engagement and sharing experiences. Gathering feedback on services,
classes, and facilities could guide improvements, while sentiment analysis could help in personalizing
wellness programs.</p>
         
        </div>


        



        
      </div>





      <div className="flex  gap-4 mt-8 sm:overflow-x-auto "> 
        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.legal} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
          <h2 className="text-xl font-bold mb-4">Legal Services</h2>
          <p className='sm:w-[250px]'>

          Feedback loops established by Proxima could enhance client relationships in law
firms. Clients could express concerns or satisfaction more easily, and sentiment analysis could provide
insights into areas for service enhancement. Secure communication channels could also be established for
sensitive legal matters.

</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.event} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
          <h2 className="text-xl font-bold mb-4">Event Management</h2>
          <p className='sm:w-[250px]'>Proxima’s platform could assist in gathering attendee
feedback post-events, aiding in understanding preferences for future events. It could also facilitate
networking among attendees and speakers, fostering a community around shared interests.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
        <Image 
  src={images.gvt} 
  style={{ objectFit: 'contain', width: '450px', height: '350px' }} 
  alt="logo" 
/>
       
          <h2 className="text-xl font-bold mb-4">
          Government Agencies</h2>
          <p className='sm:w-[250px]'>Proxima&#39;s system could modernize citizen engagement by
providing easy channels for feedback and complaints. Analyzing sentiments could offer insights into
public opinions, enabling government agencies to respond effectively and improve services.</p>
         
        </div>

        <div className="flex-1 p-4 rounded">
       
          <h2 className="text-xl font-bold mb-4">
          </h2>
          <p className='sm:w-[250px]'></p>
         
        </div>


        



        
      </div>





       </div>

    </div>

  );
}

export default Product;



