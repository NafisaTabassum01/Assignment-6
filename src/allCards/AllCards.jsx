import React from 'react';
import writing from '../assets/products/writing.png';
import camera from '../assets/products/camera.png';
import designTool from '../assets/products/design-tool.png';
import operation from '../assets/products/operation.png';
import portfolio from '../assets/products/portfolio.png';
import socialMedia from '../assets/products/social-media.png';



const AllCards = ({cards,selectedCards,setSelectedCards}) => {
   
   console.log(cards, "cards")
   const iconMap = {
  writing: writing,
  camera: camera,
  designTool: designTool,
  operation: operation,
  portfolio: portfolio,
  socialMedia: socialMedia,
};
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-10/12 mx-auto mt-6'>

{
    cards.map(card => {
        console.log(cards,'card')
        return <div className="card bg-base-100 border border-gray-200 rounded-2xl">
  <div className="card-body">

<div className='flex justify-between'>

    <img src={iconMap[card.icon]} alt={card.name} />
<span className="badge badge-soft badge-primary">{card.tagType}</span>
    
</div>
     <div className="">
      <h2 className="text-[24px] font-bold">{card.name}</h2>
      <p className='text-[16px] text-[#627382]'>{card.description}</p>

      <span className="text-[24px]">${card.price}/<span className='text-[16px] text-[#627382]'>mo</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-[16px] text-[#627382] ">
  {
    card.features.map((feature, index) => (
      <li key={index}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 me-2 inline-block text-success"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>

        <span>{feature}</span>
      </li>
    ))
  }
</ul>
    <div className="mt-6">
      <button   onClick={() => setSelectedCards([...selectedCards, card])}
 
      className="btn btn-primary btn-block rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Buy Now</button>
    </div>
  </div>
</div>
    })}
        </div>
    );
};

export default AllCards;