import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
const Sidebar = ({ onOptionClick }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };
  

  const handleOptionClick = (option) => {
    toggleDropdown(option); // Toggle the dropdown state if needed
    onOptionClick(option); // Pass the selected option to the parent component
  };
  return (
    <div className="flex h-[300px]  ml-4 mt-4">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 flex-shrink-0 rounded-[4px]">
        <div className="p-4">
          <h2 className="text-xl mb-8">Proxima playground</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block text-white relative"
                onClick={() => toggleDropdown('Food')}
              >
                Food and Beverage
                <IoMdArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
              </a>

              {openDropdown === 'Food' && (
                <ul className="ml-4">
                  <li>
                    <a href="#" className="block text-white">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="block text-white relative"
                onClick={() => toggleDropdown('Insurance')}
              >
                Insurance
                <IoMdArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
              </a>

              {openDropdown === 'Insurance' && (
                <ul className="ml-4">
                  <li>
                    <a href="#" className="block text-white">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 3
                    </a>
                  </li>

                  
                </ul>
              )}
            </li>

            <li>
              <a
                href="#"
                className="block text-white relative"
                onClick={() => toggleDropdown('education')}
              >
                Education
                <IoMdArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
              </a>

              {openDropdown === 'education' && (
                <ul className="ml-4">
                  <li>
                    <a href="#" className="block text-white">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 3
                    </a>
                  </li>
                </ul>
              )}
            </li> <li>
              <a
                href="#"
                className="block text-white relative"
                onClick={() => toggleDropdown('banking')}
              >
            Banking
                <IoMdArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
              </a>

              {openDropdown === 'banking' && (
                <ul className="ml-4">
                  <li>
                    <a href="#" className="block text-white">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="block text-white relative"
                onClick={() => toggleDropdown('hospitality')}
              >
      Hospitality
                <IoMdArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
              </a>

              {openDropdown === 'hospitality' && (
                <ul className="ml-4">
                  <li>
                    <a href="#" className="block text-white">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="block text-white relative"
                onClick={() => toggleDropdown('elearning')}
              >
E-Learning
                <IoMdArrowDropdown className="absolute top-1/2 right-0 transform -translate-y-1/2" />
              </a>

              {openDropdown === 'elearning' && (
                <ul className="ml-4">
                  <li>
                    <a href="#" className="block text-white">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block text-white">
                      Option 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
