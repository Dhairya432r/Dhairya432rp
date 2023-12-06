import React from 'react'
import NavBar from './NavBar'
import Question2 from './Question2'
import Question from './Question'
import Footer from './Footer'

const Consult = () => {
  const gotoBtn3 = () => {
    window.scrollTo({top:0, left:0, behavior: "smooth"});
}
  return (
    <>
    <NavBar/>
    {/* lg mate che */}
    <div className='lg:block hidden'> 
    <div class="">
  <div class="absolute left-0 right-0 grid place-items-center">
  <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-vet-banner-30032020.jpg' className='w-full  h-[430px]    '/>
  </div>
</div>
<div className=''>
    <div className='absolute left-0 right-0 grid place-items-center'>
    <div className=' relative  box-content mx-auto bg-white shadow-2xl   rounded-sm pt-4 top-[300px] px-24 py-8 '>
    <p class="text-gray-600 font-extrabold text-5xl text-center "> 24x7 Online Vet Consultation & Home Visits </p><br/>  
    <h1 class="text-gray-500 font-bold text-3xl  text-center"> Your pet deserves only the best </h1><br/><br/>   
    <button type="button" class="py-4 px-56  flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 mx-auto mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Pet Insurance</button>
  
      
      </div>
    </div>
</div>
</div>

   {/* sm mate che */}
    <div className='lg:hidden block'> 
    <div class="">
  <div class="absolute left-0 right-0 grid place-items-center">
  <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-vet-banner-30032020.jpg' className='w-full  h-56 md:h-[400px]   '/>
  </div>
</div>
<div className=''>
    <div className='absolute left-0 right-0 grid place-items-center'>
    <div className=' relative  box-content mx-auto bg-white shadow-2xl   rounded-sm pt-4 md:top-[250px] top-[150px] px-5 md:px-16 py-10 '>
    <p class="text-gray-600 font-extrabold text-lg text-center "> 24x7 Online Vet Consultation &<br/> Home Visits </p><br/>  
    <h1 class="text-gray-500 font-semibold text-base  text-center"> Your pet deserves only the best </h1><br/>   
    <button type="button" class="py-3 px-20   flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-[350px] mx-auto  mb-0 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      vet consultation</button>
      
      </div>
    </div>
</div>
</div>
<div className='lg:block hidden'>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
<div className='block lg:hidden'>
<br/><br/><br/><br/><br/><br/></div>

{/* How Online Veterinarian Service works? */}
{/* lg mate che */}
<div className='mt-72 lg:text-4xl font-extrabold md:mt-96 md:text-3xl text-gray-600 text-center'>
How Online Veterinarian Service works?
</div><br/><br/>
<div className='lg:flex hidden'>
    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/vet-examing-puppy-28032020.jpg' className='h-[470px] lg:ml-32 mx-auto w-[450px]'/>
    <div className=''>
    <img src='./assets/images/message1.png' className='h-[80px] ml-28  mt-16 mb-10 w-[80px]'/>
    <img src='./assets/images/puppy3.png' className='h-[80px] ml-28 mb-14  w-[80px]'/>
    <img src='./assets/images/doctorpuppy.png' className='h-[80px] ml-28  w-[80px]'/>
    </div>
    
    <div className='inline-block'> 
    <h1 className='mt-20 ml-10 text-2xl text-gray-600 font-bold'>Ask a question</h1>
    <p className='ml-10 text-lg text-gray-600'>Ask anything related to health, nutrition, behavior of your Pet</p>
    <h1 className='mt-16 ml-10 text-2xl text-gray-600 font-bold'>Tell us more about your pet and yourself</h1>
    <p className='ml-10 text-lg text-gray-600'>You can even upload photos and medical documents if you desire</p>
    <h1 className='mt-16 ml-10 text-2xl text-gray-600 font-bold'>Receive a response from veterinarian</h1>
    <p className='ml-10 text-lg text-gray-600'>A real Veterinarian answers your questions and/or begins LIVE chat with you</p>
    </div>
</div>
{/* sm mate che */}
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/vet-examing-puppy-28032020.jpg' className='h-[400px] md:flex lg:hidden hidden md:h-[600px] md:w-[600px]  mx-auto w-[400px]'/>
<div className='lg:hidden inline-block'>
    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/vet-examing-puppy-28032020.jpg' className='h-[400px] md:hidden md:h-[600px] md:w-[600px]  mx-auto w-[400px]'/>
    <div className='flex '>
    <div className='inline-block'>
    <img src='./assets/images/message1.png' className='h-[80px] md:mb-8 mt-20 mb-24 w-[80px]'/>
    <img src='./assets/images/puppy3.png' className='h-[80px] md:mb-12 mb-24  w-[80px]'/>
    <img src='./assets/images/doctorpuppy.png' className='h-[80px]  w-[80px]'/>
    </div>
    
    <div className='inline-block'> 
    <h1 className='mt-20 ml-10 text-2xl text-gray-600 font-bold'>Ask a question</h1>
    <p className='ml-10 text-lg text-gray-600'>Ask anything related to health, nutrition, behavior of your Pet</p>
    <h1 className='mt-16 ml-10 text-2xl text-gray-600 font-bold'>Tell us more about your pet and yourself</h1>
    <p className='ml-10 text-lg text-gray-600'>You can even upload photos and medical documents if you desire</p>
    <h1 className='mt-16 ml-10 text-2xl text-gray-600 font-bold'>Receive a response from veterinarian</h1>
    <p className='ml-10 text-lg text-gray-600'>A real Veterinarian answers your questions and/or begins LIVE chat with you</p>
    </div>
    </div>
</div>
{/* lg mate che */}
<div className='lg:flex hidden justify-evenly'>
<div className='box-content bg-orange-200 h-[450px] w-[700px] ml-10 mt-32'>
<h1 className='text-3xl text-gray-600 ml-20 mt-28 mb-8 font-extrabold'>Curated by vets<br/>for your pet's unique needs</h1>
<div className='flex'>
<div className='inline-block'>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png' className='h-[40px] mb-4  ml-32 w-[40px]'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png' className='h-[40px] mb-4 ml-32 w-[40px]'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png' className='h-[40px] mb-4 ml-32 w-[40px]'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png' className='h-[40px] mb-4 ml-32 w-[40px]'/>
</div>

<div className='inline-block'>
<h1 className='text-base font-semibold mb-8 mt-2 ml-4'>24/7 advice from a India's Qualified vet wherever you are.</h1>
<h1 className='text-base font-semibold mb-8 mt-2 ml-4'>Quick access, right when you need one.No appointment necessary.</h1>
<p className='text-base font-semibold mb-8 mt-2 ml-4'>Available from any smartphone, or desktop device</p>
<p className='text-base font-semibold mb-8 mt-2 ml-4'>Avoid the Stress of Travel and Save Time.</p>
</div>
</div>
</div>
<div className='inline-block'>
  <img src='./assets/images/sleepdog.png' className=' h-[500px] mt-[120px] w-[500px]'/>
</div>
</div>

{/* sm mate che */}
<div className='flex lg:hidden justify-evenly'>
<div className='box-content bg-orange-200 h-[500px] w-[700px] mx-auto mt-32'>
<h1 className='text-base text-gray-600 ml-20 md:text-4xl md:mt-14 mt-28 mb-8 font-extrabold'>Curated by vets<br/>for your pet's unique needs</h1>
<div className='flex'>
<div className='inline-block'>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png' className='h-[40px] md:mb-5 mb-11 mt-2 md:mt-1  ml-3 w-[40px]'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png' className='h-[40px] md:mb-5 mb-8 ml-3 w-[40px]'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png' className='h-[40px] md:mb-5 mb-8 ml-3 w-[40px]'/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Eo_circle_orange_checkmark.svg/2048px-Eo_circle_orange_checkmark.svg.png' className='h-[40px] mb-4 ml-3 w-[40px]'/>
</div>

<div className='inline-block'>
<h1 className='text-base font-semibold md:text-xl mb-8 mt-2 ml-4'>24/7 advice from a India's Qualified vet wherever you are.</h1>
<h1 className='text-base font-semibold md:text-xl mb-8 mt-2 ml-4'>Quick access, right when you need one.No appointment necessary.</h1>
<p className='text-base font-semibold md:text-xl mb-8 mt-2 ml-4'>Available from any smartphone, or desktop device</p>
<p className='text-base font-semibold md:text-xl mb-8 mt-2 ml-4'>Avoid the Stress of Travel and Save Time.</p>
</div>
</div>
</div>
</div>
<div className='fex lg:hidden'>
  <img src='./assets/images/sleepdog.png' alt='' className=' h-[500px] mt-[40px] mx-auto w-[500px]'/>
</div>



{/* lg mate che */}
<div className='lg:flex hidden'>
<div className='box-content shadow-md rounded-sm bg-slate-200 h-[500px] w-[1000px] mx-auto mt-28'>
<div className='flex '>
<div className='my-auto ml-10'>
<h1><span className='text-7xl text-gray-600 font-bold'>Starts At</span><br/>
<span className='text-7xl text-gray-600 font-extrabold'>₹199</span>
<span className='text-4xl  text-gray-600 font-extrabold'>.00</span>
<span className='text-2xl  text-gray-600 font-semibold'>Per Appointment</span>
</h1>
<div className='box-content shadow-md rounded-sm bg-white h-10   w-48 ml-10  mt-12'>
<div className='box-content shadow-md rounded-sm bg-orange-600 h-10   w-3 ml-0  mt-12'>
<h1 className='text-center text-sm font-semibold ml-20 mt-3'>CANCEL ANYTIME</h1>
</div>
</div>
</div>
<div className='inline-block mt-10  ml-32'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/800px-Eo_circle_light-blue_checkmark.svg.png' className='h-14 mb-2 w-14'/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/800px-Eo_circle_light-blue_checkmark.svg.png' className='h-14 mb-2 w-14'/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/800px-Eo_circle_light-blue_checkmark.svg.png' className='h-14 mb-2 w-14'/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/800px-Eo_circle_light-blue_checkmark.svg.png' className='h-14 mb-2 w-14'/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/800px-Eo_circle_light-blue_checkmark.svg.png' className='h-14 mb-2 w-14'/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/800px-Eo_circle_light-blue_checkmark.svg.png' className='h-14 mb-2 w-14'/>
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/800px-Eo_circle_light-blue_checkmark.svg.png' className='h-14 mb-2 w-14'/>
  </div>
  <div className='inline-block mt-10 ml-6 font-semibold '>
    <h1 className=' mt-2 mb-11'>On Demand Consultations</h1>
    <h1 className='mb-11'>Digestive Problems</h1>
    <h1 className='mb-10'>Wellness and Prevention</h1>
    <h1 className='mb-10'>Anxiety Management</h1>
    <h1 className='mb-10'>Skin Health</h1>
    <h1 className='mb-10'>Mobility Improvement</h1>
    <h1 className='mb-10'>Dental Health</h1>
  </div>
</div>

</div>
</div>

{/* sm mate che */}
<div className='flex lg:hidden'>
<div className='box-content shadow-md rounded-sm bg-slate-200 h-[800px] w-full md:w-[500px] mx-auto mt-28'>
<div className='inline-block '>
<div className='text-center '>
<h1><span className='text-7xl text-gray-600 font-bold'>Starts At</span><br/>
<span className='text-7xl text-center text-gray-600  font-extrabold'>₹199</span>
<span className='text-4xl  text-gray-600 font-extrabold'>.00</span>
<span className='text-2xl  text-gray-600 font-semibold'>Per Appointment</span>
</h1>
<div className=''>
<div className='box-content shadow-md rounded-sm mx-auto bg-white h-10  w-48   mt-12'>
<div className='box-content shadow-md rounded-sm bg-orange-600 h-10    w-3   mt-12'>
<h1 className='text-center text-sm font-semibold ml-16  mt-3'>CANCEL ANYTIME</h1>
</div>
</div>
</div>
</div>
<div className='flex mt-16 md:justify-center'> 
<div className='inline-block  mx-10   '>
  <img src='./assets/images/blue tick.png' className='h-14 mb-2 w-14'/>
  <img src='./assets/images/blue tick.png' className='h-14 mb-4 w-14'/>
  <img src='./assets/images/blue tick.png' className='h-14 mb-2 w-14'/>
  <img src='./assets/images/blue tick.png' className='h-14 mb-2 w-14'/>
  <img src='./assets/images/blue tick.png' className='h-14 mb-2 w-14'/>
  <img src='./assets/images/blue tick.png' className='h-14 mb-2 w-14'/>
  <img src='./assets/images/blue tick.png' className='h-14 mb-2 w-14'/>
  </div>
  <div className='inline-block mt-2  font-semibold '>
    <h1 className='  mt-1  '>On Demand Consultations</h1>
    <h1 className='mt-11'>Digestive Problems</h1>
    <h1 className='mt-10'>Wellness and Prevention</h1>
    <h1 className='mt-10'>Anxiety Management</h1>
    <h1 className='mt-10'>Skin Health</h1>
    <h1 className='mt-10'>Mobility Improvement</h1>
    <h1 className='mt-10'>Dental Health</h1>
  </div>
  </div>
</div>

</div>
</div>
 


<div className='box-content bg-zinc-900 lg:h-[350px] h-[250px] w-full  mt-10 '>
  <h1 className='lg:mb-20 mb-10 text-zinc-900'>hello</h1>

  <h1 className='lg:text-3xl  font-semibold text-lg text-center   text-white'>Addo pet is India’s Most Trusted Online Veterinary Health Care Consultation</h1>
   <h1 className='lg:text-3xl font-semibold text-lg text-center text-white'>Service provider. Experienced veterinarians provide immediate, personalized and</h1>
    <h1 className='lg:text-3xl font-semibold text-lg text-center text-white'>expert answers to your concerns.</h1>
    
</div>
<div className="lg:hidden block">
    <div className="box-content h-[75px] w-full bg-slate-200  fixed bottom-[0px]">
   
      <button type="button" onClick={gotoBtn3} class="py-4 px-28 flex mx-auto justify-center items-center gap-2  border border-transparent font-bold bg-orange-500   mt-3  shadow-lg text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Book a veterinarian</button> 
    </div>

</div>
<Question2/>
<Footer/>
    </>
    
  )
}

export default Consult;