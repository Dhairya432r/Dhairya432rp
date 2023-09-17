


import React, { useState } from 'react';
import NavBar from './NavBar';
import City1A from './City1A'; // Import the city components
import City2A from './City2A';
import Anand from './State/Anand';

function State() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const cityData = {
    state1: ['Vadodara', 'Anand', 'City 1C'],
    state2: ['City 2A', 'Mumbai', 'City 2C'],
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
  };

  const clearSelection = () => {
    setSelectedState('');
    setSelectedCity('');
  };

  return (
    <div className="lg:flex inline-block w-full ">
      
      <div className="box-content lg:fixed h-[650px]  lg:h-[450px] lg:w-[340px] w-full border-[1.5px] bg-zinc-200/100 border-gray-300 ">
        <label className="block font-bold text-2xl text-center lg:mt-24 text-gray-700">Select State:</label>
        <select
          className="mt-2 block lg:w-60 w-44 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">Select a state</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          {/* Add more states as needed */}
        </select>

        <label className="block font-bold text-2xl  text-center text-gray-700">Select City:</label>
        <select
          className="mt-2 block lg:w-60 w-44 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select a city</option>
          {selectedState &&
            cityData[selectedState].map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
        </select>

        <button
          className="mt-4 bg-orange-400 flex justify-center mx-auto hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
          onClick={clearSelection}
        >
          Clear Selector
        </button>
      </div>
    
      {/* {selectedCity && (
        <Anand cityName={selectedCity} />
      )} */}
      {selectedCity === 'Anand' && <Anand />}
      {selectedCity === 'Vadodara' && <City1A />}
      {selectedCity === 'Mumbai' && <City2A />}
  
      </div>
     );
   }
   

