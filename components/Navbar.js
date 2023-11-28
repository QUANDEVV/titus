import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';
import Button from './Button';
// import Features from '../pages/features';
import Features from '../pages/features';


const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return '/';
      case 1:
        return '/about';
      case 2:
        return '/contact';
      case 3:
        return '/demo';
      case 4:
        return '/demo'
    }
  };

  return (
    <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
      {[''  ].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);

            if (isMobile) setIsOpen(false);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3
          ${active === item
            ? 'dark:text-white text-nft-black-1'
            : 'dark:text-nft-gray-3 text-nft-gray-2'} 
          ${isMobile && 'my-5 text-xl'}`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
      {/* <Link href="https://app.proximaai.co/" className='text-white rounded-md bg-proxima p-1'>
      Get Started

      </Link> */}
        

    
    </ul>
  );
};

const ButtonGroup = ({ setActive, router }) => {
  const hasConnected = true;

  return hasConnected ? (
    <div className="flexCenter">
     
    </div>
  ) : (
    <Button
      btnName="Connect"
      btnType="outline"
      classStyles="mx-2 rounded-lg"
      handleClick={() => {}}
    />
  );
};


const checkActive = (active, setActive, router) => {
  switch (router.pathname) {
    case '/':
      if (active !== 'Top Models') setActive('Top Models');
      break;
    case '/product':
      if (active !== 'Features') setActive('Features');
      break;
    case '/about':
      if (active !== 'About us') setActive('About us');
      break;
    case '/create-nft':
      if (active !== '') setActive('');
      break;
    default:
      setActive('');
  }
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Top Models');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTheme('light');
  }, []);

  useEffect(() => {
    checkActive(active, setActive, router);
  }, [router.pathname]);

  useEffect(() => {
    // disable body scroll when navbar is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row  dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1 mt-4 ">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer ml-2" onClick={() => setActive('')}>
          <Image 
  src={images.logo} 
  style={{ objectFit: 'contain', width: '110px', height: '50px' }} 
  alt="logo" 
/>

          
          </div>
        </Link>
        <Link href="/">
          <div
            className="hidden md:flex"
            onClick={() => {
              setActive('Explore NFTs');
              setIsOpen(false);
            }}
          >
           <Image 
  src={images.logo} 
  style={{ objectFit: 'contain', width: '110px', height: '50px' }} 
  alt="logo" 
/>

         
          </div>
        </Link>
      </div>

      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
         
        </div>

        <div className="md:hidden flex">
          <ul className="list-none flexCenter flex-row">
            <MenuItems active={active} setActive={setActive} />
          </ul>
          <div className="ml-4">
          
          </div>
        </div>
      </div>

     <div className="hidden md:flex ml-2">
        {!isOpen
          ? (
            <Image
            src={images.menu}
            style={{ objectFit: 'contain', width: '25px', height: '25px' , filter: 'invert(1)'}}
            alt="menu"
            onClick={() => setIsOpen(!isOpen)}
            className={theme === 'light' ? 'filter invert' : undefined}
          />
          
          )
          : (
            <Image
              src={images.cross}
              style={{ objectFit: 'contain', width: '20px', height: '20px' , filter: 'invert(1)'}}
              alt="close"
              onClick={() => setIsOpen(!isOpen)}
        
              className={theme === 'light' ? 'filter invert' : undefined}
            />
          )}

        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
              <ButtonGroup setActive={setActive} router={router} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
