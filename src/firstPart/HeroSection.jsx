import React from 'react';
import banner from '../assets/banner.png';
const HeroSection = () => {
    return (
        <div>
      <div className='flex flex-col w-10/12 mx-auto mt-15 justify-around md:flex-row gap-8'>
        <div><p className='font-bold text-6xl'>Supercharge Your <br /> Digital Workflow</p>
        <p className='text-gray-500 text-[18px] mt-5 mb-5'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>
<button className='btn rounded-3xl mr-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>
<button className='btn border border-purple-600 rounded-3xl bg-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semi-bold '>Watch Demo</button>
        </div>
        <div><img src={banner} alt="" /> </div>
      </div>
        </div>
    );
};

export default HeroSection;