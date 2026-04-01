import React, { useState } from 'react';
import { use } from "react";
import AllCards from '../allCards/AllCards';
import SelectedCards from '../selectedCards/SelectedCards';
import { toast } from 'react-toastify';



const Cards = ({cardPromise}) => {
    
    console.log(cardPromise);
    const cards = use(cardPromise);
    console.log(cards); 
    
   const [selectedType , setSelectedType] = useState("available") 
   const [selectedCards , setSelectedCards] = useState([]);

   const handleRemoveCard = (indexToRemove) => {
        const removedCard = selectedCards[indexToRemove];

  const updatedCards = selectedCards.filter(function(card, index) {
    return index !== indexToRemove;
  });

  setSelectedCards(updatedCards);
  toast.info(`${removedCard.name} removed from cart.`);

};
const handleClearCart = () => {
  setSelectedCards([]);  
  toast.success("Checkout complete! Cart cleared!");
};

    return (
        
        <div className='W-10/12 mx-auto'>
        <div className='rounded-4xl text-center items-center mt-4'>
            
            
            <button onClick={()=> setSelectedType("available")}
            className={`btn rounded-4xl text-[16px] font-bold ${
            selectedType === "available"
    ?       "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
             : "bg-white text-black"}`}>
            Products</button>


            <button onClick={()=> setSelectedType("selected")}
            className={`btn rounded-4xl text-[16px] font-bold ${
            selectedType === "selected"
    ?       "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
             : "bg-white text-black"}`}>Cart({selectedCards.length}) </button>


        </div>

            {
  selectedType === "available" ? (
    <AllCards
      cards={cards}
      selectedCards={selectedCards}
      setSelectedCards={setSelectedCards}
    />
  ) : (
    <SelectedCards 
    selectedCards={selectedCards} 
    handleRemoveCard={handleRemoveCard}   
    handleClearCart={handleClearCart} />
  )
}
        </div>
    );
};

export default Cards;