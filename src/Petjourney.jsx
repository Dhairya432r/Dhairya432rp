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
      <div className="lg:mt-[500px]  mb-12 text-gray-600">
        <h2 className="font-extrabold lg:block hidden  lg:text-4xl text-center">Your Pet Adoption Journey With Addo pet</h2>
        <h2 id="para" className="font-extrabold text-xl text-center lg:hidden block md:text-4xl  ">Your Pet Adoption Journey  <br /><h1 className="text-center text-orange-500"> With Addo pet</h1></h2>
      </div>
      <div className="mr-0 lg:mt-20 lg:flex md:flex justify-center sm:inline-block">
        <div>
          <img src="./assets/images/img3.jpg" className="h-[555px]  w-[555px] lg:pl-20  " />
        </div>
        {/* lg mate che */}
        <div className="lg:inline-block mt-10  hidden ">
          <img src="./assets/images/search.png" className=" h-[100px] w-[100px] mb-10    " />
          <img src="./assets/images/24-hours.png" className="h-[100px] w-[100px] mb-10  " />
          <img src="./assets/images/pet.png" className="h-[100px] w-[100px] mb-10 " />
          <img src="./assets/images/consulting.png" className="h-[100px] w-[100px] mb-10 " />
        </div>

        <div className=" lg:inline-block  hidden">

          <p className="lg:text-2xl sm:text-xl font-bold text-gray-700  ml-44 lg:ml-6 lg:mb-1 mt-8">Search Pet</p>
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
      <div className="flex  lg:hidden md:flex md:justify-center">
        <img src="./assets/images/search.png" className=" h-[100px] pl-1 md:h-36 md:ml-0 md:w-36 w-[100px] " />
        <div className="inline-block  ">
          <p className="md:text-4xl text-2xl font-bold text-gray-700   ml-6  md:ml-0  sm lg:mb-1 ">Search Pet</p>
          <p className="text-xl md:text-2xl md:ml-0 text-gray-500 ml-6">Adopt a dog or cat who's right for you. Simply enter your<br />city above to start your search.</p>
        </div>
       </div>
      <div className="flex lg:hidden md:flex md:justify-center ">
      <img src="./assets/images/24-hours.png" className="h-[100px] md:ml-0 md:h-36  md:w-36 pl-1 w-[100px]  mt-8 ml-1 " />
        <div className="inline-block">
        <p className="text-2xl md:text-4xl font-bold text-gray-700 md:ml-0 ml-6 mb-1 md:pt-8 md:mt-1 mt-8">Connect</p>
          <p className="text-xl md:text-2xl text-gray-500 md:ml-0 ml-6">Once you find a pet, click "show number" to get contact info <br /> for their pet parent or rescue. Contact them to learn more <br /> about how to meet and adopt the pet.</p>
          <br />
        </div>
       </div>
    
       <div className="flex lg:hidden md:flex md:justify-center">
      <img src="./assets/images/pet.png" className="h-[100px] md:ml-0 md:h-36 md:w-36 pl-1 w-[100px] mb-10 mt-8 ml-1" />
        <div className="inline-block">
        <p className="text-2xl md:text-4xl md:ml-0 font-bold text-gray-700 ml-6 mb-1 mt-8">AdoptLove</p>
          <p className="text-xl md:text-2xl md:ml-0 text-gray-500 ml-6">The rescue or pet parents will walk you through their ado-<br className="md:block" />ption process. Prepare your home for the arrival<br className="md:block hidden"/> of your fur baby to<br className="md:hidden" /> help them adjust to their new family.</p> 
        </div>
       </div>
      <div className="flex lg:hidden md:flex md:justify-center">
      <img src="./assets/images/consulting.png" className="h-[100px] md:ml-0 md:h-36 md:w-36 pl-1 w-[100px] mb-10 mt-8 ml-1" />
        <div className="inline-block">
        <p className="text-2xl md:text-4xl md:ml-0 font-bold text-gray-700 ml-6 mb-1 mt-8">Free Vet Consultation</p>
          <p className="text-xl md:text-2xl md:ml-0 text-gray-500 ml-6">Addo pet will help your pet to settle down in its new home,<br /> once you complete the Adop-tion journey reach out to <br /> us for free vet consultation.</p> 
        </div>
       </div>
       <br/>
       <br/>
       

      {/* How it works? */}
      <div className='  bg-gray-200  pt-10  '>

        <div className='lg:mt-10 lg:mb-10  '>
          <h1 className='grid justify-center text-5xl text-center lg:mb-10 text-gray-700   font-bold'>How it works?</h1>
         
          <div className="lg:flex lg:justify-evenly">
            <div className="lg:inline-block ">
             <div className=" mb-2   text-blue-400 ">
                <img src="./assets/images/loupe.png" className="h-20 w-20 flex justify-center mx-auto md:flex md:justify-center md:mx-auto" />
              </div>
              <h1 className="font-semibold text-2xl border-spacing-14 rounded-s-full flex justify-center mx-auto md:flex md:justify-center md:mx-auto   ">
                Search
              </h1>
              <br />
              <p className="text-xl text-gray-600 text-center">
                Simply enter your city start your search
              </p>
            <br/>
            </div>
            <div className="lg:inline-block ">
              <div className=" mb-2 pl-2 text-blue-400 ">
                <img src="./assets/images/message.png" className="h-20 w-20 mx-auto" />
              </div>
              <h1 className=" font-semibold text-2xl border-spacing-14 rounded-s-full border-blue-500 text-center">
                Meet
              </h1>
              <br />
              <p className="text-xl text-gray-600 text-center  ">
                Schedule your appointment to meet the pet you love
              </p>
              <br/>
              </div>
              <div className="lg:inline-block ">
              <div className=" mb-2  text-blue-400 ">
                <img src="./assets/images/cart.png" className="h-20 w-20 mx-auto" />
              </div>
              <h1 className=" font-semibold text-2xl border-spacing-14 rounded-s-full border-blue-500 text-center">
                Adopt
              </h1>
              <br />
              <p className="text-xl text-gray-600 text-center">
                Finnally adopt the dog or cat you love
              </p>
              <br/><br/><br/>
              </div>
            </div>
            </div>
          </div>
