import React from "react";
import NavBar from "./NavBar";
import Pet from "./Petjourney";
import Footer from "./Footer";
import Question from "./Question";
const Home = () => {
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
   <div class=" lg:block hidden ">
   <img src="./assets/images/img2.jpg" alt="" className="  h-[512px] w-full  " /> 
    <div class=" absolute box-content bg-white shadow-2xl  rounded-sm  top-[500px] ml-36 px-0  py-10  w-[1050px]">
      
      <h1 class="text-gray-600 font-extrabold text-[43px]  ml-40 "> Re-Home and Adopt a Pet in India </h1><br/>  
      <h1 class="text-gray-500 font-semibold text-2xl  text-center">Every Pet Deserves a Good Home. #Adoptlove </h1><br/>  
      <button type="button" class="py-4 px-28 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-[400px] ml-24  mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Adopt</button>
    </div>
</div>

{/* sm mate che */}
   <div class=" block lg:hidden ">
   <img src="./assets/images/img2.jpg" alt="" className="  h-[512px] w-full  " />
    
    <div class=" absolute box-content bg-white shadow-2xl   rounded-sm pt-4 top-[500px] ml-8 px-6  py-44 h-10  w-[300px]">
      
      <p class="text-gray-600 font-extrabold text-base  ml-2 "> Re-Home and Adopt a Pet in India  </p><br/>  
      <h1 class="text-gray-500 font-semibold text-base  text-center"> Every Pet Deserves a Good Home. #Adoptlove </h1><br/>  
      <button type="button" class="py-3 px-16 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-[350px] ml-16  mb-10 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Adopt</button>
    </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


                    {/* </div>
                </div>
                <br/><br/> */}
            
            <Pet />
            <Question/>
<Footer/>
        </>
    )
}
export default Home;