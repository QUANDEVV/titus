import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneForward  } from 'react-icons/bs';
import { GoLocation  } from 'react-icons/go';




const Contact = () => {
  return (
    <div className='ml-4  mt-4'>
      <h1 className="text-6xl font-bold md:text-4xl">
      Interested in solving <br />your problems with <br />
      Proxima software?
      </h1>

      <div className="flex flex-wrap gap-4 mt-8">
  <div className="flex-1 p-4 rounded">
    <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
    
    <div className="flex items-center mb-2">
      <AiOutlineMail className="text-2xl" />
      <p className="text-lg text-gray-700 ml-2">Contact Emails</p>
    </div>
    
    <p className="text-gray-700 text-lg mb-2">sales@proximaai.co</p>
    <p className="text-gray-700 text-lg mb-6">administrator@proximaai.co</p>

    <div className="flex items-center mb-2">
      <BsTelephoneForward className="text-2xl" />
      <p className="text-lg text-gray-700 ml-2">Phone Number</p>
    </div>
    
    <p className="text-gray-700 text-lg mb-6">+254759481887</p>

    <div className="flex items-center">
      <GoLocation className="text-2xl" />
      <p className="text-lg text-gray-700 ml-2">Where we are Located</p>
    </div>
    
    <p className="text-gray-700 text-lg">Juja Modern Hospital, Juja, Kenya</p>
  </div>
{/* </div> */}


        <div className="flex-1 p-4 rounded">
          <h2 className="text-3xl font-bold mb-4">Let's Talk?</h2>
          <p className="text-gray-700 mb-6">
            Make sure that the organizations achieve customer satisfaction through efficient interactions.
          </p>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="John Doe" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="youremail@gmail.com" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Subject</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Subject..." />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Your Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-md" rows="4" placeholder="Type your message..."></textarea>
            </div>

            <button className="bg-blue-500 text-white py-3 px-6 rounded-md" type="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
