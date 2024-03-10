import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from "./Footer"
import axios from 'axios';
import PriceBox from './PriceBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "./App.css"
const ConsultpetForm = ({ price, details }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [service, setService] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const [Disease, setDisease] = useState([]);
  const [Society,setSociety] = useState('');
  const [Flat,setFlat] = useState('');
  const [Street,setStreet] = useState('');
  const [Pin,setPin] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [type,setType] = useState('');
  const [name,setName] = useState('');
  const [age, setAge] = useState(null);
  const [weight,setWeight] = useState('');
  const [breed,setBreed] = useState('');
  const [gender,setGender] = useState('');
  const [aggressive,setAggressive] = useState('');
  const [vaccinated,setVaccinated] = useState('');
  const [date, setDate] = useState('');
  const[time,setTime] = useState('')
  const [detail,setdetail] = useState('');
  const [address, setAddress] = useState('');






  const states = ['Gujarat', 'Maharashtra'];
  const cities = {
    Gujarat: ['Vadodara'],
    Maharashtra: ['Mumbai']
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  const consult = {service,Disease,Society,Flat,Street,Pin,selectedState,selectedCity,type,name,age,weight,breed,gender,aggressive,vaccinated,date,time,Price  }; 
   try {
    await axios.post("https://server4-qtq0.onrender.com/api/consult",consult,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      
    }
    );
    toast.success('🦄 sucessfully booked!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0.1,
      theme: "colored",
      });
    console.log('Successfully sent');
    
  } catch (error) {
    console.log('Error occurred:', error);
    if (error.response) {
      // Server responded with a status code that falls out of the range of 2xx
      toast.error('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0.1,
        theme: "colored",
        });
    } else if (error.request) {
      // The request was made but no response was received
      toast.error("No response received. Please check your internet connection.");
    } else {
      // Something happened in setting up the request that triggered an error
      toast.error("An error occurred. Please try again.");
    }
  
  }
  };
  const handleYesClick5 = () => {
    setTime('Morning');
  }
  const handleNoClick5 = () => {
    setTime('Afternoon');
  }
  const handleelseClick5 = () => {
    setTime('Evening')
  }
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDetails(false);
    setService('Home') // Reset showDetails when a new option is selected
    // setErrorMessage('');
  };
  const handleOptionSelect2 = (option) => {
    setSelectedOption(option);
    setShowDetails(false);
    setService(option === 'home' ? 'Home' : 'online'); // Reset showDetails when a new option is selected
    // setErrorMessage('');
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      console.log('Please select a service before proceeding.');
    } else if (!showDetails){
      setShowDetails(true);
    } else {
      // Additional logic to handle the next section, e.g., address
      console.log('Address:', address);
      // Add logic to navigate or handle the next section
    }
  };

  const handlePreviousClick = () => {
    setSelectedOption(null);
    setShowDetails(false);
  };

  let additionalDetails = null;

  if (showDetails) {
    if (selectedOption === 'home') {
      additionalDetails = (
        <div>
          <p>Details for home service</p>
          {/* Add more form fields or details specific to home service */}
        </div>
      );
    } else if (selectedOption === 'online') {
      additionalDetails = (
        <div>
          <p>Details for online service</p>
          {/* Add more form fields or details specific to online service */}
        </div>
      );
    }
  }


  const handleButtonClick = (buttonName) => {
    if (Disease.includes(buttonName)) {
      // If the button is already selected, remove it
      setDisease(Disease.filter((btn) => btn !== buttonName));
    } else {
      // If the button is not selected, add it
      setDisease([...Disease, buttonName]);
    }
  };

  const handletype = () => {
    setType('Home')
  }
  const handletype1 = () => {
    setType('Office')
  }
  const handleimage = () => {
    setAge('puppy');
  }
  const handleimage1 = () => {
    setAge('Adolescene');
  }
  const handleYesClick1 = () => {
    setGender('Male');
  };

  const handleNoClick1 = () => {
    setGender('Female');
  };
  const handleYesClick3 = () => {
    setAggressive('Low');
  }
  const handleNoClick3 = () => {
    setAggressive('Normal');
  }
  const handleelseClick3 = () => {
    setAggressive('High')
  }
  const handleYesClick = () => {
    setVaccinated("Yes");
  };

  const handleNoClick = () => {
    setVaccinated("No");
  };
  const [currentStep, setCurrentStep] = useState(1); // Track current step of the form

  const handleNextClick2 = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousClick2 = () => {
    setCurrentStep(currentStep - 1);
  };
  const [Price, setPrice] = useState(null);
  const handleSelect = (price) => {
    setPrice(price);
  };





