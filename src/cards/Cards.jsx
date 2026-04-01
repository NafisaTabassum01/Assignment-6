import React from 'react';
import { use } from "react";
import AllCards from '../allCards/AllCards';


const Cards = ({cardPromise}) => {
    
    console.log(cardPromise);
    const cards = use(cardPromise);
    console.log(cards);  
    return (
        
        <div className='W-10/12 mx-auto'>
        <div className='rounded-4xl text-center items-center mt-4'>
            <button className='btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[16px] font-bold'>Products</button>
            <button className='btn rounded-4xl bg-white text-[16px] font-medium'>Cart</button>
        </div>

            <AllCards cards={cards}></AllCards>
        </div>
    );
};

export default Cards;