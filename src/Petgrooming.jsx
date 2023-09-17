import React from 'react'
import NavBar from './NavBar';
import Pricecity from './Pricecity';
const Petgrooming = () => {
  const gotoBtn2 = () => {
    window.scrollTo({top:0, left:0, behavior: "smooth"});
}
  return (
  <>
  <NavBar/>
  {/* lg mate che */}
  <div className='lg:block hidden'> 
    <div class="">
  <div class="absolute left-0 right-0  grid place-items-center">
  <img src='./assets/images/groming.webp' className='w-full  h-[430px]    '/>
  </div>
</div>
<div className=''>
    <div className='absolute left-0 right-0 grid place-items-center'>
    <div className=' relative  box-content mx-auto bg-white shadow-2xl   rounded-sm pt-4 top-[300px]  px-12 py-8 '>
    <p class="text-gray-600 font-extrabold text-5xl text-center "> Pet Grooming service that comes to your home </p><br/>  
    <h1 class="text-gray-500 font-bold text-3xl  text-center"> Instantly Book a Professional Pet Groomer Online, Whenever you need one.
 </h1><br/><br/>   
    <button type="button" class="py-4 px-56  flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 mx-auto mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Book a Groomer</button> 
      
      </div>
    </div>
</div>
</div><div className='lg:block hidden'><br/><br/><br/><br/>
<br/><br/><br/><br/>
<br/><br/><br/><br/></div>

{/* sm mate che */}
<div className='lg:hidden block'> 
    <div class="">
  <div class="absolute left-0 right-0 grid place-items-center">
  <img src='./assets/images/groming.webp' className='w-full  h-56 md:h-[400px]    '/>
  </div>
</div>
<div className=''>
    <div className='absolute left-0 right-0 grid place-items-center'>
    <div className=' relative  box-content mx-auto bg-white shadow-2xl   rounded-lg pt-4 md:top-[250px] top-[150px] md:px-10 px-2 py-10 '>
    <p class="text-gray-600 font-extrabold text-lg text-center "> Pet Grooming service that comes<br/> to your home  </p><br/>  
    <h1 class="text-gray-500 font-semibold text-sm  text-center"> Instantly Book a Professional Pet Groomer Online,<br/> Whenever you need one.
 </h1><br/>   
    <button type="button" class="py-3 px-20 mx-auto  flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500  mb-0 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Book a Groomer</button>
      
      </div>
    </div>
</div>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/>
<div className='md:block hidden'>
<br/><br/><br/><br/><br/><br/>
</div>

{/* 
How Pet Grooming works at your home? */}

<div className='overflow-hidden'>
  <h1 className='lg:text-4xl lg:font-extrabold  text-base font-extrabold text-gray-700  text-center '>How Pet Grooming works at your home?</h1><br/>
  <div className='lg:hidden md:flex flex'>
  <img src='./assets/images/puppy.jpg' className=' mx-auto md:w-[500px] md:h-[500px] w-[300px] h-[300px]  mt-10'/>
  </div>
  <div className='flex md:justify-center'>
  <img src='./assets/images/puppy.jpg' className=' lg:block hidden  w-[500px] h-[400px] ml-20 mt-10'/>
  <div>
 <img src='./assets/images/schedule.png' className='h-[75px] w-[75px] lg:ml-44 lg:mb-0 md:mb-0 mb-24 ml-2 mt-8'/> 
 <img src='./assets/images/car.png' className='h-20 w-20 lg:ml-44 ml-2 lg:mb-0 md:mb-0 mb-24 mt-8'/> 
<img src='./assets/images/house.png' className='h-20 w-20 lg:ml-44 ml-2 lg:mb-0 md:mb-10 mb-16 mt-8'/> 
<img src='./assets/images/tick.png' className='h-20 w-20 lg:ml-44 ml-2 lg:mb-0 md:mb-0 mb-20 mt-6'/> 
 </div>
 
<div className='inline-block  '>
<h1 className='text-gray-700 text-2xl font-bold  ml-4 mt-8 mb-1'>Schedule and book—all online</h1>
<p  className='text-gray-600 text-xl ml-4 mb-6'>All you have to do is pick a day and time</p>
<h1 className='text-gray-700 text-2xl font-bold ml-4 mt-12 mb-1'>Pet Groomer brings the equipment</h1>
<p className='text-gray-600 text-xl ml-4 mb-6'>Professional pet groomer comes to your doorstep</p>
<h1 className='text-gray-700 text-2xl ml-4 font-bold mt-14 mb-1'>No travel stress for your pets</h1>
<p className='text-gray-600 text-xl ml-4 mb-0'>Grooming service happens in your home</p>
<h1 className='text-gray-700 text-2xl lg:ml-4 ml-6 font-bold lg:mt-10 mt-14 mb-1'>Groomer cleans up</h1>
<p className='text-gray-600 text-xl lg:ml-4 ml-6 mb-6'>You're all set!</p>
  </div>
  </div>
</div>


{/* video addo pet */}
{/* <div className='flex lg:ml-96 ml-4 mt-10 h-96 lg:w-full w-96 overflow-hidden '>
<ReactPlayer  url={'https://youtu.be/zb8ap_5T7RQ'} controls={true} /> 
</div> */}

{/* price list  */}
{/* Dog mate che */}

<h1 className='lg:text-4xl text-2xl text-gray-600 font-extrabold ml-20 lg:ml-[500px] mt-28'>Dog Grooming Packages</h1>

<div className='lg:flex md:hidden inline-block justify-center lg:justify-evenly mt-20 '>
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
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-2 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5 '/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-3 w-5'/>

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


{/* md mate che */}
<div className=' md:flex hidden justify-center lg:justify-evenly mt-20 '>
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

</div>
<div className='box-content  w-80 py-14 mx-auto mt-16 bg-white shadow-2xl '>
  <div className='flex '> 
  <p className='text-2xl font-bold ml-8 text-gray-600 '>Trans-<br/>-furmation<br/> </p>
  <h1 className='ml-14 mt-3 font-bold  text-3xl'>₹1199</h1></div><br/><hr className='w-64 ml-8 h-2'/>
  
  
  <div className='flex'>
<div className='inline-block'>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-2 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5 '/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-3 w-5'/>

</div>
<div className='inline-block'>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Full Body Trimming</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Ear Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Eyes Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Nail Clipping</p>

</div>
  </div>
  
</div>

{/* cat mate che */}
<h1 className='lg:text-4xl text-2xl text-gray-600 font-extrabold ml-20 lg:ml-[500px] mt-28'>Cat Grooming Packages</h1>

<div className='lg:flex md:hidden inline-block justify-evenly mt-20 '>
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
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-2 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5 '/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-3 w-5'/>

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
{/* md mate che */}

<div className='hidden md:flex justify-evenly mt-20 '>
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

  
</div>

<div className='box-content  w-80 py-14 mx-auto mt-16 bg-white shadow-2xl '>
  <div className='flex '> 
  <p className='text-2xl font-bold ml-8 text-gray-600 '>Trans-<br/>-furmation<br/> </p>
  <h1 className='ml-14 mt-3 font-bold  text-3xl'>₹1199</h1></div><br/><hr className='w-64 ml-8 h-2'/>
  
  
  <div className='flex'>
<div className='inline-block'>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mt-2 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5 '/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-5 w-5'/>
<img src='./assets/images/greentick.png' className='h-5 ml-10 mb-3 w-5'/>

</div>
<div className='inline-block'>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Full Body Trimming</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Ear Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Eyes Cleaning</p>
<p className='text-lg text-gray-600 font-semibold mb-3 ml-4'>Nail Clipping</p>

</div>
  </div>
  </div>
<div className="lg:hidden inline-block  justify-center fixed bottom-[74px] left-0 ">
    <div className="box-content h-[75px] w-full bg-slate-200 fixed  ">
                
      <button type="button" onClick={gotoBtn2} class="py-4 px-28  mx-auto flex  gap-2  border border-transparent font-bold bg-orange-500   mt-3  shadow-lg text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Book a  Groomer</button> 
    </div>

</div>

<Pricecity/>

    </>
  )
}

export default Petgrooming;