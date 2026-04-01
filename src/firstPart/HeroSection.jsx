import React from 'react';
import banner from '../assets/banner.png';
import ball from '../assets/round.png';
const HeroSection = () => {
    return (
        <div>
          <div className='flex flex-col w-10/12 mx-auto mt-15 justify-around md:flex-row gap-8'>
        <div>
          <div className='bg-[#E1E7FF] text-[16px] text-purple-500 flex gap-3 px-2 py-1 rounded-4xl w-10/12 md:w-6/12'>
            <img src={ball} alt=""/>
            <p>New: AI-Powered Tools Available</p></div>
      
          <p className='font-bold text-6xl'>Supercharge Your <br /> Digital Workflow</p>
        <p className='text-gray-500 text-[18px] mt-5 mb-5'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>
<button className='btn rounded-3xl mr-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>
<button className='btn border border-purple-600 rounded-3xl bg-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semi-bold '>Watch Demo</button>
        </div>
        <div><img src={banner} alt="" /> </div>
      </div>
      <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-around mx-auto text-center px-6 mt-10 p-2'>
       
        <div>
          <p className='font-bold text-[30px] md:text-[60px]'>50K+</p>
           <p className='text-[18px] md:text-[24px] font-medium text-gray-200'>Active Users</p>
        </div>

          <div className="w-px h-20 bg-gray-300 mx-6 mt-4  mb-4 "></div>

        <div>
          <p className='font-bold text-[30px] md:text-[60px]'>200+</p>
           <p className='text-[18px] md:text-[24px] font-medium text-gray-200'>Premium Tools</p>
        </div>

          <div className="w-px h-20 bg-gray-300 mx-6 mt-4 mb-4"></div>

        <div>
          <p className='font-bold text-[30px] md:text-[60px]'>4.9</p>
           <p className='text-[18px] md:text-[24px] font-medium text-gray-200'>Rating</p>
        </div>

        </div>
        </div>
    );
};

export default HeroSection;