return(

  
    <>
      <div>
        {currentStep === 1 && (
          <>
           <div className='h-[510px] w-full '>
              <NavBar /><br /><br /><br /><br />
              <h1 className='lg:text-4xl text-center font-bold text-gray-600'>Please Add Details For Consultation</h1>
              <h1 className='pl-[12%] mt-10 text-gray-800'>Home or Online Consultation?</h1>
              <div className='lg:flex hidden md:hidden justify-center mx-auto gap-6'>
                
                <button onClick={() => handleOptionSelect('home')} className={`lg:h-[280px] lg:w-[456px]    border-2 transition duration-1000 rounded-md hover:border-orange-500 ${service === 'Home' ? 'border-orange-500' : 'border-gray-600'}`}  ><img className='lg:h-24 h-10 w-10 lg:w-24 mx-auto ' src='https://dm6g3jbka53hp.cloudfront.net/static-images/book-vet__home-consultation.png' /> <div ><h1 className='text-xl text-gray-700 font-bold'>Home Service</h1> <h1 className='text-gray-600 font-medium'>Veterinarian will visit your place to check your fur baby & provide medication.</h1> </div> </button>
                
               <button onClick={() => handleOptionSelect2('online')} className={`lg:h-[280px] lg:w-[456px]    border-2 transition duration-1000 rounded-md hover:border-orange-500 ${service === 'online' ? 'border-orange-500' : 'border-gray-600'}`}  ><img className='lg:h-24 h-10 w-10 lg:w-24 mx-auto ' src='https://dm6g3jbka53hp.cloudfront.net/static-images/book-vet__online-consultation.png' /> <div ><h1 className='text-xl text-gray-700 font-bold'>Online Service</h1> <h1 className='text-gray-600 font-medium'>Consult with Veterinarian through video/audio call without any hassle.</h1> </div></button>
                
              </div>
              <div className='lg:hidden md:inline-block inline-block  mx-auto gap-6'>
                <div className='flex justify-center mx-auto mb-6'>
                <button onClick={() => handleOptionSelect('home')} className={`lg:h-[280px] lg:w-[456px] w-[80%] h-36  md:w-[400px] md:h-[280px] border-2 transition duration-1000 rounded-md hover:border-orange-500 ${service === 'Home' ? 'border-orange-500' : 'border-gray-600'}`}  ><img className='lg:h-24 h-10 w-10 lg:w-24 mx-auto ' src='https://dm6g3jbka53hp.cloudfront.net/static-images/book-vet__home-consultation.png' /> <div ><h1 className='text-xl text-gray-700 font-bold'>Home Service</h1> <h1 className='text-gray-600 font-medium'>Veterinarian will visit your place to check your fur baby & provide medication.</h1> </div> </button>
                </div>
              <div className='flex justify-center mx-auto '> <button onClick={() => handleOptionSelect2('online')} className={`lg:h-[280px] lg:w-[456px] w-[80%] h-36  md:w-[400px] md:h-[280px] border-2 transition duration-1000 rounded-md hover:border-orange-500 ${service === 'online' ? 'border-orange-500' : 'border-gray-600'}`}  ><img className='lg:h-24 h-10 w-10 lg:w-24 mx-auto ' src='https://dm6g3jbka53hp.cloudfront.net/static-images/book-vet__online-consultation.png' /> <div ><h1 className='text-xl text-gray-700 font-bold'>Online Service</h1> <h1 className='text-gray-600 font-medium'>Consult with Veterinarian through video/audio call without any hassle.</h1> </div></button>
              </div>
              </div>
              </div>
              {/* <button >Online Service</button> */}
              {/* <button disabled={!selectedOption} onClick={handleNextClick}></button> */}
            
            <div className=' fixed box-content bottom-0 h-20 w-full  bg-gray-300   flex items-center justify-center'>
              {/* {errorMessage && <p className='text-9xl text-blue-900 absolute  z-50'>{errorMessage}</p>} */}
              {/* <button className="py-4 px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handlePreviousClick}>previous</button> */}
              <button disabled={!selectedOption} className="py-4 px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handleNextClick2}>Next</button>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            {/* Step 2 content */}
             <NavBar /><br /><br /><br /><br />
             <h2 className='text-3xl font-bold text-center text-gray-600'>Please Add Medical Details</h2><br />
            <h1 className='pl-[10%] lg:text-xs  text-lg  font-bold mb-2 text-gray-800 '>Pet Issues?</h1>
            {/* <div className='pl-[10%]'>
              <div className='box-content lg:w-[450px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded  text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0'>
              <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_general_medical.svg' className='h-7 ml-2 w-7 ' /><h1>General Medical Question</h1>
              </div>
              <div className='box-content lg:w-[450px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded  text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0'>
              <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_ear_infection.svg' className='h-7 ml-2 w-7 ' /><h1>Ear infection</h1>
              </div>
              <div className='box-content lg:w-[450px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded  text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0'>
              <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_throwing_up.svg' className='h-7 ml-2 w-7 ' /><h1>Throwing up</h1>
              </div>
            </div> */}
            <div className='pl-[10%] lg:flex gap-x-32 gap-y-20'>
              <div className='inline-block'>
              <div
                className={`box-content lg:lg:w-[450px] md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('General Medical Question') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('General Medical Question')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_general_medical.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>General Medical Question</h1>
              </div><br/>
              <div
                className={`box-content lg:w-[450px] md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Ear infection') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Ear infection')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_ear_infection.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>Ear infection</h1>
              </div><br/>
              <div
                className={`box-content lg:w-[450px] md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Throwing up') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Throwing up')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_throwing_up.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>Throwing up</h1>
              </div><br/>
              <div
                className={`box-content lg:w-[450px] w-[350px] md:w-[550px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Skin rash or allergy') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Skin rash or allergy')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_hair.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>Skin rash or allergy</h1>
              </div><br/>
              <div
                className={`box-content lg:w-[450px] mb-5 md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Dental issues') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Dental issues')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_dental.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>Dental issues</h1>
              </div>
              </div>
              <div className='inline-block'>
              <div
                className={`box-content lg:w-[450px] md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Diarrhea or bowel issues') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Diarrhea or bowel issues')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_diarrhea.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>Diarrhea or bowel issues</h1>
              </div><br/>
              <div
                className={`box-content lg:w-[450px] md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Loss of appetite') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Loss of appetite')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_loss_of_appetite.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>Loss of appetite</h1>
              </div><br/>
              <div
                className={`box-content lg:w-[450px] md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Behavioural problems') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Behavioural problems')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_behavioral.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1> Behavioural problems</h1>
              </div><br/>
              <div
                className={`box-content lg:w-[450px] md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Injury') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Injury')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_injury.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>Injury</h1>
              </div><br/>
              <div
                className={`box-content lg:w-[450px] md:w-[550px] w-[350px] h-11 border-2 flex items-center gap-5  border-orange-500 rounded text-gray-800 duration-200 transform hover:-translate-y-1 active:translate-y-0 ${Disease.includes('Other') && 'bg-gray-300'
                  }`}
                onClick={() => handleButtonClick('Other')}
              >
                <img
                  src='https://dm6g3jbka53hp.cloudfront.net/static-images/icon_injury.svg'
                  className='h-7 ml-2 w-7'
                />
                <h1>Other</h1>
              </div>
              </div>
            </div><br/>
            <div className=' fixed box-content bottom-0 h-20 w-full  bg-gray-300   flex items-center justify-around'>

              <button className="py-4 lg:px-40 px-16  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handlePreviousClick2}>Previous</button>
              <button  className="py-4 lg:px-40 px-20  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handleNextClick2}>Next</button>
            </div>
            <div className='mb-8'>
          <h1 className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>Medical Attention required for your pet?</h1>
          <textarea value={detail} onChange={(e)=> setdetail(e.target.value)} placeholder='Write your question here...' className='bg-gray-50 border-[2.5px] placeholder:text-xl h-24 mt-1 ml-[10%] border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[70%]  lg:w-[1000px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'></textarea>
        </div>
          <Footer />
          </>
        )}

        {currentStep === 3 && (
          <>
            {/* Step 3 content */}
            <div>
            <h1 className='pl-[10%] text-3xl  text-center font-bold text-gray-800'>Add new address</h1>
            <h1 className='pl-[10%] lg:text-xs text-lg font-bold text-gray-800'>Your Society/locality/Landmark</h1>
              <input
                type='text'
                value={Society}
                onChange={(e) => setSociety(e.target.value)}
                placeholder='Please search your location here...'
                className='bg-gray-50 border-[1.7px] placeholder:text-xl focus:border-orange-400 focus:outline-none focus:ring h-10  mt-1 ml-[10%] border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[80%] lg:w-[1000px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'
              />
            <div className='lg:flex  pl-[10%] gap-10'>
            <div>
            <h1 className='] lg:text-xs text-lg font-bold text-gray-800'>House/Flat No.</h1>
            <input
                type='text'
                value={Flat}
                onChange={(e) => setFlat(e.target.value)}
                placeholder='Please enter your address...'
                className='bg-gray-50 focus:border-orange-400 focus:outline-none focus:ring border-[1.7px] placeholder:text-xl h-10 mt-1  border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[90%] lg:w-[480px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'
              />
            </div>
            <div>
            <h1 className=' lg:text-xs text-lg font-bold text-gray-800'>Locality/Street</h1>
            <input
                type='text'
                value={Street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder='Please enter your address...'
                className='bg-gray-50 border-[1.7px] placeholder:text-xl h-10 mt-1 border-gray-300 focus:outline-none focus:ring focus:border-orange-400 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[90%] lg:w-[480px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'
              />
            </div>
            </div>
            <div className='lg:flex pl-[10%] gap-10'>
            <div>
            <label className='block font-bold lg:text-xs text-lg text-gray-800'>
            State:
            <select className='mt-2 block lg:w-[480px] w-[90%] text-base bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-orange-400' value={selectedState} onChange={(e) => setSelectedState(e.target.value)} >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </label>
            </div>
            <div>
            <label className='block font-bold lg:text-xs text-lg text-gray-800'>
            City:
            <select className='mt-2 block lg:w-[480px] w-[90%] text-base  bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-orange-400' value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} >
              <option value="">Select City</option>
              {cities[selectedState] && cities[selectedState].map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </label>
            </div>
            
            </div>
            <div className='lg:flex pl-[10%] gap-10'>
            <div>
            <h1 className='] lg:text-xs text-lg font-bold text-gray-800'>Pin code</h1>
            <input
                type='number'
                value={Pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder='Please enter the pin code here...'
                className='bg-gray-50 focus:border-orange-400 focus:outline-none focus:ring border-[1.7px] placeholder:text-xl h-10 mt-1  border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[90%] lg:w-[480px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'
              />
            </div>
            <div>
            <h1 className=' lg:text-xs text-lg font-bold text-gray-800'>Address Type?</h1>
           <div className='flex  mt-1 gap-8'>
            <button onClick={handletype} className={`w-40 h-10 mb-5 border-[1.7px] transition duration-1000 rounded-md hover:border-orange-500 ${type === 'Home' ? 'border-orange-500' : 'border-gray-600'}`}>🏠 Home</button>
            <button onClick={handletype1} className={`w-40 h-10 mb-5 border-[1.7px] transition duration-1000 rounded-md hover:border-orange-500 ${type === 'Office' ? 'border-orange-500' : 'border-gray-600'}`}>🏢 Office</button>
            </div>
            </div>
            </div>
            {/* {additionalDetails} */}
            {/* You can add a form or more information here based on the selected service */}
          </div>
          <div className=' fixed box-content bottom-0 h-20 w-full  bg-gray-300   flex items-center justify-around'>

<button className="py-4 px-16 lg:px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handlePreviousClick2}>Previous</button>
<button  className="py-4 px-20 lg:px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handleNextClick2}>Next</button>
</div>  
          </>
        )}

        {currentStep === 4 && (
          <>
            {/* Step 4 content */}
            <div>
      <h1 className=' pt-[3%] mb-8 lg:text-3xl text-xl text-center font-extrabold text-gray-700'>Add pet details</h1>
      <label className='pl-[8%]  lg:text-xs text-lg font-bold text-gray-800   '>Age of your Pet?</label>
        <div className='lg:space-x-6 flex space-x-6  md:space-x-3 justify-center mx-auto'>
          <button type='button' onClick={handleimage} id='hello2' className={`lg:h-28 h-28 w-40 lg:w-[550px] md:w-44 md:h-36 border-[2px] transition duration-1000 rounded-md hover:border-orange-500 ${age === 'puppy' ? 'border-orange-500' : 'border-gray-600'}`} ><div class='cat-icon' >🐱</div><h1 className='font-bold'>Cat<br /></h1></button>
          <button type='button' onClick={handleimage1} className={`lg:h-28 h-28 w-40 lg:w-[550px] md:w-44 md:h-36 border-[2px] transition duration-1000 rounded-md hover:border-orange-500 ${age === 'Adolescene' ? 'border-orange-500' : 'border-gray-600'}`}><div class="cat-icon">🐶</div><h1 className='font-bold'>Dog<br /></h1></button>
          <div class="cat-icon"></div>
        </div>
       <div className='lg:flex pl-[8%] mt-8 lg:space-x-3 '>
        <div>
            <h1 className=' lg:text-sm text-lg font-bold text-gray-800'>Name of your pet?</h1>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=''
                className='bg-gray-50 focus:border-orange-400 focus:outline-none focus:ring border-[1.7px] placeholder:text-xl h-10 mt-1  border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[90%] lg:w-[272px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'
              />
            </div>
        <div>
            <h1 className=' lg:text-sm text-lg font-bold text-gray-800'>Age of your pet in years?</h1>
            <input
                type='number'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder=''
                className='bg-gray-50 focus:border-orange-400 focus:outline-none focus:ring border-[1.7px] placeholder:text-xl h-10 mt-1  border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[90%] lg:w-[272px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'
              />
            </div>
        <div>
            <h1 className=' lg:text-sm text-lg font-bold text-gray-800'>Weight of your pet in Kg?</h1>
            <input
                type='number'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder=''
                className='bg-gray-50 focus:border-orange-400 focus:outline-none focus:ring border-[1.7px] placeholder:text-xl h-10 mt-1  border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[90%] lg:w-[272px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'
              />
            </div>
        <div>
            <h1 className=' lg:text-sm text-lg font-bold text-gray-800'>Breed of your pet?</h1>
            <input
                type='text'
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder='Write a breed here...'
                className='bg-gray-50 focus:border-orange-400 focus:outline-none focus:ring border-[1.7px] placeholder:text-xl h-10 mt-1  border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[90%] lg:w-[272px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'
              />
            </div>
            </div>
            </div>
            <div className='lg:flex mt-8 pl-[8%] mx-auto lg:space-x-3'>
            <div className=''>
            <label className=' lg:text-sm text-lg font-bold text-gray-800'>
          Pet Gender? </label>
        <div className="flex space-x-3 mb-4  ">
          <button
            type="button"
            className={`w-[44%] lg:w-[151px] h-14 font "Yes"  lg:h-10  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${gender === 'Male' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleYesClick1}
          >
            Male
          </button>
          <button
            type="button"
            className={`lg:w-[151px] w-[44%] h-14 font "Yes" lg:h-10  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${gender === 'Female' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleNoClick1}
          >
            Female
          </button>

        
            </div>
            </div>
            <div className=''>
            <label className='  lg:text-sm text-lg font-bold text-gray-800'>
        How aggressive is your pet? </label>
        <div className=" space-x-3 mb-4 flex   lg:justify-normal ">
          <button
            type="button"
            className={`w-[28.5%] lg:w-[151px] h-14  lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${aggressive === 'Low' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleYesClick3}
          >
            Low
          </button>
          <button
            type="button"
            className={`lg:w-[151px] w-[28.5%] h-14 lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${aggressive === 'Normal' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleNoClick3}
          >
           Normal
          </button>
          <button
            type="button"
            className={`lg:w-[151px] w-[28.5%] h-14 lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${aggressive === 'High' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleelseClick3}
          >
           High
          </button>

        </div>
        </div>
        <div>
        <label className=' lg:text-sm text-lg font-bold text-gray-800'>
          Pet Vaccinated? </label>
        <div className=" flex space-x-3 mb-4  ">
          <button
            type="button"
            className={`w-[44.5%] lg:w-[151px] h-14 font-semibold  lg:h-10  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${vaccinated === "Yes" ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            type="button"
            className={`lg:w-[151px] w-[44.5%] h-14 font-semibold lg:h-10  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${vaccinated ===  "No" ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleNoClick}
          >
            No
          </button>

        </div>
        </div>
        </div>
        <Footer/>
        <div className=' fixed box-content bottom-0 h-20 w-full  bg-gray-300   flex items-center justify-around'>

<button className="py-4  px-16 lg:px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handlePreviousClick2}>Previous</button>
<button  className="py-4  px-20 lg:px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handleNextClick2}>Next</button>
</div> 
      {/* <Footer /> */}
          </>
        )}
        {currentStep === 5 && (
          <>
          <div>
          <h1 className=' pt-[3%] mb-8 lg:text-3xl text-xl text-center font-extrabold text-gray-700'>Please Add Appointment Details.</h1>
        <div className="mt-10 pl-[10%]  lg:pr-[900px] ">
      <Popover placement="bottom ">
        <PopoverHandler>
          <Input 
            label="Select a Date"
            onChange={() => null}
            value={date ? format(date, "PPP") : ""}
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays
            className="border-0"
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse ",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-md bg-gray-900  text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
    </div>
   
        <div className=" mt-10 space-x-3 mb-4  lg:flex  lg:pl-[10%]">
          <button
            type="button"
            className={`w-[30%] lg:w-[25%] h-20  lg:h-14 font-semibold lg:text-sm transition duration-1000 hover:border-orange-600  rounded-md border-2 ${time === 'Morning' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleYesClick5}
          >
            Morning
            <p>( Between 10am to 12am)</p>
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[30%] h-20 lg:h-14 font-semibold lg:text-sm transition duration-1000 hover:border-orange-600 rounded-md border-2 ${time === 'Afternoon' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleNoClick5}
          >
            Afternoon
            <p>(Between 12pm to 4pm)</p>
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[30%] h-20 lg:h-14 font-semibold lg:text-sm transition duration-1000 hover:border-orange-600 rounded-md border-2 ${time === 'Evening' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleelseClick5}
          >
            Evening
            <p>(Between 5pm to 8pm)</p>
          </button>

        </div>
    
          <div className=' fixed box-content bottom-0 h-20 w-full  bg-gray-300   flex items-center justify-around'>

<button className="py-4 px-16 lg:px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handlePreviousClick2}>Previous</button>
<button  className="py-4 px-20 lg:px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handleNextClick2}>Next</button>
</div>

          </>
        )}

{currentStep === 6 && (
<>          
<h1 className=' pt-[3%] mb-8 lg:text-3xl text-xl text-center font-extrabold text-[#515252]'>Please select a package</h1>

<div className="container mx-auto p-4">
      <PriceBox
        price={
          <>
          <div className='lg:flex  '>
          
          <h1 className='text-[#474747] text-2xl'>Pet Nutrition Consultation - <span className=" text-lg font-bold  text-red-500 line-through">₹1799</span><span className='text-xl ml-2'>₹1499</span> </h1>
          <div className='box-content lg:mr-[420px] lg:w-36 lg:h-8 h-10 w-56 justify-center items-center text-white font-adelia text-lg flex rounded-lg  bg-[#F56102]'>Most Popular</div>
         
          </div>

          </>
        
           
            
          }
        details={
          <>
          <hr className='h-[2px] w-full bg-gray-300'/>
            <div className='lg:flex w-full lg:space-x-64'>
              
            <div className='text-gray-900 text-[18px] font-bold '>
            <h1>1:1 Call/Video Consultation</h1>
            <h1>Supplementation for optimal health</h1>
            <h1>Healthy Dog Feeding Guide</h1>
            <h1>Pet Parenting Management</h1>
            </div>
            <div className='text-gray-900 text-[18px] font-bold '>
            <h1>Current Diet, Health Issues/Concerns</h1>
            <h1>Better weight management and satiety</h1>
            <h1>Custom-tailored nutrition for pets</h1>
            <h1>Balanced home-cooked diet formulations</h1>
            </div>
            </div>
          </>
        }
        
        selected={Price === "$10"}
        onSelect={() => handleSelect("$10")}
      />
      <PriceBox
        price={
          <>
          <div className='flex '>
          
          <h1 className='text-[#474747] text-2xl'>Online Vet - <span className=" text-lg font-bold  text-red-500 line-through">₹239</span><span className='text-xl ml-2'>₹199</span> </h1>
         
          </div>

          </>
        }
        details={
          <>
          <hr className='h-[2px] w-full bg-gray-300'/>
            <div className='lg:flex w-full lg:space-x-64'>
              
            <div className='text-gray-900 text-[18px] font-bold '>
            <h1>1 time consultation</h1>
            <h1>Personalized Advice</h1>
            </div>
            <div className='text-gray-900 text-[18px] font-bold '>
            <h1>Call/Video Consultancy</h1>

            </div>
            </div>
          </>
        }
        selected={Price === "$20"}
        onSelect={() => handleSelect("$20")}
      />
      <PriceBox
        price={
          <>
          <div className='flex '>
          
          <h1 className='text-[#474747] text-2xl'>Essential Care - <span className=" text-lg font-bold  text-red-500 line-through">₹839</span><span className='text-xl ml-2'>₹699</span> </h1>

         
          </div>

          </>
        }
        details={
          <>
          <hr className='h-[2px] w-full bg-gray-300'/>
            <div className='lg:flex w-full lg:space-x-64'>
              
            <div className='text-gray-900 text-[18px] font-bold '>
            <h1>1 Week Call/Video Consultancy</h1>
            <h1>Unlimited chat with veterinary professionals</h1>
            </div>
            <div className='text-gray-900 text-[18px] font-bold '>
            <h1>Curated vet recommendations</h1>
            <h1>Ticks & Fleas Preventive</h1>

            </div>
            </div>
          </>
        }
        selected={Price === "$30"}
        onSelect={() => handleSelect("$30")}
      />
    </div>
    <div className=' fixed box-content bottom-0 h-20 w-full  bg-gray-300   flex items-center justify-around'>

<button className="py-4 px-16 lg:px-40  g rounded-md  border-transparent font-bold bg-orange-500   text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800" onClick={handleSubmit}>Sumbit</button>

</div>
    </>
    
        )}
      </div>

    </>
  );
};

export default ConsultpetForm;
