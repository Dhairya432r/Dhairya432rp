import React from 'react';
import './App.css'
const PriceBox = ({ price, details, selected, onSelect }) => {
  return (
    <div className='flex justify-center'>
    <div className={`  price-box border ${selected ? 'border-orange-500 border-[2px]' : 'border-gray-300 border-[2px]'} w-[95%] p-4 rounded-md  mb-4`}>
      <input
        type="radio"
        onChange={onSelect}
        checked={selected}
        className="text-orange-500 mr-2"
      />
      {/* <h1></h1> */}
      <div className="flex justify-between  items-center">
        <div className=''>
          
        <h2 className="text-xl font-bold">{price}</h2>
        {/* <hr className='h-[2px] w-full bg-black'/> */}
        </div>
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Show Details
        </button> */}
      </div>
      {selected && <p className="mt-4">{details}</p>}
    </div>
    </div>
  );
};

export default PriceBox;