<br/>










      {/* box with text */}
      <div class="  bg-[url(https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/bltd3894bd280c131a6/6261d197787c0839e4c667c5/zpc_og_article_benefits-adopting-pet.jpg)] lg:mx-auto md:h-[600px] lg:mt-1 hidden lg:block md:block  lg:h-[600px] lg:w-[85%] ">
        <div class=" bottom-0 px-4 py-3 bg-gray-500/50 w-full">
          <h1 class="text-white font-semibold text-4xl"> I am very happy to adopt Olivia. I was fortunate enough to find her on Addo Pet. – Alina John's </h1>
          <p class="text-gray-200">
            We’re The Pet People.<a href="#" className="text-orange-500 font-mono ml-6 text-2xl">Learn More ! </a>
          </p>
        </div>
        <div className="lg:mt-96  lg:ml-[50%] px-1 py-1 bg-gray-500/50 lg:w-96 w-[360px]">
          <h1 class="text-white font-semibold text-xl  ml-1 lg:ml-10"> Alina John's in california,America </h1>

        </div>
      </div>
      <br/><br/><br/>
      <div class="  bg-[url(https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/bltd3894bd280c131a6/6261d197787c0839e4c667c5/zpc_og_article_benefits-adopting-pet.jpg)]  "></div>
<div className=" bg-[url(https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-love-20210430.svg)] lg:flex md:flex  justify-evenly hidden lg:h-[400px] w-full">
  
 <div className="">
  <img src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-dont-shop-thepetnest.svg" className="w-80 mt-20 h-80"/>
 </div>
<div className="inline-block mt-40 text-white">
  <h1 className="font-bold text-3xl text-center ">#AdoptLove</h1>
  <p className="text-center font-semibold">Approximately 1478 dogs & cats die every day on road in India.<br/> ThePetNest is on a mission to provide every dog and cat a home<br className="lg:block block md:hidden"/> before 2035. It’s just one of the many ways ThePetNest! gives back<br/> and helps you become a part of something larger. Join ThePetStar<br/> Community and help setting up Pet houses in your surrounding<br/> for strays.</p>
</div>
</div>





    </>
    )
}
export default Pet;