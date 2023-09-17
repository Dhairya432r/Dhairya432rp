import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Service = () => {
  return (
    <>
<NavBar/>
    <br/>
    <br/> 
    <br/>
    <br/>
    <br/>
    <div className='mx-auto'>
    <Link to="/Petgrooming">
<button type="button" class="py-3 px-16  flex justify-center  items-center  gap-2 rounded-md border border-transparent font-bold bg-orange-500 mx-auto  mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  PetGrooming</button>
  </Link>
<Link to ="/Consult">
<button type="button" class="py-3 px-16 flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500  mx-auto mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Consult a vet</button>
  </Link>
  <Link to ="/Trainning">  
<button type="button" class="py-3 px-16 flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500  mx-auto mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Dog Training</button>
  </Link>
<button type="button" class="py-3 px-16 flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500  mx-auto mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Dog walking</button>
  <Link to = '/Relocation'>
<button type="button" class="py-3 px-14 flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500  mx-auto mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  pet Relocation</button>
  </Link>
<Link to ='/Insurance'>
<button type="button" class="py-3 px-16 flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 mx-auto mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Pet Insurance</button>
  </Link>
  </div>
  
    </>
  )
}

export default Service