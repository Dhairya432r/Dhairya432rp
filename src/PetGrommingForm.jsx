import React,{useState} from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import FormCalendar from './FormCalendar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast, Toaster } from "react-hot-toast";
import Footer from './Footer'
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Form } from 'react-router-dom';

const PetGrommingForm = () => {
  
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [gender,setGender] = useState('');
  const [size,setSize] = useState('');
  const [aggressive,setAggressive] = useState('');
  const [date, setDate] = useState('');
  const[time,setTime] = useState('')
  const[old,setOld] = useState('');

  const handleimage = () => {
    setType('Cat');
  }
  const handleimage1 = () => {
    setType('Dog');
  }
  const handleYesClick1 = () => {
    setGender('Male');
  };

  const handleNoClick1 = () => {
    setGender('Female');
  };
  const handleYesClick2 = () => {
    setSize('Small');
  }
  const handleNoClick2 = () => {
    setSize('Medium');
  }
  const handleelseClick2 = () => {
    setSize('Large')
  }
  const handleYesClick3 = () => {
    setAggressive('Low');
  }
  const handleNoClick3 = () => {
    setAggressive('Normal');
  }
  const handleelseClick3 = () => {
    setAggressive('High')
  }
  const handleYesClick4 = () => {
    setOld('< 3 Months');
  }
  const handleNoClick4 = () => {
    setOld('< 11 years');
  }
  const handleelseClick4 = () => {
    setOld(' 11+ years')
  }
  const handleYesClick5 = () => {
    setTime('Morning');
  }
  const handleNoClick5 = () => {
    setTime('Afternoon');
  }
  const handleelseClick5 = () => {
    setTime('Evening')
  }
    const [settings, setSettings] = useState(/* initial settings value */);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      type,name,gender,size,old,aggressive,date,time,
    };
  
    try {
      await axios.post("https://server4-qtq0.onrender.com/api/gromming", data,
      
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
  
  
  
  
  return (
    <>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    <NavBar/><br /><br/><br/><br/>
    <div className='pl-[55%] lg:block hidden'>
      <div className='box-content flex gap-2 w-[550px] rounded-md h-16 bg-[#18273c] text-white'>
        <div className='my-auto'>
        <img src='./assets/images/petgromming1.png' className='w-14 h-14 rounded-full'/></div>
     
     <div className='my-auto'> <h1 className='text-base font-extrabold'>Grooming at home with safety</h1>
      <h1 className='text-xs font-bold'>We serve within the safety of your home so that you don't have to step out.</h1>
      </div></div>
      </div>
      <p className='lg:text-4xl lg:font-bold text-center text-2xl lg:pt-14 pt-6  text-gray-600 font-semibold'>Add Pet Details</p><hr className='ml-[10%] border-2 w-[80%]' />
      <form onSubmit={handleSubmit} >
      <div className='mt-6'>
        <label className='pl-[10%] lg:text-xs text-lg font-bold text-gray-800   '>What type of pet?</label>
        <div className='flex justify-center lg:justify-normal lg:pl-[10%] gap-10'>
        <button type='button' onClick={handleimage} id='hello2' className={`lg:h-28 w-44 h-28 lg:w-64 md:w-44 md:h-36 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${type === 'Cat' ? 'border-orange-500' : 'border-gray-600'}`} ><img className='h-14 w-14 mx-auto ' src='./assets/images/petgrommingcat.jpg' /><h1 className='font-bold'>Cat<br /></h1></button>
        <button type='button' onClick={handleimage1} className={`lg:h-28 w-44 h-28 lg:w-64 md:w-44 md:h-36 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${type === 'Dog' ? 'border-orange-500' : 'border-gray-600'}`}><img className='h-14 w-14 mx-auto ' src='./assets/images/petgrommingdog.jpg' /><h1 className='font-bold'>Dog<br /></h1></button>
        </div><br/>
        <label className='pl-[10%] lg:text-xs  text-lg  font-bold text-gray-800 '>Pet's Name?</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Please enter your pet name' className='bg-gray-50 border-[2.5px] mt-1 ml-[10%] border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[85%]  lg:w-[40%] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'  /><br />
        <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
          Pet Gender? </label>
        <div className=" space-x-3 mb-4 flex justify-center lg:flex lg:justify-normal lg:pl-[10%]">
          <button
            type="button"
            className={`w-[46%] lg:w-[25%] h-14  font-semibold lg:text-sm lg:h-10  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${gender === 'Male' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleYesClick1}
          >
            Male
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[46%] h-14 font-semibold lg:text-sm lg:h-10  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${gender === 'Female' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleNoClick1}
          >
            Female
          </button>

        </div>
        <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
        Size of your Pet? </label>
        <div className=" space-x-3 mb-4 flex justify-center lg:flex lg:justify-normal lg:pl-[10%]">
          <button
            type="button"
            className={`w-[30%] lg:w-[25%] h-14  lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${size === 'Small' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleYesClick2}
          >
            Small
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[30%] h-14 lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${size === 'Medium' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleNoClick2}
          >
            Medium
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[30%] h-14 lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${size === 'Large' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleelseClick2}
          >
            Large
          </button>

        </div>
        <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
        How aggressive is your pet? </label>
        <div className=" space-x-3 mb-4 flex justify-center lg:flex lg:justify-normal lg:pl-[10%]">
          <button
            type="button"
            className={`w-[30%] lg:w-[25%] h-14  lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${aggressive === 'Low' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleYesClick3}
          >
            Low
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[30%] h-14 lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${aggressive === 'Normal' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleNoClick3}
          >
           Normal
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[30%] h-14 lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${aggressive === 'High' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleelseClick3}
          >
           High
          </button>

        </div>
        <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
        How old is your pet? </label>
        <div className=" space-x-3 mb-4 flex justify-center lg:flex lg:justify-normal lg:pl-[10%]">
          <button
            type="button"
            className={`w-[30%] lg:w-[25%] h-14  lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${old === '< 3 Months' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleYesClick4}
          >
            Below 3 Months
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[30%] h-14 lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${old === '< 11 years' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleNoClick4}
          >
            Below 11 years
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[30%] h-14 lg:h-10 font-semibold lg:text-sm  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${old === '11+ years' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={handleelseClick4}
          >
            Above 11 years
          </button>

        </div>
        <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
    Choose Appointment Date and Time </label>
        <div className="p-10 pl-[10%] lg:pr-[900px] ">
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
    <div>
   
        <div className=" space-x-3 mb-4 flex justify-center lg:flex lg:justify-normal lg:pl-[10%]">
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
    </div>
        <div className='lg:flex hidden justify-center mb-20'>
       <div className='box-content w-96 h-[250px] mt-20 '>
        <div className=' box-content flex justify-center mx-auto items-center   h-40 w-80 '>
          <div className='w-4 h-4 bg-gray-300 absolute z-49 mb-40  -ml-28 rounded-full'></div>
          <div className='w-6 h-6  bg-gray-300 z-49  mb-14 rounded-full'></div>
          <div className='w-8 h-8 bg-gray-300 absolute z-47 ml-48 mb-44 rounded-full'></div>
          <div className='w-40 h-40  z-48  bg-gray-300 flex items-center justify-center rounded-full'><img src='./house.png' className='w-20 h-20 ' /></div>
          </div>
          <div className='text-center text-gray-700 box-content'>
          <h1 className='lg:text-2xl '>In your home</h1>
          <p className='text-center'>Other than a bathing area and towels, your groomer<br/> will take care of everything—including cleanup!</p>
          </div>
          </div>
       <div className='box-content w-96 h-[250px] mt-20 '>
        <div className=' box-content flex justify-center mx-auto items-center   h-40 w-80 '>
          <div className='w-4 h-4 bg-gray-300 absolute z-49 mb-40  -ml-28 rounded-full'></div>
          <div className='w-6 h-6  bg-gray-300 z-49  mb-14 rounded-full'></div>
          <div className='w-8 h-8 bg-gray-300 absolute z-47 ml-48 mb-44 rounded-full'></div>
          <div className='w-40 h-40  z-48  bg-gray-300 flex items-center justify-center rounded-full'><img src='./wallet.png' className='w-20 h-20 ' /></div>
          </div>
          <div className='text-center text-gray-700 box-content'>
          <h1 className='lg:text-2xl '>Flat, transparent rates</h1>
          <p className='text-center'>No hidden fees or price adjustments. Period.</p>
          </div>
          </div>
       <div className='box-content w-96 h-[250px] mt-20 '>
        <div className=' box-content flex justify-center mx-auto items-center   h-40 w-80 '>
          <div className='w-4 h-4 bg-gray-300 absolute z-49 mb-40  -ml-28 rounded-full'></div>
          <div className='w-6 h-6  bg-gray-300 z-49  mb-14 rounded-full'></div>
          <div className='w-8 h-8 bg-gray-300 absolute z-47 ml-48 mb-44 rounded-full'></div>
          <div className='w-40 h-40  z-48  bg-gray-300 flex items-center justify-center rounded-full'><img src='./reward.png' className='w-20 h-20 ' /></div>
          </div>
          <div className='text-center text-gray-700 box-content'>
          <h1 className='lg:text-2xl '>Professional experience</h1>
          <p className='text-center'>All groomers on Addo pet have professional pet grooming experience and offer an in-home alternative to mobile dog grooming, which means less stress for you and your dog.</p>
          </div>
          </div>
          </div>
      </div>
    {/* <FormCalendar /> */}
    <Footer />
    <div className='bg-white flex lg:justify-end justify-center items-center w-full h-16 fixed bottom-0 border-4'>
      
    <button className='bg-orange-500 flex justify-center items-center text-2xl font-semibold lg:w-[20%] text-white font-adelia lg:h-10 h-14 rounded-xl w-[63%]'>sumbit <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/tpn-next-grooming-funnel.png' className='w-5 mt-1 h-5' /> </button>


    </div>
    </form>
    </>
  )
}

export default PetGrommingForm