// import { Link } from 'react-router-dom'
import React  from 'react'
import NavBar from './NavBar'
import Question3 from './Question3';
import Footer from './Footer';
const Insurance = () => {
    const gotoBtn5 = () => {
        window.scrollTo({top:700, left:0, behavior: "smooth"});
    }
  return (
    <>
   <NavBar/>
    <div className='box-content bg-zinc-200/100 shadow-xl h-[1000px] w-full'>
    <div className='lg:flex inline-block md:flex justify-evenly'>
        <div className='inline-block ml-4 '>
        <h1 className='lg:text-4xl text-2xl  mt-16 font-bold text-gray-700'>Best Pet Insurance for your Dog</h1>
        <h1 className='text-xl text-green-500'>Pet insurance plans that suit best your Dog<br className='md:block hidden'/> well being</h1>
        <li className='list-disc text-gray-700 text-lg'>Plans starting at Rs 2 per day</li>
        <li className='list-disc text-gray-700 text-lg'>Use any vet, anywhere</li>
        <li className='list-disc text-gray-700 text-lg'>More than a million pets protected</li>
        <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-banner-dancing-dog.gif' className='h-[500px]  w-[550px]'/>
        </div>
        <div className='inline-block'>
        <section class="bg-gray-50 h-[750px] md:h-[950px] md:w-[300px] dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center md:mt-0 mt-6 px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <h1 className='text-gray-600 kg:text-3xl text-2xl font-semibold md:mt-0 mb-4 mt-10'>The Best Pet Insurance for a <br/>Lifetime of Care</h1>
      <div class="w-full  bg-white  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Fill in your details below to receive policy plan quotations
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
              <label for="underline_select" class="sr-only">Pet?</label>
<select id="underline_select" class="block py-2.5 px-0 w-44 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
    <option selected>Select your pet</option>
    <option value="Dog">Dog</option>
    <option value="Cat">Cat</option>
   
</select>
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact no:</label>
                      <input type="number" name="contact" id="contact" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required=""/>
                  </div>
                  {/* <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div> */}
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-gray-600 bg-orange-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
</div>
    </div>
    </div><div className='lg:hidden md:hidden block'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>

<div className='box-content lg:bg-white bg-gray-200 lg:h-[260px] h-[400px] w-full shadow-xl'>
    <h1 className='text-4xl text-gray-600 font-bold text-center mt-16 lg:mt-0 mb-10'>What is a Pet Insurance?</h1>
    <p className='text-xl text-center text-gray-500 '>
    Pet insurance is exactly what health insurance is for humans. Pet insurance is an insurance policy that is customized to cover the veterinary expenses of your dog.
<br/><br/>
A pet without insurance can be expensive to maintain overall health and well-being these days. So, pet insurance ensures that you don’t face any financial crunch and your pet dog continues to be your number one priority! 🐶
    </p>
</div>
    
<div className='box-content lg:bg-gray-100  lg:h-[600px] h-[1400px] w-full '>
    <h1 className='text-4xl font-bold text-gray-600 text-center lg:mt-0 mt-16 '>Why would you need Pet Insurance?</h1>
<div className='lg:flex justify-evenly mt-16'>
    <div className='lg:inline-block'>
    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-item-1.gif' className='h-[250px]  mx-auto w-[250px] rounded-full'/>
    <h1 className='lg:text-2xl md:text-2xl text-gray-600 font-semibold text-center mt-5 mb-4 '>Ensure Best Health</h1>
    <p className='text-base md:text-lg text-gray-500 text-center font-semibold'>To make sure your pet dog gets the best<br/> treatment and health-care whenever required.</p>    
    </div><br/>
    <div className='lg:inline-block'>
    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-item-2.gif' className='h-[250px] mx-auto  w-[250px] rounded-full'/>
    <h1 className='lg:text-2xl md:text-2xl text-gray-600 font-semibold text-center mt-5 mb-4 '>Save your money</h1>
    <p className='text-base md:text-lg text-gray-500 text-center font-semibold'>Veterinary expenses can be very heavy on your<br/> budget and saving.A pet insurance ensures you<br/> never have to choose between your pet or your <br/>savings and ensures your pet dog is always<br/> covered.</p>
    </div><br/>
    <div className='lg:inline-block'>
    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance-item-4.gif' className='h-[250px] mx-auto  w-[250px] rounded-full'/>
    <h1 className='lg:text-2xl md:text-2xl text-gray-600 font-semibold text-center mt-5 mb-4 '>Avoid the avoidable</h1>
    <p className='text-base md:text-lg text-gray-500 text-center font-semibold'>We know you take utmost care of your pet, but we <br/>can't avoid any accidents and a pet insurance<br/> always there to cover you pet's health.</p>
    </div>

</div>
</div>
<div>
    <div className='box-content bg-white lg:h-[350px] h-[630px] md:h-[700px] mt-0 w-full'>
        <div>
            <h1 className='text-4xl mt-10 font-bold text-gray-600 text-center'>What does pet insurance cover?</h1>
        <div className='lg:flex lg:justify-evenly mt-10'>
            <div className='box-content  bg-white lg:h-[200px] md:h-[250px] md:w-[600px] h-[220px] border-[1px] rounded-md border-gray-300 lg:w-[500px] mx-auto w-[350px]'>
            <div className='flex justify-evenly'><h1 className='lg:text-3xl md:text-3xl lg:text-gray-600 font-bold'>Hospitalisation Cover</h1><img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyWquXqRq_mZ9OVCrJ_65CYPuYqPkx-GtQtA7FkD6uXZMla3HY' className='lg:h-28 h-20 w-20 lg:w-28'/></div>
            <p className='text-gray-600 text-sm text-center md:text-lg lg:text-lg'>Veterinary bills and medical treatments can be unpredictable and expensive. To avoid unwanted major expenses, many pet parents choose to buy pet insurance.</p>
            </div><br/><br/>
            <div className='box-content  bg-white lg:h-[200px] md:h-[250px] md:w-[600px] h-[220px] border-[1px] rounded-md border-gray-300 lg:w-[500px] mx-auto w-[350px]'>
            <div className='flex justify-evenly'><h1 className='lg:text-3xl md:text-3xl lg:text-gray-600 font-bold'>Surgery Expenses</h1><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR226inoP9Cqhig8aXllY81chm9NPimIHI84LXy073q_QtH2vt' className='lg:h-28 h-20 w-20 lg:w-28'/></div>
            <p className='text-gray-600 text-sm text-center md:text-lg lg:text-lg'>Pet insurance ensures your dog will be covered in the unfortunate event  of an accident, emergency, illness or surgical expenses incurred by you for treatment of your dog.</p>
            </div>
        </div>
        </div>

    </div>
</div>

<div className=''>
<div className='lg:flex lg:justify-evenly  '>
    
    <div>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-Coverage-Icon.svg ' className='mx-auto'/>
<h1 className='text-center text-xl font-bold text-gray-700 mb-3'>Common Illness</h1>
<p className='text-center text-gray-600 font-semibold'>From the sniffles to skin issues and <br/>everything in between.</p>
    </div>
    <div>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-Coverage-Icons-1.svg' className='mx-auto'/>
<h1 className='text-center text-xl font-bold text-gray-700 mb-3'>Accidents and Emergencies</h1> 
<p className='text-center text-gray-600 font-semibold'>Here for you when the unpredictable<br/> happens.</p>
    </div>
    <div>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-Coverage-Icons-2.svg' className='mx-auto'/>
<h1 className='text-center text-xl font-bold text-gray-700 mb-3'>Surgery and Hospitalization<br/> cover</h1>
<p className='text-center text-gray-600 font-semibold'>Optional coverage toward the cost of<br/> yearly surgery, diagnostic tests, & <br/>more.</p>
    </div>
    <div>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-Coverage-Icons-3.svg' className='mx-auto'/>
<h1 className='text-center text-xl font-bold text-gray-700 mb-3'>OPD Cover</h1>
<p className='text-center text-gray-600 font-semibold'>Your pet deserves a fighting chance.<br/> We'll help with OPD cover and more<br/> for treatment of specific illnesses by<br/> vet.</p>
    </div>
</div>
<div className='lg:flex  justify-evenly'>
<div>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-Coverage-Icons-5.svg' className='mx-auto'/>
<h1 className='text-center text-xl font-bold text-gray-700 mb-3'>Hereditary and Congenital Disorders</h1>
<p className='text-center text-gray-600 font-semibold'>Like us, pets have unique health histories. Pet<br/> insurance can help you afford covered<br/> treatments for illnesses your pet inherits.</p>
    </div>
    <div>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-Coverage-Icons-6.svg' className='mx-auto'/>
<h1 className='text-center text-xl font-bold text-gray-700 mb-3'>OPD Cover</h1>
<p className='text-center text-gray-600 font-semibold'>Ongoing care can add up. Insurance covers<br/> conditions that aren't pre-existing for the life of<br/> your pet.</p>
    </div>
</div>

</div>

<div>
    <div className='box-content bg-sky-200 lg:h-[550px]  h-[1000px] lg:w-[1100px] md:w-[600px] w-[350px] mt-10 mx-auto '>
    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-vet-extra-cover.png' className='h-[500px] md:block mx-auto hidden md:w-[350px]'/>
    <div className='mx-auto md:block hidden'>
            <h1 className='lg:text-6xl text-5xl ml-6 font-semibold mt-10 text-gray-600'>What else<br/> is covered?</h1>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Mortality Benefit Cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Terminal Diseases Cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Long Term Care Cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Third party liability cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Theft/Lost/Straying Cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
        </div>
    
    <div className='lg:flex inline-block  justify-evenly'>
        <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-vet-extra-cover.png' className='h-[500px] md:hidden md:w-[350px]'/>
        <div className='inline-block md:hidden '>
            <h1 className='lg:text-6xl text-5xl ml-6 font-semibold mt-10 text-gray-600'>What else<br/> is covered?</h1>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Mortality Benefit Cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Terminal Diseases Cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Long Term Care Cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Third party liability cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
            <h1 className='text-2xl text-gray-600 ml-6 font-semibold mt-7 '>Theft/Lost/Straying Cover</h1>
            <hr className='bg-black h-[3px] ml-6'/>
        </div>
    </div>

    </div>

</div>


{/* Insurance button */}
<div className="lg:hidden inline-block  justify-center fixed bottom-[74px] ">
    <div className="box-content h-[75px] w-full bg-slate-200 fixed  ">
                
      <button type="button" onClick={gotoBtn5} class="py-4 px-28  mx-auto flex  gap-2  border border-transparent font-bold bg-orange-500   mt-3  shadow-lg text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Buy a pet Insurance</button> 
    </div>
</div>

<div className='lg:flex justify-evenly md:hidden '>
    <div className='inline-block lg:mt-28 mt-10'>
    <h1  className='lg:text-6xl text-5xl ml-4 font-semibold text-gray-600'>Pet Insurance Makes <br/>a Big Difference</h1><br/>
    <h1 className='text-gray-600 text-center'>Fast claims process, so you and your fur baby can get back to play time</h1>
    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance__advantage__pet-love.jpg' className='lg:h-[400px] lg:w-[400px]'/>
    </div>
    <div className='inline-block lg:mt-28 mt-10'>
        <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/tpn-pet-insurance-example.svg'/>
    </div>
</div>
<div className='md:block hidden lg:mt-28 mt-10'>
    <h1  className='lg:text-6xl text-5xl ml-4 text-center font-semibold text-gray-600'>Pet Insurance Makes <br/>a Big Difference</h1><br/>
    <h1 className='text-gray-600 text-center'>Fast claims process, so you and your fur baby can get back to play time</h1>
    <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-insurance__advantage__pet-love.jpg' className='lg:h-[400px] lg:w-[400px]'/>
    </div>
    <div className='md:flex justify-center md:text-2xl hidden lg:mt-28 mt-10'>
        <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/tpn-pet-insurance-example.svg'/>
    </div>
   
   <div className=' absolute  mt-20 lg:right-44 right-4 '>
        <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/tpn-blur-hydrant.png' className='h-32 w-32 mx-auto '/>
        </div>
        <div>
    <div className='box-content  mt-40 mx-auto bg-lime-300 lg:h-[250px] h-[500px] lg:w-[1200px] w-full'>
       <div className='lg:flex hidden' >
       <div className='inline-block'>
        <h1 className='lg:text-5xl font-bold text-gray-600 ml-10'>What is not covered?</h1>
        <div className='flex'>
            <div className='inline-block'>
                <div className='flex  mt-10'>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='ml-10'/><h1 className='text-lg font-semibold  text-gray-600 mr-5'>Accidental Injury to working dogs and volunteer dogs</h1>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='ml-10'/><h1 className='text-lg font-semibold  text-gray-600'>Fees for experimental procedures/alternate treatments</h1>
</div>
            </div></div><br/>
            <div className='inline-block'>
            <div className='lg:flex inline-block'>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='ml-10'/><h1 className='text-lg font-semibold  text-gray-600 mr-5'>Accidents occurring and/or disease contracted prior to commencement of risk</h1>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='ml-10'/><h1 className='text-lg font-semibold  text-gray-600'>Cloned Pets or Cloning Procedures</h1>
            </div><br/>
            </div>
            <div className='inline-block'>
            <div className='lg:flex inline-block'>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='ml-10'/><h1 className='text-lg font-semibold  text-gray-600 mr-5'>Cosmetic Surgery</h1>
<img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='ml-10'/><h1 className='text-lg font-semibold  text-gray-600'>Medication or treatment not recommended by a Vet</h1>
            </div>
            </div>
        </div>
        </div>
        
        <div className='lg:hidden block'>
            <h1 className='text-4xl text-gray-700 font-bold'>What is not <br/> covered?</h1>
            <div className='flex '>
                <div className='inline-block'>
                <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='h-10 mt-10'/>
                <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='h-10 mt-5'/>
                <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='h-10 mt-6'/>
                <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='h-10 mt-1'/>
                <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='h-10'/>
                <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/TPN-not-covered-icon.svg' className='h-10'/>
                </div>
                <div className='inline-block mt-10'>
                    <h1 className='text-base mb-3 font-semibold md:text-2xl  text-gray-600 '>Accidental Injury to working dogs and volunteer dogs</h1>
                    <h1 className='text-base mb-3 font-semibold md:text-2xl  text-gray-600 '>Fees for experimental procedures/alternate treatments</h1>
                    <h1 className='text-base mb-3 font-semibold md:text-2xl  text-gray-600 '>Accidents occurring and/or disease contracted prior to commencement of risk</h1>
                    <h1 className='text-base mb-3 font-semibold md:text-2xl  text-gray-600 '>Cloned Pets or Cloning Procedures</h1>
                    <h1 className='text-base mb-3 font-semibold md:text-2xl  text-gray-600 '>Cosmetic Surgery</h1>
                    <h1 className='text-base mb-3 font-semibold md:text-2xl  text-gray-600 '>Medication or treatment not recommended by a Vet</h1>

                </div>
                </div>
            </div>
        </div>
</div>
  {/* lg mate che */}
  <div class=" lg:block hidden mt-80 ">
   <img src="https://dm6g3jbka53hp.cloudfront.net/static-images/pet-care-pet-insrance-customer-review.jpg" alt="" className="  h-[512px] w-[1100px] mx-auto  " /> 
    <div class=" absolute box-content bg-white  top-[4600px] border-[2px]  rounded-sm  ml-36 px-0  py-10  h-48 w-[350px]">
      <div className='box-content bg-orange-500 h-2 w-14 ml-10 mb-4'></div>
      <h1 class="text-gray-600 font-bold text-lg  "> I am glad that I got an Insurance Policy for Moko. Now I am stress-free about his health and at the same time I can take proper care of my lovy duby.-<span className='text-orange-500'> Ankita Khapse</span> </h1><br/>  
       <h1 className='text-gray-600 text-3xl text-center'>We’re The Pet People.</h1>
    
    <div className=" mt-72 lg:ml-[650px] px-1 py-1 bg-gray-500/50 lg:w-80 w-[360px]">
          <h1 class="text-white font-semibold text-xl text-center"> Ankita Khapse in Pune, India </h1>
          </div>
        </div>
</div>

{/* sm mate che */}
{/* <div className='lg:hidden block'> 
    <div class="">
  <div class="absolute left-0 right-0 grid place-items-center">
  <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet-care-pet-insrance-customer-review.jpg' className='w-full  h-56    '/>
  </div>
</div>
<div className=''>
    <div className='absolute left-0 right-0 grid place-items-center'>
    <div className=' relative  box-content mx-auto bg-white shadow-2xl   rounded-lg pt-4  px-2 py-10 '>
    <p class="text-gray-600 font-extrabold text-lg text-center "> Re-Home and Adopt a Pet in India  </p><br/>  
    <h1 class="text-gray-500 font-semibold text-base  text-center"> Every Pet Deserves a Good Home. #Adoptlove </h1><br/>   
    <button type="button" class="py-3 px-20   flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-orange-500 lg:ml-[350px] ml-16  mb-0 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      Adopt</button>
      
      </div>
    </div>
</div>
</div> */}

<div className='lg:flex inline-block lg:mt-28 justify-evenly'>
    <div className='inline-block'>
        <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/pet_care_pet_insurance.png' className='h-96 w-96'/>
</div>
<div className='inline-block'>
    <h1 className='lg:text-4xl font-bold flex justify-center  text-gray-600 mb-10 mt-9 md:mt-0'>Benefits of a Pet Insurance?</h1>
    <div className='flex ml-10 lg:ml-0 '>
        <img src='./assets/images/greentick.png' className='h-7 w-7'/>
    <h1 className='text-gray-600 lg:text-xl ml-4 font-semibold  '>Cover expensive treatment expenses.</h1>
    </div>
    <div className='flex ml-10 lg:ml-0 '>
    <img src='./assets/images/greentick.png' className='h-7 w-7'/>
    <h1 className='text-gray-600 lg:text-xl ml-4 font-semibold  '>Stay stress-free and financially secure.</h1>
    </div>
    <div className='flex ml-10 lg:ml-0 '>
    <img src='./assets/images/greentick.png' className='h-7 w-7'/>
    <h1 className='text-gray-600 lg:text-xl ml-4 font-semibold  '>All India health coverage for your<br className='lg:hidden block'/> beloved pet.</h1>
    </div>
    <div className='flex ml-10 lg:ml-0 '>
    <img src='./assets/images/greentick.png' className='h-7 w-7'/>
    <h1 className='text-gray-600 lg:text-xl ml-4  font-semibold  '>Ensure best treatment for your pet<br className='lg:hidden block'/> whenever required.</h1>
    </div>
    <div className='flex ml-10 lg:ml-0 '>
    <img src='./assets/images/greentick.png' className='h-7 w-7'/>
    <h1 className='text-gray-600 lg:text-xl ml-4 font-semibold  '>Small investment today can save a lot<br className='lg:hidden block'/> more in the future.</h1>
    </div>
</div>
</div>
<Question3/>
<Footer/>

    </>
  )
}

export default Insurance