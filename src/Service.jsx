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
    <Link to="/Petgrooming">
<button type="button" class="py-3 px-16 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-80 ml-24  mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  PetGrooming</button></Link>
<Link to ="/Consult">
<button type="button" class="py-3 px-16 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-80 ml-24 mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Consult a vet</button></Link>
<button type="button" class="py-3 px-16 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-80 ml-24 mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Dog Training</button>
<button type="button" class="py-3 px-16 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-80 ml-24 mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Dog walking</button>
<button type="button" class="py-3 px-14 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-80 ml-24 mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  pet Relocation</button>
<button type="button" class="py-3 px-16 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-80 ml-24 mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Pet Insurance</button>

  
    </>
  )
}

export default Service