
import React, { useState } from 'react';
import NavBar from './NavBar';
import City1A from './City1A'; // Import the city components
// gujarat
import Ahmedabad from './State/Ahmedabad';

import Vadodara from './State/Vadodara';
import Surat from './State/Surat';
import Gandhinagar from './State/Gandhinagar';
import Rajkot from './State/Rajkot';
import Jamnagar from './State/Jamnagar';
import Bhavnagar from './State/Bhavnagar';
import Junagadh from './State/Junagadh';
import Anand from './State/Anand';
import Porbandar from './State/Porbandar';
import Patan from './State/Patan';
import Bharuch from './State/Bharuch';
import Valsad from './State/Valsad';
import Dwarka from './State/Dwarka';
import Surendranagar from './State/Surendranagar';
import Dahod  from './State/Dahod';
import Morbi from './State/Morbi';
import Mehsana from './State/Mehsana';
import Palanpur from './State/Palanpur';
import Nadiad from './State/Nadiad';
import Navsari from './State/Navsari';
import Amreli from './State/Amreli';
import Bhuj from './State/Bhuj';
import Botad from './State/Botad';



//Maharastra

import Pune from './State2/Pune';
import Mumbai from './State2/Mumbai';
import Aurangabad from './State2/Aurangabad';
import Nagpur from './State2/Nagpur';
import Nashik from './State2/Nashik';
import Kolhapur from './State2/Kolhapur';
import Solapur from './State2/Solapur';
import Amravati from './State2/Amravati';
import Thane from './State2/Thane';
import Nanded from './State2/Nanded';
import Jalgaon from './State2/Jalgaon';
import Chandrapur from './State2/Chandrapur';

import Ahmednagar from './State2/Ahmednagar';
import Dhule from './State2/Dhule';
import Satara from './State2/Satara';
import Beed from './State2/Beed';
import Ratnagiri from './State2/Ratnagiri';
import Wardha from './State2/Wardha';
import Latur from './State2/Latur';
import Parbhani from './State2/Parbhani';
import Jalna from './State2/Jalna';
import Gondia from './State2/Gondia';
import Sangli from './State2/Sangli';
import Osmanabad from './State2/Osmanabad';



function Adoptselector() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const cityData = {
    state1: ['Vadodara', 'Anand', 'Ahmedabad','Surat','Gandhinagar','Jamnagar','Rajkot','Junagadh','Bhavnagar',' Anand','Porbandar','Patan','Bharuch','Valsad','Dwarka','Surendranagar','Mehsana','Morbi','Palanpur','Nadiad','Navsari','Amreli','Bhuj','Botad',],
    state2: ['Pune', 'Mumbai', 'Aurangabad','Nagpur','Nashik','Kolhapur','Amravati','Solapur','Thane','Nanded','Jalgaon','Chandrapur','Ahmednagar','Dhule','atur','Satara','Beed','Gondia','Ratnagiri','Sangli','Osmanabad'],
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
    <>
    <NavBar/>
    <div className="lg:flex inline-block pt-10 w-full ">
      {/* <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-banner-dancing-dog.gif'/> */}
      <div className="box-content lg:fixed h-[650px]  lg:h-[450px] lg:w-[340px] w-full border-[1.5px] bg-zinc-200/100 border-gray-300 ">
        <label className="block font-bold text-2xl text-center lg:mt-24 text-gray-700">Select State:</label>
        <select
          className="mt-2 block lg:w-60 w-44 mx-auto bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">Select a state</option>
          <option value="state1">Gujarat</option>
          <option value="state2">Maharastra</option>
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
      {/* Gujarat */}
      {selectedCity === 'Anand' && <Anand />}
      {selectedCity === 'Vadodara' && <Vadodara />}
      {selectedCity === 'Ahmedabad' && <Ahmedabad />}
      {selectedCity === 'Surat' && < Surat/>}
      {selectedCity === 'Gandhinagar' && < Gandhinagar/>}
      {selectedCity === 'Mehsana' && < Mehsana/>}
      {selectedCity === 'Nadiad' && <Nadiad/>}
      {selectedCity === 'Rajkot' && <Rajkot />}
      {selectedCity === 'Jamnagar' && <Jamnagar />}
      {selectedCity === 'Junagadh' && <Junagadh />}
      {selectedCity === 'Bhavnagar' && <Bhavnagar />}
      {selectedCity === 'Porbandar' && <Porbandar />}
      {selectedCity === 'Patan' && < Patan/>}
      {selectedCity === 'Bharuch' && < Bharuch/>}
      {selectedCity === 'Valsad' && <Valsad />}
      {selectedCity === 'Dwarka' && <Dwarka />}
      {selectedCity === 'Surendranagar' && <Surendranagar />}
      {selectedCity === 'Mehsana' && <Dahod />}
      {selectedCity === 'Morbi' && < Morbi/>}
      {selectedCity === 'Palanpur' && <Palanpur />}
      {selectedCity === 'Navsari' && <Navsari />}
      {selectedCity === 'Amreli' && < Amreli/>}
      {selectedCity === 'Bhuj' && < Bhuj/>}
      
      {selectedCity === 'Botad' && <Botad />}
      {/* Maharastra */}
      {selectedCity === 'Pune' && <Pune />}
      {selectedCity === 'Mumbai' && <Mumbai />}
      {selectedCity === 'Aurangabad' && <Aurangabad />}
      {selectedCity === 'Nagpur' && <Nagpur />}  
      {selectedCity === 'Nashik' && <Nashik />}
      {selectedCity === 'Kolhapur' && <Kolhapur />}
      {selectedCity === 'Solapur' && < Solapur/>}  
      {selectedCity === 'Amravati' && <Amravati />}
      {selectedCity === 'Thane' && < Thane/>}
      {selectedCity === 'Nanded' && < Nanded/>}  
      {selectedCity === 'Jalgaon' && <Jalgaon />}
      {selectedCity === 'Chandrapur' && < Chandrapur/>}
      {selectedCity === 'Ahmednagar' && < Ahmednagar/>}
      {selectedCity === 'Dhule' && <Dhule />}
      {selectedCity === 'Satara' && <Satara />}
      {selectedCity === 'Beed' && <Beed />}
      {selectedCity === 'Ratnagiri' && <Ratnagiri />}
      {selectedCity === 'Wardha' && <Wardha />}
      {selectedCity === 'Latur' && < Latur/>}
      {selectedCity === 'Parbhani' && <Parbhani />}
      {selectedCity === 'Jalna' && <Jalna />}
      {selectedCity === 'Gondia' && <Gondia />}
      {selectedCity === 'Sangli' && <Sangli />}
      {selectedCity === 'Osmanabad' && <Osmanabad/>}
      </div>
      </>
     );
   }

   export default Adoptselector;

