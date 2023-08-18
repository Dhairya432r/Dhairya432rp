import React from "react";

const Pet = () => {
  // function toggleHide() {
  //   let btn =document.getElementById('btn');
  //   let para =document.getElementByClass('para');

  //   if(para.style.display !='none'){
  //     para.style.display ='none';
  //   }
  //   else{
  //       para.style.display='block';
  //   }
  // }

  return (
    <>
      {/* Your Pet Adoption Journey With ThePetNest */}
      {/* Your Pet Adoption Journey With ThePetNest */}
      <div className="lg:mt-56 mb-12 text-gray-600">
        <h2 className="font-extrabold lg:block hidden  lg:text-4xl lg:ml-64">Your Pet Adoption Journey With Addo pet</h2>
        <h2 className="font-extrabold text-2xl lg:hidden block lg:text-4xl lg:ml-64">Your Pet Adoption Journey With <br /><h1 className="ml-36 text-orange-500">Addo pet</h1></h2>
      </div>
      <div className="mr-0 lg:flex sm:inline-block">
        <div>
          <img src="./assets/images/img3.jpg" className="h-[555px] w-[555px] lg:ml-20 " />
        </div>
        {/* lg mate che */}
        <div className="lg:inline-block mt-10 hidden ">
          <img src="./assets/images/search.png" className=" h-[100px] w-[100px] mb-10  " />
          <img src="./assets/images/24-hours.png" className="h-[100px] w-[100px] mb-10  " />
          <img src="./assets/images/pet.png" className="h-[100px] w-[100px] mb-10 " />
          <img src="./assets/images/consulting.png" className="h-[100px] w-[100px] mb-10 " />
        </div>

        <div className=" lg:inline-block hidden">

          <p className="lg:text-2xl sm:text-xl font-bold text-gray-700   ml-44 lg:ml-6  sm lg:mb-1 mt-8">Search Pet</p>
          <p className="text-xl text-gray-500 ml-6">Adopt a dog or cat who's right for you. Simply enter your<br />city above to start your search.</p>
          <br />
          <p className="text-2xl font-bold text-gray-700 ml-6 mb-1 mt-8">Connect</p>
          <p className="text-xl text-gray-500 ml-6">Once you find a pet, click "show number" to get contact<br />info for their pet parent or rescue. Contact them to learn<br />more about how to meet and adopt the pet.</p>
          <br />
          <p className="text-2xl font-bold text-gray-700 ml-6 mb-1 mt-1">AdoptLove</p>
          <p className="text-xl text-gray-500 ml-6">The rescue or pet parents will walk you through their<br />adoption process. Prepare your home for the arrival of<br /></p>
          <br />
          <p className="text-2xl font-bold text-gray-700 ml-6 mb-1 mt-8">Free Vet Consultation</p>
          <p className="text-xl text-gray-500 ml-6">ThePetNest will help your pet to settle down in its new<br />home, once you complete the Adoption journey reach out<br />to us for free vet consultation.</p>
        </div>
      </div>
      <br />
      <br />
      {/* sm mate che */}
      <div className="flex lg:hidden ">
        <img src="./assets/images/search.png" className=" h-[100px] w-[100px] mb-10  " />
        <div className="inline-block">
          <p className="lg:text-2xl text-2xl font-bold text-gray-700  ml-10  lg:ml-6  sm lg:mb-1 ">Search Pet</p>
          <p className="text-xl text-gray-500 ml-6">Adopt a dog or cat who's right for you. Simply enter your<br />city above to start your search.</p>
        </div>
       </div>
      <div className="flex lg:hidden ">
      <img src="./assets/images/24-hours.png" className="h-[100px] w-[100px] mb-10 mt-12  " />
        <div className="inline-block">
        <p className="text-2xl font-bold text-gray-700 ml-6 mb-1 mt-8">Connect</p>
          <p className="text-xl text-gray-500 ml-6">Once you find a pet, click "show number" to get contact<br />info for their pet parent or rescue. Contact them to learn<br />more about how to meet and adopt the pet.</p>
          <br />
        </div>
       </div>
      <div className="flex lg:hidden ">
      <img src="./assets/images/pet.png" className="h-[100px] w-[100px] mb-10 mt-8" />
        <div className="inline-block">
        <p className="text-2xl font-bold text-gray-700 ml-6 mb-1 mt-1">AdoptLove</p>
          <p className="text-xl text-gray-500 ml-6">The rescue or pet parents will walk you through their<br />adoption process. Prepare your home for the arrival of<br /></p>
          <br />
        </div>
       </div>
      <div className="flex lg:hidden ">
      <img src="./assets/images/consulting.png" className="h-[100px] w-[100px] mb-10 mt-16" />
        <div className="inline-block">
        <p className="text-2xl font-bold text-gray-700 ml-6 mb-1 mt-8">Free Vet Consultation</p>
          <p className="text-xl text-gray-500 ml-6">ThePetNest will help your pet to settle down in its new<br />home, once you complete the Adoption journey reach out<br />to us for free vet consultation.</p> 
        </div>
       </div>
       <br/>
       <br/>

      {/* How it works? */}
      <div className='  bg-gray-200 pt-10 '>

        <div className='lg:mt-10 lg:mb-10  '>
          <h1 className='grid justify-center text-5xl lg:ml-8 ml-4 lg:mb-10 text-gray-700   font-bold'>How it works?</h1>
          <div className="border-spacing-x-8 lg:flex md:flex  sm:inline-block justify-evenly align-middle">
            <div className=" box-content  h-64 w-64 p-4 ">
              <div className=" mb-2 pl-2 text-blue-400 ">
                <img src="./assets/images/loupe.png" className="h-20 w-20 ml-32" />
              </div>
              <h1 className="font-semibold text-2xl border-spacing-14 rounded-s-full  border-blue-500 ml-36 lg:ml-24 ">
                Search
              </h1>
              <br />
              <p className="w-[80%] ml-24">
                Simply enter your city start your search
              </p>
            </div>
            <div className=" box-content  h-64 w-64 p-4 ">
              <div className=" mb-2 pl-2 text-blue-400 ">
                <img src="./assets/images/message.png" className="h-20 w-20 ml-32" />
              </div>
              <h1 className=" font-semibold text-2xl border-spacing-14 rounded-s-full border-blue-500 ml-36 lg:ml-24">
                Meet
              </h1>
              <br />
              <p className="w-[80%] ml-24 ">
                Schedule your appointment to meet the pet you love
              </p>
            </div>
            <div className="  box-content  h-64 w-64 p-4 ">
              <div className=" mb-2 pl-2 text-blue-400 ">
                <img src="./assets/images/cart.png" className="h-20 w-20 ml-32" />
              </div>
              <h1 className=" font-semibold text-2xl border-spacing-14 rounded-s-full border-blue-500 ml-36 lg:ml-24">
                Adopt
              </h1>
              <br />
              <p className="w-[80%] ml-24">
                Finnally adopt the dog or cat you love
              </p>
            </div>
          </div>




        </div>
      </div>

      {/* box      */}







      {/* box with text */}
      <div class="bg-[url(https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/bltd3894bd280c131a6/6261d197787c0839e4c667c5/zpc_og_article_benefits-adopting-pet.jpg)] lg:ml-20  lg:mt-32   lg:h-[600px] lg:w-[1200px] ">
        <div class=" bottom-0 px-4 py-3 bg-gray-500/50 w-full">
          <h1 class="text-white font-semibold text-4xl"> I am very happy to adopt Olivia. I was fortunate enough to find her on Addo Pet. – Alina John's </h1>
          <p class="text-gray-200">
            We’re The Pet People.<a href="#" className="text-orange-500 font-mono ml-6 text-2xl">Learn More ! </a>
          </p>
        </div>
        <div className="lg:mt-96  lg:ml-[780px] px-1 py-1 bg-gray-500/50 lg:w-96 w-[390px]">
          <h1 class="text-white font-semibold text-xl  ml-1 lg:ml-10"> Alina John's in california,America </h1>

        </div>
      </div>







    </>)
}
export default Pet;