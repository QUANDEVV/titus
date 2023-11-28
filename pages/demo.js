import React from 'react';
import Sidebar from '../components/Demo/Sidebar';
import MessageList from '../components/Demo/MessageList';
import ChatWindow from '../components/Demo/ChatWindow';
import ChatWindows from '../components/Demo/ChatWindows';

const Demo = () => {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='sm:hidden'>
        <Sidebar />
      </div>

      {/* MessageList */}
      <div className="sm:hidden">
        <MessageList />
      </div>

      {/* ChatWindows */}
      <div className='sm:hidden'>
        <ChatWindows />
      </div>

      {/* Non-flexible div for small devices */}
      <div className='sm:block md:hidden lg:hidden xl:hidden minmd:hidden minlg:hidden'>
      <ChatWindow />
       
      </div>

 
    </div>
  );
}

export default Demo;
