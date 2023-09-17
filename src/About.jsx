import React, { useState, useEffect } from 'react';
import NavBar from './NavBar'
import Footer from './Footer';
const About = () => {
    
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Check if the number is less than 10 before updating
      if (number < 35) {
        setNumber(prevNumber => prevNumber + 1);
      }
    }, 100); // Update every 1000 milliseconds (1 second)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [number]); // Re-run the effect whenever the 'number' state changes


  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Check if the number is less than 10 before updating
      if (number2 < 1500) {
        setNumber2(prevNumber => prevNumber + 50);
      }
    }, 100); // Update every 1000 milliseconds (1 second)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [number2]); // Re-run the effect whenever the 'number' state changes



  const [number3, setNumber3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Check if the number is less than 10 before updating
      if (number3 <96) {
        setNumber3(prevNumber => prevNumber + 4);
      }
    }, 100); // Update every 1000 milliseconds (1 second)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [number3]); // Re-run the effect whenever the 'number' state changes
  return (
    <>
    <NavBar/>
    <div class="h-56 w-full  relative">
    <img src="https://dm6g3jbka53hp.cloudfront.net/static-images/pet-banner-tpn-09052020.jpg" className='lg:h-[476px] h-[200px] w-full' alt=""/>
    <div class="absolute top-0 px-3  lg:py-44 py-12  bg-gray-800/50 w-full">
      <h1 class="text-white lg:text-center text-start font-extrabold text-2xl lg:text-5xl lg:-ml-64"> About Addopet </h1>
      <p class="text-gray-200 lg:text-2xl text-sm font-boldmt-3 lg:text-center text-start lg:-ml-80">
      Founded in 2023, Addopet is <br className='lg:hidden block'/>the India’s largest network of 5-star <br/>pet care service providers.
      </p>
    </div>
</div> <div className='lg:block hidden'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
    <div className='lg:mt-0'>
      <li className='list-none lg:ml-20 lg:text-base  font-boldlg:text-start text-center text-gray-600 mb-3'>Whether you need in-home pet grooming,<br className='lg:hidden block'/> pet training, dog walking, pet insurance, pet relocation, or vet on call, Addopet connects <br className='lg:hidden block'/>spet parents with pet <br className='lg:block hidden'/>care heroes who’ll treat their pet like family.</li>
      <li className='list-none lg:ml-20 lg:text-base font-boldlg:text-start text-center text-gray-600 mb-3'>We understand your pet is family. And you can trust us to keep your pet happy, healthy, and sweet as ever.</li>
      <li className='list-none lg:ml-20 lg:text-base font-boldlg:text-start text-center text-gray-600 mb-3'>But it’s not just about pet love. Addopet is also committed to making pet care safe, easy, and affordable so that everyone can experience the unconditional <br className='lg:block hidden'/>love of a pet. Whatever you and your furr babies are into, we’re into it too. And we’ve got your back. Anytime. Anywhere.</li>
      <li className='list-none lg:ml-20 lg:text-base font-boldlg:text-start text-center text-gray-600 mb-3'>Addopet donates a portion of every service to Pet NGO’s & Rescue shelters through this program. We also provide meals to shelter dogs in India.</li>

    </div>
    <div className='bg-gray-100 lg:h-[900px] h-[1200px] w-full'>
     <h1 className='font-bold text-2xl text-center pt-10 text-gray-600  lg:text-3xl'>Millions of services booked. Thousands of wagging tails.</h1>
     <div className='flex justify-evenly pt-10'>
     <p className='font-extrabold  text-3xl text-blue-700'>{number}<span className='font-extrabold'>+</span><br/><span className='text-gray-600 text-sm font-bold'>cities</span></p>
     <p className='font-extrabold  text-3xl text-blue-700'>{number2}<span className='font-extrabold'>+</span><br/><span className='text-gray-600 text-sm font-bold'>PetCare Heroes</span></p>
     <p className='font-extrabold  text-3xl text-blue-700'>{number3}<span className='font-extrabold'>%</span><br/><span className='text-gray-600 text-sm font-bold'>5-star reviews</span></p>
     </div>
     <h1 className='lg:font-bold  text-center pt-10 text-gray-600 lg:text-3xl'>5-Star Petcare Heroes in your neighborhood</h1>
    <div className='flex justify-center pt-10'>
        <div className='inline-block '>
    <img alt='' src='https://w7.pngwing.com/pngs/798/486/png-transparent-check-mark-computer-icons-others-miscellaneous-angle-rectangle.png' className='h-7 w-7'/>
    <img alt='' src='https://w7.pngwing.com/pngs/798/486/png-transparent-check-mark-computer-icons-others-miscellaneous-angle-rectangle.png' className='h-7 w-7'/>
    <img alt='' src='https://w7.pngwing.com/pngs/798/486/png-transparent-check-mark-computer-icons-others-miscellaneous-angle-rectangle.png' className='h-7 w-7'/>
     <img alt='' src='https://w7.pngwing.com/pngs/798/486/png-transparent-check-mark-computer-icons-others-miscellaneous-angle-rectangle.png' className='h-7 w-7'/>
     </div>
     <div className='inline-block lg:mr-16 '>
     <h1 className='text-gray-600 text-lg'>Background or identity checks</h1>
     <h1 className='text-gray-600 text-lg'>Reservation protection</h1>
     <h1 className='text-gray-600 text-lg'>Ongoing service education</h1>
     <h1 className='text-gray-600 text-lg'>Trust and safety experts</h1>
     </div>
     <div className='inline-block '>
    <img alt='' src='https://w7.pngwing.com/pngs/798/486/png-transparent-check-mark-computer-icons-others-miscellaneous-angle-rectangle.png' className='h-7 w-7'/>
    <img alt='' src='https://w7.pngwing.com/pngs/798/486/png-transparent-check-mark-computer-icons-others-miscellaneous-angle-rectangle.png' className='h-7 w-7'/>
    <img alt='' src='https://w7.pngwing.com/pngs/798/486/png-transparent-check-mark-computer-icons-others-miscellaneous-angle-rectangle.png' className='h-7 w-7'/>
    
     </div>
     <div className='inline-block'>
     <h1 className='text-gray-600 text-lg'>Addopet Guarantee</h1>
     <h1 className='text-gray-600 text-lg'>24/7 support</h1>
     <h1 className='text-gray-600 text-lg'>Verified reviews</h1>
     </div>
    </div>
    <h1 className='lg:font-bold  text-center pt-10 text-gray-600 lg:text-3xl'>Good Pets. Good people.</h1>
    <p className='lg:font-bold  text-center pt-10 text-gray-600 lg:text-base'>Whether you need a pet groomer for the spa session or dog training for a well-behaved pet, ThePetNest got you, your pets and pet's lifestyle covered.</p>
    <h1 className='lg:font-bold ml-24 mb-14   pt-10 text-gray-600 lg:text-base'>Addopet offer:</h1>
 
    <div className='lg:flex justify-center  lg:space-x-10 '>

  <button
        class="py-2 lg:w-[358px] flex  justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Pet Grooming</button><div><br/></div>
  <button
        class="py-2 lg:w-[358px] flex justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Dog Training</button><div><br/></div>
  
  <button
        class="py-2 lg:w-[358px] flex justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Vet on Call</button>
</div><div className='lg:block hidden '><br/><br/></div><div className='lg:hidden block mb-6 '></div>


<div className='lg:flex  justify-center lg:space-x-10 '>
  <button
        class="py-2 lg:w-[358px] flex justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Dog Walking</button><div><br/></div>
  <button
        class="py-2 lg:w-[358px] flex justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Pet Insurance</button><div><br/></div>
  <button
        class="py-2 lg:w-[358px] flex justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Pet Relocation</button><div><br/></div>
</div><div className='lg:block hidden '><br/><br/></div><div className='lg:hidden block '></div>


<div className='lg:flex  justify-center lg:space-x-10'>
  <button
        class="py-2 lg:w-[358px] flex justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Rehome a Pet</button><div><br/></div>
  <button
        class="py-2 lg:w-[358px] flex justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Online Pet Shop</button><div><br/></div>
  <button
        class="py-2 lg:w-[358px] flex justify-center mx-auto w-[330px] bg-transparent text-orange-500 font-bold border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Adopt a Pets</button><div><br/></div>
</div>

</div>
<br/><br/><br/><br/><br/><br/><br/><br/>
    
    
   <Footer/>
    </>
  )
}

export default About

