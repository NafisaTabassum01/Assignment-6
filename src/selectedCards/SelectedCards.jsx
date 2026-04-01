import React from 'react';
import writing from '../assets/products/writing.png';
import camera from '../assets/products/camera.png';
import designTool from '../assets/products/design-tool.png';
import operation from '../assets/products/operation.png';
import portfolio from '../assets/products/portfolio.png';
import socialMedia from '../assets/products/social-media.png';
import { toast } from 'react-toastify';


const SelectedCards = ({selectedCards , handleRemoveCard , handleClearCart} ) => {
   
const totalPrice = selectedCards.reduce(
  (total, card) => total + card.price,
  0
);

   console.log(selectedCards, "selectedCards")
    const iconMap = {
     writing: writing,
     camera: camera,
     designTool: designTool,
     operation: operation,
     portfolio: portfolio,
     socialMedia: socialMedia,
   };
   

   return (
        <div>
            <div className='w-10/12 mx-auto border border-gray-300 rounded-3xl mt-10'>
            <h3 className='font-semibold text-[24px] p-5'>Your Cart</h3>

                <div className="w-10/12 mx-auto mt-6">

      <h2 className="text-2xl font-bold mb-4">
        Selected Products ({selectedCards.length})
      </h2>

      {
        selectedCards.length === 0 ? (
          <p className="text-gray-400">
            Your cart is empty.
          </p>
        ) : (
          selectedCards.map((card,index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-xl mb-3">
                <div className='flex justify-between'>
              <div className='flex gap-5'>
                <img src={iconMap[card.icon]} 
                    alt={card.name} 
                    className='h-8' />
              <div>
              <h3 className="font-semibold">{card.name}</h3>
              <p>${card.price}</p>
              </div>

                </div>
                <button onClick={() => {
                  handleRemoveCard(index);
                }}

                className='btn border-none text-red-500 bg-white shadow-none'> Remove</button>
                </div>
                </div>
  
          )
          ))}
          <div className='flex justify-between my-8'>
                    <p className='text-gray-400'>Total : </p>
                    <p className="font-bold text-xl">${totalPrice}</p>
                </div>
                <button   onClick={handleClearCart}
                className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-4xl mb-4'>Proceed to Checkout</button>
            

    </div>


            </div>
            
        </div>
    );
};

export default SelectedCards;