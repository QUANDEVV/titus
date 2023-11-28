import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import images from '../assets';

const About = () => {
  return (
    <div className="ml-3  mt-4 ">
      <h1 className="text-6xl font-bold md:text-4xl ">
        <Typewriter
          options={{
            strings: ['About Proximaai '],
            autoStart: true,
            loop: true,
            pauseFor: 60000,
          }}
        />
        {/* About us <br /> */}
      </h1>

      <div className="flex  gap-4 mt-8 sm:overflow-x-auto">
        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Welcome to ProximaAI</h2>
          <p className='sm:w-[300px]'>
            At ProximaAI, we specialize in connecting brands to virtual agents,
            transforming customer relationships into exceptional experiences.
            Our mission is to revolutionize the way organizations engage with
            their customers, elevating customer service to unprecedented heights.
          </p>
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Clear, Consistent, and Seamless Communication</h2>
          <p className='sm:w-[300px]'>
            We understand the vital role of technology in bridging the gap
            between businesses and their customers. ProximaAI focuses on
            creating clear, consistent, and seamless communication and feedback
            loops, ensuring that your customers feel valued and heard at every
            touchpoint.
          </p>
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Power of Community</h2>
          <p className='sm:w-[300px]' >
            We believe in the power of community. ProximaAI brings customers
            together in closely-knit networks, fostering deeper understanding
            and allowing them to share their journeys with your products or
            services. Our goal is to transform customers into advocates by
            creating an environment where their sentiments, feedback,
            complaints, and interests are effortlessly channeled to your
            organization.
          </p>
        </div>

        <div className="flex-1 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Our Vision</h2>
          <p className='sm:w-[300px]' >
            Our vision is to lead the way in the era of virtual agents,
            providing innovative solutions that enhance customer engagement.
            ProximaAI is committed to staying at the forefront of technology to
            ensure our clients experience continuous value and success in their
            customer interactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
