"use client";
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import Playground from './Playground';

export default function ChatWindow() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [received, setReceived] = useState([]);
  const [temp, setTemp] = useState(false);
  const dataref = useRef('');
  const containerRef = useRef('');
  // const selectedCompany = useSelector(state => state.demo.selectedCompany);

  useEffect(() => {
    // Add WebSocket connection logic here if needed
  }, []);

  useEffect(() => {
    dataref.current = '';
    if (prompt.trim() !== '' && temp) {
      setMessages(prev => [...prev, { sender: 'user', message: prompt.trim() }]);
      setTemp(true);
      setPrompt('');
    }
  }, [prompt, temp]);

  const handleClick = () => {
    if (prompt.trim() === '') return;

    const message = {
      tenant_name: "Proxima Play", // Replace with actual tenant name or selectedCompany.name
      message: prompt.trim()
    };
    socket.send(JSON.stringify(message));
  };

  return (
    <div className='h-[520px] w-full relative p-4 shadow ring ring-gray-200 rounded-lg mt-6 overflow-hidden flex flex-col ml-12  '>
      <div className="flex flex-col items-center space-x-3 mb-5">
        <h1 className="text-2xl font-semibold text-[#2DABB1]">
          Proxima PlayGround 
        </h1>


  <Playground />
      </div>

      <div className="flex-1 h-[53vh] scrollbar-hide overflow-y-auto p-2 pb-20 flex flex-col items-start" ref={containerRef}>
        {messages.map((message, i) => (
          typeof message === 'object' ? (
            <p className='bg-slate-100 ml-10 rounded-md text-sm p-2 mb-2 self-end' key={i}>
              {message.message}
            </p>
          ) : (
            <p className='text-sm tracking-wider max-w-[29rem] h-auto bg-[#2DABB1] p-2 rounded-lg text-white' key={i}>
              {message}
            </p>
          )
        ))}
        {temp ? (
          <p className='bg-[#2DABB1] w-auto h-auto mr-10 rounded-md p-2 mb-2 text-white'>
            {dataref.current}
          </p>
        ) : null}
      </div>

      <form onSubmit={e => e.preventDefault()} className="w-full bg-white flex gap-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2">
        <input
          type="text"
          className='flex-1 px-4 py-2 bg-slate-100 rounded-md focus:outline-gray-400'
          placeholder='Ask a question'
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button
          type="button" // Changed to prevent form submission
          className='text-white bg-[#2DBBA1] px-4 py-2 rounded'
          onClick={handleClick}
        >
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
}