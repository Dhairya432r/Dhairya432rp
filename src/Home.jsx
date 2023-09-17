import React from "react";
import NavBar from "./NavBar";
import Pet from "./Petjourney";
import Footer from "./Footer";
import Question from "./Question";
import './App.css';
import { Link } from "react-router-dom";
const Home = () => {
    const gotoBtn = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"});
    }
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <NavBar />

            
            {/* <img src="./assets/images/img2.jpg" alt="" className="  h-[512px] w-full  " /> 
    <div className="   lg:flex  md:flex sm:inline-block lg:h-32 lg:w-full   justify-evenly align-middle">
                    <div className="  lg:mb-0 box-content bg-white  h-56  lg:h-64 lg:w-3/5  border-4  rounded-xl">
                  
                        <h1 className=" bg-slate-200 rounded-s-full lg:text-4xl text-2xl font-bold sm:font-bold text-center  border-blue-500"><br />
                            Re-Home and Adopt a Pet in India
                        </h1>
                        <br />
                        <p className=" sm:font-bold text-xl font-bold font-mono  text-center lg:w-[90%] ">
                            Every Pet Deserves a Good Home. #Adoptlove
                        </p>
                       
                        <button type="button" class="py-3 px-16 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-80 ml-28 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  Adopt</button> */}

  {/* lg mate che */}
   <div class=" lg:block  hidden ">
   <div class="absolute left-0 right-0 grid place-items-center">
   <img src="./assets/images/img2.jpg" alt="" className="   h-[512px] w-full  " /> 
   </div>
    <div class=" relative box-content bg-white shadow-2xl   rounded-sm  top-[400px] mx-auto px-0  py-10  w-[1050px]">
      
      <h1 class="text-gray-600 font-extrabold text-[43px]  ml-40 "> Re-Home and Adopt a Pet in India </h1><br/>  
      <h1 class="text-gray-500 font-semibold text-2xl  text-center">Every Pet Deserves a Good Home. #Adoptlove </h1><br/>  
      <Link to= "/Adoptpet">
      <button onClick={scrollToTop} type="button" class="py-4 px-28 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-[400px] ml-24  mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Adopt</button></Link>
    </div>
</div>

{/* sm mate che */}
<div className='lg:hidden  md:block block'> 
    <div class="">
  <div class="absolute left-0 right-0 grid place-items-center">
  <img src='./assets/images/img2.jpg' className='w-full   md:h-[400px] h-56    '/>
  </div>
</div>
<div className=''>
    <div className='absolute left-0 right-0  grid place-items-center'>
    <div className=' relative  box-content mx-auto bg-white shadow-2xl   rounded-lg pt-4 md:top-[250px] top-[150px] px-2 md:px-10 py-10 '>
    <p class="text-gray-600 font-extrabold text-lg text-center "> Re-Home and Adopt a Pet in India  </p><br/>  
    <h1 class="text-gray-500 font-semibold text-base  text-center"> Every Pet Deserves a Good Home. #Adoptlove </h1><br/>   
    <Link to = '/Adoptpet'>
    <button type="button" class="py-3 px-20   flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-[350px] ml-16  mb-0 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Adopt</button></Link>
      
      </div>
    </div>
</div>
</div>
<div className="md:block hidden">
<br/>
<br/>
<br/>
</div>
<div className="lg:hidden block">
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

</div>


                    {/* </div>
                </div>
                <br/><br/> */}
            
            <div className="lg:hidden inline-block md:inline-block  justify-center fixed  bottom-[74px] ">
    <div className="box-content h-[75px] md:w-screen  w-full bg-slate-200 fixed  ">
                
      <button type="button" onClick={gotoBtn} class="py-4 px-28  mx-auto flex  gap-2  border border-transparent font-bold bg-orange-500   mt-3  shadow-lg text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Search a pet</button> 
    </div>

</div>
            <Pet />
            <Question/>
<Footer/>
        </>
    )
}
export default Home;