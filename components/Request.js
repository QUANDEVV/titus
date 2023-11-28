import React from 'react';
import Typewriter from 'typewriter-effect';

const Request = () => {
  return (
    <div className='flex items-center'>
      <div className='ml-3'>
        <h1 className="text-6xl font-bold md:text-4xl ">
        Request A Demo
        </h1>
      </div>
      <div className='ml-4 mt-4 sm:mr-6 '>
        <a
          href="https://app.proximaai.co/"
          target="_blank"
          rel="noopener noreferrer"
          className='text-white rounded-md bg-proxima p-1 whitespace-nowrap'
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Request;
