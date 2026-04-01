import React from 'react';
import person from '../assets/user.png';
import box from '../assets/package.png';
import rocket from '../assets/rocket.png';



const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] pb-8 mt-5'>
            <div className='w-10/12 mx-auto pt-10'>
            <h1 className='font-bold text-[48px] text-center items-center'>Get Started in 3 Steps</h1>
            <p className='text-[16px] text-gray-400 text-center items-center pt-3 pb-5'>Start using premium digital tools in minutes, not hours.</p>
            
            
            <div className=' gap-5 md:grid grid-cols-3'>
                
                
                <div className='bg-white rounded-2xl px-8 text-center mb-4'>
            <div className='flex justify-center pt-14 pb-5'> <img src={person} alt=""/></div>
                <h2 className='font-bold text-[24px]'>Create Account</h2>
                <p className='text-[16px] text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>


                <div className='bg-white rounded-2xl px-8 text-center mb-4'>
            <div className='flex justify-center pt-14 pb-5'><img src={box} alt=""/></div>                
            <h2 className='font-bold text-[24px]'>Create Account</h2>
                <p className='text-[16px] text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>


                <div className='bg-white rounded-2xl px-8 pb-8 text-center mb-4'>
              <div className='flex justify-center pt-14 pb-5'><img src={rocket} alt=""/></div>  
                <h2 className='font-bold text-[24px]'>Create Account</h2>
                <p className='text-[16px] text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>
            </div>
       </div> 
       </div>
    );
};

export default GetStarted;