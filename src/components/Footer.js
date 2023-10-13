import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    // const customStyle = {
    //     fontFamily: 'Your Custom Font, sans-serif',
    //     // Other font-related styles (fontSize, fontWeight, etc.) can be added here.
    //   };
  return (
    <div>
      <div className="font-serif flex justify-between items-center h-20 mx-auto bg-purple-400 text-white p-4 absolute">
        {/* Your text content goes here */}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
      <div className="font-serif flex justify-between items-center h-20 mx-auto bg-purple-400 text-white p-4 absolute">
      <div className='flex justify-between items-center relative h-20'>
        {<AiFillInstagram />}
        </div>
        <div className='flex justify-between items-center relative h-20'>
        {<AiFillInstagram />}
        </div>
        <div className='flex justify-between items-center relative h-20'>
        {<AiFillInstagram />}
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
