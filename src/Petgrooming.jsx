import React from 'react'
import NavBar from './NavBar';
import ReactPlayer from 'react-player'
import Pricecity from './Pricecity';
const Petgrooming = () => {
  return (
  <>
  <NavBar/>
  {/* lg mate che */}
  <div class=" lg:block hidden  overflow-hidden">
   <img src="./assets/images/groming.webp" alt="" className="  h-[512px] w-full  " /> 
    <div class=" absolute box-content bg-white shadow-2xl  rounded-sm  top-[500px] ml-36 px-0  py-10  w-[1050px]">
      
      <h1 class="text-gray-600 font-extrabold text-[43px]  ml-36 "> Pet Grooming service that comes to <br/><h1 className='ml-60'>your home</h1> </h1><br/>  
      <h1 class="text-gray-500 font-semibold text-2xl  text-center">Instantly Book a Professional Pet Groomer Online, Whenever you need one.</h1><br/>  
      <button type="button" class="py-4 px-28 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-[300px] ml-24  mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Book a Professional Groomer</button>
    </div>
</div>

{/* sm mate che */}
   <div class=" block lg:hidden overflow-hidden">
   <img src="./assets/images/groming.webp" alt="" className="  h-[512px] w-full  " />
    
    <div class=" absolute box-content bg-white shadow-2xl   rounded-sm pt-4 top-[500px] ml-8 px-6  py-52 h-10  w-[300px]">
      
      <p class="text-gray-600 font-extrabold text-xl  ml-5 "> Pet Grooming service that  <br/><h1 className='ml-7 text-xl'> comes to your home</h1> </p><br/>  
      <h1 class="text-gray-500 font-semibold text-base  text-center">Instantly Book a Professional Pet Groomer Online, Whenever you need one.</h1><br/>  
      <button type="button" class="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-[350px] ml-8  mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Book a Professional Groomer</button>
    </div>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

{/* 
How Pet Grooming works at your home? */}

<div className='overflow-hidden'>
  <h1 className='lg:text-4xl lg:font-extrabold text-xl font-bold text-gray-700 lg:ml-72 ml-2 '>How Pet Grooming works at your home?</h1><br/>
  <img src='./assets/images/puppy.jpg' className=' lg:hidden block w-[300px] h-[300px] ml-14 mt-10'/>
  <div className='flex'>
  <img src='./assets/images/puppy.jpg' className=' lg:block hidden w-[500px] h-[400px] ml-20 mt-10'/>
  <div>
 <img src='./assets/images/schedule.png' className='h-20 w-20 lg:ml-44 lg:mb-0 mb-24 ml-2 mt-8'/> 
 <img src='./assets/images/car.png' className='h-20 w-20 lg:ml-44 ml-2 lg:mb-0 mb-24 mt-8'/> 
<img src='./assets/images/house.png' className='h-20 w-20 lg:ml-44 ml-2 lg:mb-0 mb-24 mt-8'/> 
<img src='./assets/images/tick.png' className='h-20 w-20 lg:ml-44 ml-2 lg:mb-0 mb-20 mt-8'/> 
 </div>
 
<div className='inline-block'>
<h1 className='text-gray-700 text-2xl font-bold  ml-4 mt-8 mb-1'>Schedule and book—all online</h1>
<p  className='text-gray-600 text-xl ml-4 mb-6'>All you have to do is pick a day and time</p>
<h1 className='text-gray-700 text-2xl font-bold ml-4 mt-12 mb-1'>Pet Groomer brings the equipment</h1>
<p className='text-gray-600 text-xl ml-4 mb-6'>Professional pet groomer comes to your doorstep</p>
<h1 className='text-gray-700 text-2xl ml-4 font-bold mt-14 mb-1'>No travel stress for your pets</h1>
<p className='text-gray-600 text-xl ml-4 mb-6'>Grooming service happens in your home</p>
<h1 className='text-gray-700 text-2xl lg:ml-4 ml-6 font-bold lg:mt-10 mt-20 mb-1'>Groomer cleans up</h1>
<p className='text-gray-600 text-xl lg:ml-4 ml-6 mb-6'>You're all set!</p>
  </div>
  </div>
</div>


{/* video addo pet */}
<div className='flex lg:ml-96 ml-4 mt-10 h-96 lg:w-full w-96 overflow-hidden '>
<ReactPlayer  url={'https://youtu.be/zb8ap_5T7RQ'} controls={true} /> 
</div>

{/* price list  */}
{/* Dog mate che */}

<h1 className='lg:text-4xl text-2xl text-gray-600 font-extrabold ml-20 lg:ml-[500px] mt-28'>Dog Grooming Packages</h1>

<div className='lg:flex inline-block justify-evenly mt-20 '>
  <div className='box-content  w-80 py-14 ml-10 bg-white shadow-2xl '>
  <div className='flex '> 
  <p className='text-2xl font-bold ml-8 text-gray-600 '>Bath + Basic<br/> Grooming</p>
  <h1 className='ml-14 mt-3 font-bold  text-3xl'>₹999</h1></div><br/><hr className='w-64 ml-8 h-2'/>
  
  
  <div className='flex'>
<div className='inline-block'>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-3 mb-11 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
</div>
<div className='inline-block'>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Bath With Shampoo & Conditioner</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Blow Dry Nail Clipping</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Ear Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Eye Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Paw Massage</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Combing/Brushing</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Face Haircutting/Trimming</p>
</div>
  </div>
  
</div>
<br/>
<div className='box-content  w-80 py-14 ml-10 bg-white shadow-2xl '>
  <div className='flex '> 
  <p className='text-2xl font-bold ml-8 text-gray-600 '>Full Service<br/><br/></p>
  <h1 className='ml-14 mt-3 font-bold  text-3xl'>₹1499</h1></div><br/><hr className='w-64 ml-8 h-2'/>
  
  
  <div className='flex'>
<div className='inline-block'>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-3 mb-11 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
</div>
<div className='inline-block'>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Bath With Shampoo & Conditioner</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Hair Styling/Trimming</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Body Massage</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Sanitary</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Clipping</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Nail Clipping</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Ear & Eye Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Paw Massage</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Combing/Brushing</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>De-shedding Treatment</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Anti - Tick Treatment</p>
</div>
  </div>
  
</div>
<br/>
<div className='box-content  w-80 py-14 ml-10 bg-white shadow-2xl '>
  <div className='flex '> 
  <p className='text-2xl font-bold ml-8 text-gray-600 '>Trans-<br/>-furmation<br/> </p>
  <h1 className='ml-14 mt-3 font-bold  text-3xl'>₹1199</h1></div><br/><hr className='w-64 ml-8 h-2'/>
  
  
  <div className='flex'>
<div className='inline-block'>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-3 mb-11 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>

</div>
<div className='inline-block'>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Full Body Trimming</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Ear Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Eyes Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Nail Clipping</p>

</div>
  </div>
  
</div>
</div>

{/* cat mate che */}
<h1 className='lg:text-4xl text-2xl text-gray-600 font-extrabold ml-20 lg:ml-[500px] mt-28'>Cat Grooming Packages</h1>

<div className='lg:flex inline-block justify-evenly mt-20 '>
  <div className='box-content  w-80 py-14 ml-10 bg-white shadow-2xl '>
  <div className='flex '> 
  <p className='text-2xl font-bold ml-8 text-gray-600 '>Bath + Basic<br/> Grooming</p>
  <h1 className='ml-14 mt-3 font-bold  text-3xl'>₹999</h1></div><br/><hr className='w-64 ml-8 h-2'/>
  
  
  <div className='flex'>
<div className='inline-block'>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-3 mb-11 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
</div>
<div className='inline-block'>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Bath With Shampoo & Conditioner</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Blow Dry Nail Clipping</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Ear Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Eye Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Paw Massage</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Combing/Brushing</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Face Haircutting/Trimming</p>
</div>
  </div>
  
</div>
<br/>
<div className='box-content  w-80 py-14 ml-10 bg-white shadow-2xl '>
  <div className='flex '> 
  <p className='text-2xl font-bold ml-8 text-gray-600 '>Full Service<br/><br/></p>
  <h1 className='ml-14 mt-3 font-bold  text-3xl'>₹1499</h1></div><br/><hr className='w-64 ml-8 h-2'/>
  
  
  <div className='flex'>
<div className='inline-block'>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-3 mb-11 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
</div>
<div className='inline-block'>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Bath With Shampoo & Conditioner</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Hair Styling/Trimming</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Body Massage</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Sanitary</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Clipping</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Nail Clipping</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Ear & Eye Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Paw Massage</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Combing/Brushing</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>De-shedding Treatment</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Anti - Tick Treatment</p>
</div>
  </div>
  
</div>
<br/>
<div className='box-content  w-80 py-14 ml-10 bg-white shadow-2xl '>
  <div className='flex '> 
  <p className='text-2xl font-bold ml-8 text-gray-600 '>Trans-<br/>-furmation<br/> </p>
  <h1 className='ml-14 mt-3 font-bold  text-3xl'>₹1199</h1></div><br/><hr className='w-64 ml-8 h-2'/>
  
  
  <div className='flex'>
<div className='inline-block'>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-3 mb-11 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>

</div>
<div className='inline-block'>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Full Body Trimming</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Ear Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Eyes Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Nail Clipping</p>

</div>
  </div>
  
</div>
</div>

<Pricecity/>

    </>
  )
}

export default Petgrooming;