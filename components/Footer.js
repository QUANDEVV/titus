
import Image from 'next/image';
import { useTheme  } from 'next-themes';
import { BiLogoTiktok} from 'react-icons/bi';
import images from '../assets';
import Button from './Button';
import Link from 'next/link';
import { BiLogoFacebook} from 'react-icons/bi';
import {  BsInstagram } from 'react-icons/bs';
import {RxTwitterLogo} from 'react-icons/rx';
import React, { useState } from 'react';




const Footer = () => {
  const { theme } = useTheme();

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ email }), 
      });
  
      if (response.ok) {
        console.log('Email submitted successfully');
        
        setEmail('');
      } else {
        
        console.error('Failed to submit email:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting email:', error.message);
    }
  };
  









  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit(e); // This calls the same logic as form submission when the button is clicked
  };



  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo} objectFit="contain" width={80} height={50} alt="logo" />
            <p className=" dark:text-white text-nft-dark font-semibold text-lg ml-1"></p>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Get the latest updates</p>

         <form onSubmit={handleSubmit}>
            
            <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none"
              />
              <div className="flex-initial">
              <Button
                btnName="Email me"
                btnType="primary"
                classStyles="rounded-md"
                handleClick={handleButtonClick}
              />
              </div>
            </div>
          </form>
        </div>



        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
  <div heading="Proxima">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">Proxima</h3>

    <Link href='/Blogs'>
    <div className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">Blogs</div>
    </Link>
    
    {/* <div className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">How it Works</div> */}

<Link href='/contact'>
<div className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">Contact Us</div>
</Link>
    
  </div>

  <div heading="Support" extraClasses="ml-4">
  <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">Support</h3>

    {/* <div className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">Help Center</div> */}
    <Link href='/Terms'>
    <div className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">Terms of service</div>
    </Link>
    
  
    <Link href="/Privacy">
  <div className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">
    Privacy policy
  </div>
</Link>
  </div>
</div>



      </div>


<div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
  <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">&copy; 2023 Proxima, Inc. </p>
    <div className="flex flex-row sm:mt-4">
      {/* Instagram */}
      <div className="mx-2 cursor-pointer">
        <a href="https://instagram.com/proximaai_ke?igshid=c3ExODNiempyb3I=" target="_blank" rel="noopener noreferrer">
        <BsInstagram size={24}/>
        </a>
      </div>
      {/* Twitter */}
      <div className="mx-2 cursor-pointer">
        <a href="https://twitter.com/your-twitter-handle/" target="_blank" rel="noopener noreferrer">
        <RxTwitterLogo size={24}/>
        </a>
      </div>
      {/* TikTok */}

      {/* Facebook */}
      <div className="mx-2 cursor-pointer">
        <a href="https://www.facebook.com/ProximaAI" target="_blank" rel="noopener noreferrer">
        <BiLogoFacebook  size={24} />
          
        </a>
      </div>
   
      <div className="mx-2 cursor-pointer">
        <a href="https://www.tiktok.com/@proximaai?_t=8ezcVwXeTcE&_r=1" target="_blank" rel="noopener noreferrer">
        <BiLogoTiktok size={24}/> 
          
        </a>
      </div>
      
    </div>
  </div>
</div>


    </footer>
  );
};

export default Footer;