// function State() {
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   const cityData = {
//     state1: ['Vadodara', 'Anand', 'Ahmedabad','surat'],
//     state2: ['pune', 'Thane', 'Mumbai','Nasik'],
//   };

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//     setSelectedCity('');
//   };

//   const clearSelection = () => {
//     setSelectedState('');
//     setSelectedCity('');
//   };

//   return (
//     <>
//     <NavBar/>
//     <div className='w-full'>
//     <div className=" box-content h-[650px]  lg:h-[450px] lg:w-80 w-full border-[1.5px] bg-zinc-200/100 border-gray-300">
//       <div className=''>
//       {/* <h1 className=' text-3xl  absolute  right-0'>The Detail related to your city's<br/> pet is shown below <br/>*terms&condition<span><iframe src="https://giphy.com/embed/hJl9v892gjwLEdHoZv"  width="64" height="64" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></span></h1> */}
//                     <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-banner-dancing-dog.gif' className='h-32    w-32'/>
//     <div className='text-center '>
//       <label className="block font-bold text-2xl  lg:mt-24 text-gray-700">Search by State:</label>
//       <select
//         className="mt-2 block lg:w-60 w-44 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//         value={selectedState}
//         onChange={handleStateChange}
//       >
//         <option value="">Select a state</option>
//         <option value="state1">Gujarat</option>
//         <option value="state2">Maharastra</option>
//         {/* Add more states as needed */}
//       </select>
 
//       <label className="block font-bold text-2xl mt-6 text-gray-700">Select City:</label>
//       <select
//         className="mt-2 block lg:w-60 w-44 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//         value={selectedCity}
//         onChange={(e) => setSelectedCity(e.target.value)}
//       >
//         <option value="">Select a city</option>
//         {selectedState &&
//           cityData[selectedState].map((city, index) => (
//             <option key={index} value={city}>
//               {city}
//             </option>
//           ))}
//       </select>

//       <button
//         className="mt-4 bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
//         onClick={clearSelection}
//       >
//         Clear Selector
//       </button>

//       {/* Render the selected city component */}
//       {selectedCity === 'Vadodara' && <City1A />}
//       {selectedCity === 'Anand' && <Anand />}
//       {selectedCity === 'Mumbai' && <City2A />}
//     </div>
//     </div>
//     </div>
//     </div>
   
// function State() {
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   const cityData = {
//     state1: ['City 1A', 'City 1B', 'City 1C'],
//     state2: ['City 2A', 'City 2B', 'City 2C'],
//   };

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//     setSelectedCity('');
//   };

//   const clearSelection = () => {
//     setSelectedState('');
//     setSelectedCity('');
//   };

//   return (
//     <div className="my-4 box-content  h-[450px] w-full border-[1.5px] bg-zinc-200/100 border-gray-300">
//                    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-banner-dancing-dog.gif' className='h-32 mx-auto  w-32'/>

//         <div className='text-center'>
//       <label className="block font-bold text-2xl mt-6 text-gray-700">Search by State:</label>
     
//       <select
//          className="mt-2 block w-60 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//          value={selectedState}
//          onChange={handleStateChange}
//        >
//          <option value="">Select a State:</option>
//          <option value="state1">Gujarat</option>
//          <option value="state2">State 2</option>
//          {/* Add more states as needed */}     </select>

//       <label className="block mt-4 text-gray-700">Select City:</label>
//       <select
//         className="mt-2 block w-60 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//         value={selectedCity}
//         onChange={(e) => setSelectedCity(e.target.value)}
//       >
//         <option value="">Select a city</option>
//         {selectedState &&
//           cityData[selectedState].map((city, index) => (
//             <option key={index} value={city}>
//               {city}
//             </option>
//           ))}
//       </select>

//       <button
//         className="mt-4 bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
//         onClick={clearSelection}
//       >
//         Clear Selector
//       </button>

//       {/* Render the selected city component */}
//       {selectedCity === 'City 1A' && <City1A />}
//       {/* {selectedCity === 'City 2A' && <City2A />} */}
//     </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import City1A from './City1A';
// const State = () => {
//   const [selectedState, setSelectedState] = useState('');
//   const [cities, setCities] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
  
//   // Clear the selected state and cities
//   const clearSelection = () => {
//     setSelectedState('');
//     setCities([]);
//   };
 
  

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
    
//     const clearSelection = () => {
//           setSelectedState('');
//           setSelectedCity('');
//         };
    
//     // Simulate fetching cities based on the selected state
//     // Replace this with actual data if available
//     const stateCities = {
//       state1: ['Vadodara','Anand','Bharuch','Navsari','Ahmedabad','Kutch'],
//       state2: ['City A', 'City B', 'City C'],
//     };

//     setCities(stateCities[e.target.value] || []);
//   };

//   return (
//     <div className="my-4 box-content mx-auto h-[450px] w-72 border-[1.5px] bg-zinc-200/100 border-gray-300">
//                 <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-banner-dancing-dog.gif' className='h-32 mx-auto  w-32'/>

//         <div className='text-center'>
//       <label className="block font-bold text-2xl mt-6 text-gray-700">Search by State:</label>
//       <select
//         className="mt-2 block w-60 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//         value={selectedState}
//         onChange={handleStateChange}
//       >
//         <option value="">Select a State:</option>
//         <option value="state1">Gujarat</option>
//         <option value="state2">State 2</option>
//         {/* Add more states as needed */}
//       </select>

//       <label className="block font-bold text-2xl mt-6 text-gray-700">Search by City:</label>
//       <select
//         className="mt-2 block w-60 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
//       >
//         <option value="">Select a city</option>
//         {cities.map((city, index) => (
//           <option key={index} value={city}>
//             {city }
            
//           </option>
//         ))}
//       </select>

//       <button
//         className="mt-4 bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
//         onClick={clearSelection}
//       >
//         Clear Selector
//       </button>
//       {selectedCity === 'Vadodara' && <City1A/>}

//       </div>
//     </div>
//   );
// }

export default State;

