import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-10/12 mx-auto border-none">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <li><a>products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonial</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <p className="text-2xl md:text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-2 bg-clip-text text-transparent">DigiTools</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a className='font-semibold text-[16px]'>Products</a>
        </li>
      <li>
        <a className='font-semibold text-[16px]'>Features</a>
        </li>
      <li>
        <a className='font-semibold text-[16px]'>Pricing</a>
        </li>
    <li>
        <a className='font-semibold text-[16px]'>Testimonials</a>
        </li>
      <li><a className='font-semibold text-[16px]'>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Get Started</a>
  </div>
</div>
<hr className='border border-gray-200' />
        </div>
           

    );
};

export default Navbar;