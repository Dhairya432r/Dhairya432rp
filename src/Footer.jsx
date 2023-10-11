import React from 'react'

const Footer = () => {
  return (
    <>
    {/* lg mate che */}
    <div className='  hidden bg-cyan-900 lg:mt-0 lg:flex  justify-evenly'>

<div className='inline-block lg:ml-1 mt-10 text-white'>
<div className=' lg:ml-1 text-sm font-extrabold text-gray-800 mb-4'>
ThePetNest  </div>
    <ul className='font-bold'>
        <li>Blog</li>
        <li>About us</li>
        <li>Support</li>
        <li>Customer reviews</li>
        <li>Online Pet Shop</li>
        <li>Report Animal Abuse</li>
        <li>Career</li>
    </ul>
    <div className='mb-10'></div>
</div>

<div className='inline-block lg:ml-1 mt-10 text-white font-extrabold mb-4'>
<div className=' ml-1 lg:text-sm  text-gray-800 mb-4'>
Home Services  </div>
    <ul className='font-bold'>
        <li>Pet Grooming</li>
        <li>Dog Training</li>
        <li>Dog Walking</li>
        <li>Pet Relocation</li>
        <li>Pet Insurance</li>
        <li>Dog Training Course</li>
        <li>Career</li>
    </ul>
    
</div>
<div className='inline-block lg:ml-1 mt-10 text-white font-extrabold'>
<div className=' ml-1 text-sm text-gray-800 mb-4'>
Partner </div>
    <ul className='font-bold'>
        <li>Become a Groomer</li>
        <li>Become a Trainer</li>
        <li>Become a Dog Walker</li>
        <li>Pet Grooming Course</li>
        <li>Pet Store Franchise</li>
        <li></li>
        <li></li>
    </ul>
    
</div>
<div className='inline-block lg:ml-1 mt-10 text-white '>
<div className=' ml-1 text-sm text-gray-800 font-extrabold mb-4'>
Policy </div>
    <ul className='font-bold '>
        <li>Privacy Policy</li>
        <li>Refund Policy</li>
        <li>Cancellation policy</li>
        <li>Terms & conditions</li>
        <div className='flex  '>
       <img src="./assets/images/fb.png" className='h-8 w-8 mt-4'/>
       <img src="./assets/images/insta.png" className='h-8 w-8 ml-6 mt-4'/>
       <img src="./assets/images/youtube.png" className='h-10 w-10 mt-3 ml-6 lg:block hidden'/></div>
    </ul>
    
</div>
</div>
<div className='bg-blue-900 text-white hidden   lg:flex justify-evenly  h-16  mt-0 '>
    <div className=' my-auto '>
© Gujarat, India</div>
<div className=' my-auto justify-end  ' >
Petdos Online Pvt Ltd © 2019-2023, All Rights Reserved
</div></div>



{/* sm mate che */}
<div className='bg-cyan-900 md:flex block h-[500px] md:h-[260px] lg:hidden'>
<div className='flex'>
    
    <ul className='font-bold text-white text-sm  mt-8 ml-4'>
        <li className='text-gray-500 mb-2'>Addo pet</li>
        <li className='mb-2'>Blog</li>
        <li className='mb-2'>About us</li>
        <li className='mb-2'>Support</li>
        <li className='mb-2'>Customer reviews</li>
        <li className='mb-2'>Online Pet Shop</li>
        <li className='mb-2'>Report Animal Abuse</li>
        <li className='mb-2'>Career</li>
    </ul>
    <ul className='font-bold  text-white text-sm mt-8 ml-16'>
        <li className='text-gray-500 mb-2'>Home Services</li>
        <li  className='mb-2'>Pet Grooming</li>
        <li  className='mb-2'>Dog Training</li>
        <li className='mb-2'>Dog Walking</li>
        <li className='mb-2'>Pet Relocation</li>
        <li className='mb-2'>Pet Insurance</li>
        <li className='mb-2'>Dog Training Course</li>
        <li className='mb-2'>Career</li>
    </ul>
    
      
   
    </div>
    


    <div className='flex '>
    <ul className='font-bold   text-white text-sm mt-8 ml-4'>
        <li className='text-gray-500 mb-2'>Partner</li>
        <li className='mb-2'>Become a Groomer</li>
        <li className='mb-2'>Become a Trainer</li>
        <li className='mb-2'>Become a Dog Walker</li>
        <li className='mb-2'>Pet Grooming Course</li>
        <li className='mb-2'>Pet Store Franchise</li>
        <li></li>
        <li></li>
    </ul>
    

    <ul className='font-bold  text-white text-sm mt-8 ml-16'>
        <li className='text-gray-500 mb-2'>Policy</li>
        <li className='mb-2'>Privacy Policy</li>
        <li className='mb-2'>Refund Policy</li>
        <li className='mb-2'>Cancellation policy</li>
        <li className='mb-2'>Terms & conditions</li>
        <li className='mb-2'></li>
        <li className='mb-2'></li>
        <div className='flex  '>
       <img src="./assets/images/fb.png" className='h-8 w-8 mt-4'/>
       <img src="./assets/images/insta.png" className='h-8 w-8 ml-6 mt-4'/>
       <img src="./assets/images/youtube.png" className='h-8 w-8 mt-4 ml-4 '/></div>
    </ul>
    </div>
    </div>
    
    <div className='bg-blue-900 text-white mt-0 lg:hidden  h-16 flex '>
    <div className='lg:ml-10  mt-4'>
© Gujarat, India</div>
<div className='lg:ml-[750px] mt-4' >
Petdos Online Pvt Ltd © 2019-2023, All Rights Reserved
</div>
</div>

    </>
  )
}

export default Footer