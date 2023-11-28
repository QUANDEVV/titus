import React from 'react';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Navs = () => {
      return (
        <div className="relative">
          <div className="flex mt-2 mb-6 overflow-x-auto h-15 relative">
            
        <Link href="/Product/Report">
          <div className="flex items-center mx-4">Reports</div>
        </Link>

        <Link href="/Product/Dashboard">
          <div className="mx-4">Dashboard</div>
        </Link>

        <Link href="/Product/Community">
          <div className="mx-4">Community</div>
        </Link>

        <Link href="/Product/Survey">
          <div className="mx-4">Survey</div>
        </Link>

        <Link href="/Product/Search">
          <div className="mx-4">Search Engine</div>
        </Link>

        <Link href="/Product/Descriptive">
          <div className="mx-4">Descriptive Analytics</div>
        </Link>

        <Link href="/Product/Predictive">
          <div className="mx-4">Predictive Analysis</div>
        </Link>

        <Link href="/Product/Chatint">
          <div className="mx-4">Chat Interactions</div>
        </Link>

        <Link href="/Product/Chatan">
          <div className="mx-4">Chat Analysis</div>
        </Link>
      </div>
      <div className=" hidden sm:block absolute top-1 right-0 h-full  items-center pr-4">
        <IoIosArrowRoundForward size={40} />
      </div>
    </div>
  );
};

export default Navs;
