

// import React, { useState } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


// const Adoptpet = () => {
//   const [selectedData, setSelectedData] = useState('');

//   const showData = (data) => {
//     setSelectedData(data);
//   };
//   const [selectedState, setSelectedState] = useState('');
//   const [cities, setCities] = useState([]);
  
//   // Clear the selected state and cities
//   const clearSelection = () => {
//     setSelectedState('');
//     setCities([]);
//   };

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);

//     // Simulate fetching cities based on the selected state
//     // Replace this with actual data if available
//     const stateCities = {
//       state1: ['Vadodara','Anand','Bharuch','Navsari','Ahmedabad','Kutch'],
//       state2: ['City A', 'City B', 'City C'],
//     };

//     setCities(stateCities[e.target.value] || []);
//   };

//   return (
    
//     <div className="container mx-auto p-4  ">
//       <div className="my-4 box-content h-[450px] w-72 border-[1.5px] bg-zinc-200/100 border-gray-300">
//                 <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-banner-dancing-dog.gif' className='h-32 mx-auto  w-32'/>
//                 {/* <svg class="animate-bounce w-6 h-6 ...">
  
// </svg> */}
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
//             {city}
//           </option>
//         ))}
//       </select>

//       <button
//         className="mt-4 bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
//         onClick={clearSelection}
//       >
//         Clear Selector
//       </button>
//       </div>
//     </div>
//       <div className="space-x-4 ">
//         <button
//           onClick={() => showData(
//             <div className=''>
//           <div className='lg:flex inline-block  lg:justify-evenly'>
//              <div className=' box-content h-[500px] border-[1.5px] w-80 shadow-xl border-gray-300 '>
//               <img src='./assets/images/adopt/adopt1.jpg' className='h-60 mt-3 w-48 mx-auto'/>
//               <h1 className='text-gray-600 text-2xl font-semibold'>TIKA</h1>
//               <h1 className='text-gray-600 text-base font-semibold'>Male , Adolescence<br/>
// Gandhinagar,  Gujarat</h1><hr className='mt-2 border-1 '/>
// <h1 className='text-gray-600 text-sm font-semibold'>Owner details -</h1>
// <div className='flex gap-x-2 mt-2'>
// <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/user-icon-20210411.svg' alt='' className='h-10 w-10'/>
// <div className='inline-block'>
// <h1>Name:</h1>
// <h1>Number:<a href='#' className='text-blue-600 text-base '>contact:</a></h1>
// </div>
// </div>
// </div>
// <div className=' box-content h-[500px] border-[1.5px] w-80 shadow-xl border-gray-300 '>
//               <img src='./assets/images/adopt/adopt1.jpg' className='h-60 mt-3 w-48 mx-auto'/>
//               <h1 className='text-gray-600 text-2xl font-semibold'>Jimmy</h1>
//               <h1 className='text-gray-600 text-base font-semibold'>Female , Puppyhood<br/>
// Surat,  Gujarat</h1><hr className='mt-2 border-1 '/>
// <h1 className='text-gray-600 text-sm font-semibold'>Owner details -</h1>
// <div className='flex gap-x-2 mt-2'>
// <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/user-icon-20210411.svg' alt='' className='h-10 w-10'/>
// <div className='inline-block'>
// <h1>Name:</h1>
// <h1>Number:<a href='#' className='text-blue-600 text-base '>contact:</a></h1>
// </div>
// </div>
// </div>
// <div className=' box-content h-[500px] border-[1.5px] w-80 shadow-xl border-gray-300 '>
//               <img src='./assets/images/adopt/adopt1.jpg' className='h-60 mt-3 w-48 mx-auto'/>
//               <h1 className='text-gray-600 text-2xl font-semibold'>Eddie</h1>
//               <h1 className='text-gray-600 text-base font-semibold'>Male , Adolescence<br/>
//               Ahemdabad,  Gujarat</h1><hr className='mt-2 border-1 '/>
// <h1 className='text-gray-600 text-sm font-semibold'>Owner details -</h1>
// <div className='flex gap-x-2 mt-2'>
// <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/user-icon-20210411.svg' alt='' className='h-10 w-10'/>
// <div className='inline-block'>
// <h1>Name:</h1>
// <h1>Number:<a href='#' className='text-blue-600 text-base '>contact:</a></h1>
// </div>
// </div>
// </div>
// </div><br/>
// <div className='lg:flex inline-block justify-evenly'>
//              <div className='box-content h-[500px] border-[1.5px] w-80 shadow-xl border-gray-300 '>
//               <img src='./assets/images/adopt/adopt1.jpg' className='h-60 mt-3 w-48 mx-auto'/>
//               <h1 className='text-gray-600 text-2xl font-semibold'>TIKA</h1>
//               <h1 className='text-gray-600 text-base font-semibold'>Male , Adolescence<br/>
// Gandhinagar,  Gujarat</h1><hr className='mt-2 border-1 '/>
// <h1 className='text-gray-600 text-sm font-semibold'>Owner details -</h1>
// <div className='flex gap-x-2 mt-2'>
// <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/user-icon-20210411.svg' alt='' className='h-10 w-10'/>
// <div className='inline-block'>
// <h1>Name:</h1>
// <h1>Number:<a href='#' className='text-blue-600 text-base '>contact:</a></h1>
// </div>
// </div>
// </div>
// <div className=' box-content h-[500px] border-[1.5px] w-80 shadow-xl border-gray-300 '>
//               <img src='./assets/images/adopt/adopt1.jpg' className='h-60 mt-3 w-48 mx-auto'/>
//               <h1 className='text-gray-600 text-2xl font-semibold'>Jimmy</h1>
//               <h1 className='text-gray-600 text-base font-semibold'>Female , Puppyhood<br/>
// Surat,  Gujarat</h1><hr className='mt-2 border-1 '/>
// <h1 className='text-gray-600 text-sm font-semibold'>Owner details -</h1>
// <div className='flex gap-x-2 mt-2'>
// <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/user-icon-20210411.svg' alt='' className='h-10 w-10'/>
// <div className='inline-block'>
// <h1>Name:</h1>
// <h1>Number:<a href='#' className='text-blue-600 text-base '>contact:</a></h1>
// </div>
// </div>
// </div>
// <div className=' box-content h-[500px] border-[1.5px] w-80 shadow-xl border-gray-300 '>
//               <img src='./assets/images/adopt/adopt1.jpg' className='h-60 mt-3 w-48 mx-auto'/>
//               <h1 className='text-gray-600 text-2xl font-semibold'>Eddie</h1>
//               <h1 className='text-gray-600 text-base font-semibold'>Male , Adolescence<br/>
//               Ahemdabad,  Gujarat</h1><hr className='mt-2 border-1 '/>
// <h1 className='text-gray-600 text-sm font-semibold'>Owner details -</h1>
// <div className='flex gap-x-2 mt-2'>
// <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/user-icon-20210411.svg' alt='' className='h-10 w-10'/>
// <div className='inline-block'>
// <h1>Name:</h1>
// <h1>Number:<a href='#' className='text-blue-600 text-base '>contact:</a></h1>
// </div>
// </div>
// </div>
// </div>


