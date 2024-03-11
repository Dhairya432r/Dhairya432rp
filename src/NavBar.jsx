import React, { useState ,useEffect} from 'react';
import {Link} from'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';
import('preline')




function NavBar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [user, setUser] = useState(null);
  const history = useNavigate();
  const login = () => {
  history('/Dhairya');

}
useEffect(() => {
  // Check if the 'mobile' cookie exists
  const mobileCookieExists = Cookies.get('mobileNumber');

  setUser(mobileCookieExists ? true : false);
}, []);

  const logOut = () => {
      // Remove the 'user' cookie and log the user out
      Cookies.remove('mobileNumber');
      setUser(null);
      history('/')
  };
  
    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }
  
    return (
        <header class="fixed flex border-gray-100 border-[2px] flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-2">
        <nav class="max-w-[85rem] w-full mx-auto md:px-10 px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div class="flex items-center justify-between">
            <div className='flex'>
          <img src='https://img.freepik.com/free-vector/adopt-pet-concept_23-2148523582.jpg' alt='' className=' lg:h-10 h-7 '/>
            <h1 className='mr-2 text-2xl font-adelia text-orange-500'>Addo</h1> <h1 className='text-2xl text-orange-400 font-adelia'>pet</h1>
           </div>
            <div class="sm:hidden">
              <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
                <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>
          </div>
      
          <div id="navbar-collapse-basic" class="hidden basis-full grow sm:block">
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <div class="font-medium text-blue-500" href="#" aria-current="page">Active</div>
      
              {/* <div class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] [--auto-close:false]">
                <button id="hs-mega-menu-basic-dr" type="button" class="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
                  Dropdown
                  <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </button>
      
                <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-blue-200 sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                  <div class="flex items-center gap-x-3.5 py-2 px-3  rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    About
                  </div>
                  <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] [--auto-close:false]">
                    <button type="button" class=" flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                      Sub Menu
                      <svg class="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                      </svg>
                    </button>
      
                    <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                      <div class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        About
                      </div>
                      <div class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        Downloads
                      </div>
                      <div class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        Team Account
                      </div>
                    </div>
                  </div>
      
                  <div class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    Downloads
                  </div>
                  <div class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                    Team Account
                  </div>
                </div>
              </div> */}
      
              <div class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] [--auto-close:false]">
                <button type="button" class="flex items-center  w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                  Home Services
                  <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </button>
      
                <div class="hs-dropdown-menu  justify-center transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full lg:h-56 h-[550px] md:h-[200px] hidden z-10 top-full left-0 min-w-[15rem] bg-blue-200 sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                  <div class="sm:grid sm:grid-cols-3">
                    <div class="flex flex-col ">
                     
                       <Link to ='/Petgrooming'>
                       <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-2">
                       <img src='./assets/images/NavBar1.png' className='w-10 relative h-10'/>
                     <h1 className="font-semibold my-auto " onClick={scrollToTop}>Pet Grooming</h1>
                     </div>
                      </div><br/>
                      </Link>
                      <Link to = '/Consult'>
                      <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-2">
                       <img src='./assets/images/NavBar2.png' className='w-10 relative h-10'/>
                     <h1 className="font-semibold my-auto" onClick={scrollToTop}>Consult a vet</h1>
                     </div>
                      </div><br/></Link>

                <Link to = '/Trainning'>
                      <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-2">
                       <img src='./assets/images/NavBar3.png' className='w-10 relative h-10'/>
                     <h1 className="font-semibold my-auto"onClick={scrollToTop}>Dog Training</h1>
                     </div>
                      </div><br/></Link>
                    </div>
                    


                    <div class="flex flex-col">
                    <Link to = '/'>
                    <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-2">
                       <img src='./assets/images/NavBar4.png' className='w-10 relative h-10'/>
                     <h1 className="font-semibold my-auto" onClick={scrollToTop}>Pet Walking</h1>
                     </div>
                      </div><br/></Link>
                      <Link to = '/PetForm'>
                      <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-2">
                       <img src='./assets/images/NavBar5.png' className='w-10 relative h-10'/>
                     <h1 className="font-semibold my-auto" onClick={scrollToTop}>Pet ReHome</h1>
                     </div>
                      </div><br/></Link>
                      <Link to = '/Insurance'>
                      <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-2">
                       <img src='./assets/images/NavBar6.png' className='w-10 relative h-10'/>
                     <h1 className="font-semibold my-auto" onClick={scrollToTop}>Pet  Insurance</h1>
                     </div>
                      </div></Link>
                    </div>




                    <div class="flex flex-col">
                    <Link to = '/About'>
                    <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-2">
                       <img src='./assets/images/NavBar9.jpg' className='w-10 relative h-10'/>
                     <h1 className="font-semibold my-auto" onClick={scrollToTop}>About Us</h1>
                     </div>
                      </div><br/></Link>
                    <Link to = '/Blogs'>
                    <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-2">
                       <img src='./assets/images/NavBar8.png' className='w-10 relative h-10'/>
                     <h1 className="font-semibold my-auto" onClick={scrollToTop}>Blog</h1>
                     </div>
                      </div><br/></Link>
                    
                    <div class=" text-center   py-0 px-3 rounded-md  text-sm lg:text-2xl text-gray-800  focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                       <div className="flex justify-center space-x-5">
                       <Link to = '/'>
                       <img src="./assets/images/fb.png" onClick={scrollToTop} className='h-8 w-8 mt-4'/></Link>
                       <Link to = '/'>
                       <img src="./assets/images/insta.png" onClick={scrollToTop} className='h-8 w-8 ml-6 mt-4'/></Link>
                       <Link to = '/'>
                       <img src="./assets/images/youtube.png" onClick={scrollToTop} className='h-8 w-8 mt-4 ml-4 '/></Link>
                     </div>
                      </div><br/>
                      </div>
                  </div>
                  
                </div>
                
              </div>
              <div class="flex ">
                
                {/* {user  ?(
                  <>

                     <div  onClick={logOut} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                     Logout
                   </div> 
                   </>
                ) : (
                      <div onClick={login} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                      Log In
                    </div>
                       )} */}
                    </div>


<section>
<Menu as="div" className="relative  inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  w-20 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <img src='data:image/png;base64,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' className='w-8 h-8 rounded-full' />
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="lg:absolute md:absolute  right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Candiate"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit(Pet Form)
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Candiate"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Delete(Pet Form)
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Shop
                </a>
              )}
            </Menu.Item>
          </div>
          {user  ?(
                  <>
                  {/* <div> <p className='pt-[10px] text-orange-500 text-xs'>{profile.name}</p></div> */}
                     <div  onClick={logOut} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                     Logout
                   </div> 
                   </>
                ) : (
                      <div onClick={login} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                      Log In
                    </div>
                       )}
                    
        </Menu.Items>
      </Transition>
    </Menu>
</section>
            </div>
          </div>
        </nav>
      </header>




    );
}
export default NavBar