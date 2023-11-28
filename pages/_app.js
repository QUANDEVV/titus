import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Space_Grotesk } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";

import '../styles/globals.css';
import { useState } from 'react';

const inter = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

const MyApp = ({ Component, pageProps }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
    setModalIsOpen(false);
  };

  return (
    <ThemeProvider attribute="class">
      <div className={`${inter.className}  bg-white mx-20 min-h-screen `}>
        <div className="blurred-container" style={{
            filter: overlayVisible && window.innerWidth <= 640 ? 'blur(15px)' : 'none',
          }}>
          <Navbar />
          {/* chat iframe will be visible here  */}
          <div className="pt-65">
            <Component {...pageProps} />
          </div>
        </div>

        <div className={`relative overlay-container ${overlayVisible ? "active" : ""}`}>
          <div className="w-48 h-48 relative flex">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              className={`fixed right-[3.5rem] z-10 border-2 border-proxima bottom-[6.5rem] bg-white p-5 h-auto w-[14rem] rounded-lg ${modalIsOpen ? "modal-fade-in" : "modal-fade-out"}`}
              overlayClassName="modal-overlay"
            >
              <div className="modal-inner-content">
                <h2 className="text-xs font-bold mb-2 flex items-center w-full justify-between text-black">
                  Welcome to ProximaAI 👋!
                  <AiFillCloseCircle onClick={() => setModalIsOpen(false)} className="float-right cursor-pointer text-primary text-proxima" size={20} />
                </h2>
                <p className="text-gray-600 text-xs">
                  We are excited to have you here. Feel free to explore and connect with us.
                </p>
              </div>
            </Modal>
            <button
              onClick={toggleOverlay}
              style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                zIndex: 1000,
                cursor: "pointer",
              }}
            >
              <div className="bg-proxima h-12 w-12 rounded-full text-2xl flex items-center justify-center ">
                <IoChatbubblesOutline size={24} className="text-white" />
              </div>
            </button>
          </div>
           <div
                  className={`chatbot-overlay ${overlayVisible ? "active" : ""}`}
                  style={{
                      position: "fixed",
                      bottom: 0,
                      right: 0,
                     
                      zIndex: 999,
                      transition: "opacity 0.3s, visibility 0.3s",
                      opacity: overlayVisible ? 1 : 0,
                      visibility: overlayVisible ? "visible" : "hidden",
                  }}
              >
            <iframe
              // src="https://chatter-coral.vercel.app/"
              src="http://localhost:3001/"


              title="Chatbot"
              className='  w-[450px] h-[650px]  sm:h-screen  sm:w-screen   borderRadius:"10px ,'
              style={{
               
                border: "none",
                borderRadius: "10px",
                overflow: "hidden",
            }}
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
      <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />
    </ThemeProvider>
  );
};

export default MyApp;