//     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//       <div className="flex flex-1 justify-between sm:hidden">
//         <a
//           href="#"
//           className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//         >
//           Previous
//         </a>
//         <a
//           href="#"
//           className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//         >
//           Next
//         </a>
//       </div>
//       <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//         <div>
//           <p className="text-sm text-gray-700">
//             Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
//             <span className="font-medium">97</span> results
//           </p>
//         </div>
//         <div>
//           <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
//             <a
//               href="#"
//               className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               <span className="sr-only">Previous</span>
//               <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//             {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
//             <a onClick={() => showData('Data 2: This is the content for Data 2.')}
              
//               aria-current="page"
//               className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               1
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               2
//             </a>
//             <a
//               href="#"
//               className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
//             >
//               3
//             </a>
//             <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
//               ...
//             </span>
//             <a
//               href="#"
//               className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
//             >
//               8
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               9
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               10
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               <span className="sr-only">Next</span>
//               <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
  
// </div>
// )}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded"
//         >
//           Show Data 1
//         </button>
//         <button
//           onClick={() => showData('Data 2: This is the content for Data 2.')}
//           className="bg-green-500 hover:bg-green-700 text-white font-bold  py-2 px-4 rounded"
//         >
//           Show Data 2
//         </button>
//       </div>
//       <div className="mt-4 p-4 border border-gray-300  h-[1200px] w-[1300px]   rounded">
//         <p>{selectedData}</p>
//       </div>
//     </div>
//   );
// };
// export default Adoptpet;
import React, { useState } from 'react';
import NavBar from './NavBar';
import City1A from './City1A'; // Import the city components
import City2A from './City2A';
import Anand from './State/Anand';

function Adoptpet() {
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

   export default Adoptpet;

