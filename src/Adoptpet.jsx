import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Petdetails from './Petdetails';
const Adoptpet = () => {
  const [pets, setPets] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);


  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('https://finalserver-nrbk.onrender.com/api/pets');
        setPets(response.data);
      } catch (error) {
        // Handle error, e.g., display an error message to the user
        console.error(error);
      }
    };

    fetchPets();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  useEffect(() => {
    // Filter pets based on selectedState and selectedCity
    const filtered = pets.filter((pet) => pet.state === selectedState && pet.city === selectedCity);
    setFilteredPets(filtered);
  }, [selectedState, selectedCity, pets]);

  return (
    <>
<NavBar />
      <div className="lg:flex inline-block pt-[100px]  mb-0 w-full ">
        <div  className="box-content h-[360px] lg:fixed lg:h-[450px] lg:w-[340px] w-[85%] mx-auto  rounded-3xl border-[1.5px] bg-[#e4e4e7] border-gray-300 ">
          <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-banner-dancing-dog.gif' className='h-32 w-32 mx-auto' />
          
          <div className='mb-4'>
            <label htmlFor='state' className='block font-bold text-2xl text-center lg:mt-24 text-gray-700'>
              Select State:
            </label>
            <select
              id='state'
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className='mt-2 block lg:w-60 md:w-64 w-44 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300'
            >
              <option value=''>Select State</option>
              <option value='Gujarat'>Gujarat</option>
              <option value='Maharashtra'>Maharashtra</option>
            </select>

            {selectedState === 'Gujarat' && (
              <div className='mt-2'>
                <label htmlFor='city' className='block font-bold text-2xl  text-center text-gray-700'>
                  Select City:
                </label>
                <select
                  id='city'
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className='mt-2 block lg:w-60 w-44 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300'
                >
                  <option value=''>Select City</option>
                  <option value='Vadodara'>Vadodara</option>
                  {/* Add more city options for Gujarat if needed */}
                </select>
              </div>
            )}

            {selectedState === 'Maharashtra' && (
              <div className='mt-2'>
                <label htmlFor='city' className='block font-bold text-2xl  text-center text-gray-700'>
                  Select City:
                </label>
                <select
                  id='city'
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className='mt-2 block lg:w-60 md:w-90 w-44 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300'
                >
                  <option value=''>Select City</option>
                  <option value='Mumbai'>Mumbai</option>
                  {/* Add more city options for Maharashtra if needed */}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='box-content w-[95%]  border-[1px] lg:w-[900px] lg:ml-[30%] rounded-lg h-full lg:border-2 border-gray-400'>
      <h1 className='text-3xl text-center animate-bounce  pt-3 text-orange-600  '>Available pets for adoption</h1>
        <div className=' md:flex md:flex-wrap lg:flex lg:flex-wrap gap-3 space-y-5 lg:space-y-0 md:space-y-0 pt-10 justify-center '>
        

          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => (
              <>
               <div className=' flex  flex-wrap  justify-center'>
                <Link to={`/PetDetails/${pet._id}`}>
                <div  className=' box-content  h-[500px]   border-[1.5px] w-72 shadow-xl border-gray-300 '>
                  <div key={pet._id} className='items-center mb-4'>
                    <img src={`https://server4-qtq0.onrender.com/${pet.imageUrl}`} alt={pet.name} className='h-60 mt-3 w-48 mx-auto' />
                    <h1 key={pet._id} className='text-gray-600 text-2xl font-semibold'>{pet.name}</h1>
                    <h1 className='text-gray-600 text-base font-semibold'>{pet.age}<br />
                      {pet.city},  {pet.state}</h1><hr className='mt-2 border-1 ' />
                    <h1 className='text-gray-600 text-sm font-semibold'>Owner details -</h1>
                    <div className='flex gap-x-2 mt-2'>
                      <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/user-icon-20210411.svg' alt='' className='h-10 w-10' />
                      <div className='inline-block'>
                        <h1 >Name {pet.username}</h1>
                        <h1>Number:<a href='#' className='text-blue-600 text-base '>+{pet.mobileNumber}</a></h1>
                      </div>
                    </div>

                  </div>
   

                </div></Link>
              </div>
              </>
            ))
          ) : (
            <>
            <div className=''>
        <div className='dog-container'>
          <img className='dog-gif h-44 ' src='https://media.tenor.com/oQBNNsF1jA8AAAAi/darklajka-wsl.gif' alt='Running dog' />
          <img className='w-full h-40' src='./assets/images/logo192.png' />
        </div>
        <div className='dog-line '></div>
      </div>
            <div className='text-red-500 text-xl'>Sorry, no pets found for the selected state and city.</div>
          ,</>
          )}
        </div>
      </div>
    </>
  );
};

export default Adoptpet;


