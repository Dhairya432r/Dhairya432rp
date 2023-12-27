// PetDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import NavBar from'./NavBar'
import { Carousel, IconButton } from "@material-tailwind/react";
import('preline')

const PetDetails = () => {
  const { id } = useParams(); // Use useParams to get route parameters
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`https://server4-qtq0.onrender.com/api/pets/${id}`);
        setPet(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPetDetails();
  }, [id]); // Include id in the dependency array


  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <NavBar/>
    <br/><br/><br/><br/>
      <h1 className='text-center  text-3xl  text-gray-700  font-bold'>Adopt {pet.name}</h1>
      <Link to='/NavBar'>
        <h1 className='text-blue-700 text-xs font-bold pl-[10%]'> <span className='h-full'>＜</span>Back to Results</h1></Link><br />
      <h1 className='text-2xl font-bold  text-gray-600 pb-4 pl-[10%]'>Heya !!! My name is {pet.name}</h1>
      <div className='lg:w-[600px] w-[90%] bg-gray-100 mx-auto h-[300px] md:h-[400px] lg:h-[350px]'>
        <Carousel
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-[50%] left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-[50%] !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <img
            src={`https://server4-qtq0.onrender.com/${pet.imageUrl}`}
            alt="image 1"
            className="h-full w-full mx-auto object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full mx-auto object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full mx-auto object-cover"
          />
        </Carousel>
      </div>
      <h1 className='text-[28px] pl-[10%] font-extrabold text-gray-700 pt-4 pb-6'>Facts About Me</h1>
      {/* md and lg mate che */}
      <div className='flex pl-[10%] gap-y-1 text-lg font-semibold text-gray-700  grig-cols-2'>
        <div className='flex flex-col mr-[3%]'>
          <div className=''>Breed:</div>
          <div className='flex'>Age:</div>
        </div>
        <div className='flex flex-col mr-[15%]'>
          <h1 className='font-medium ml-4'>hello</h1>
          <h1 className='font-medium ml-4'>{pet.age}</h1>
        </div>
        <div className='flex flex-col '>
          <div className=''>Gender:</div>
          <div className='flex'>Vaccinated:</div>
        </div>
        <div className='flex flex-col mr-[15%]'>
          <h1 className='font-medium ml-4'>{pet.gender}</h1>
          <h1 className='font-medium ml-4'>
            {pet.vaccinated === "True" ? (
              <>
              <span className='text-xl mt-2 font-medium text-gray-700'>Yes </span>  
              </>
            ) : (
              <>
              <span className='text-xl mt-2 font-medium text-gray-700'>No</span>  
              </>
            )
            }
            </h1>
        </div>
      </div>
      <h1 className='text-[28px] pl-[10%] font-extrabold text-gray-700 pt-4'>My info</h1>
<div className='lg:flex md:flex inline-block md:space-x-10 lg:space-x-10'>
<div className='inline-block pl-[10%] '>
<h1 className='font-medium '>
        {pet.spray === 'Yes' ? (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="green.png" alt="Yes" />
            <span className='text-xl mt-2 font-medium text-gray-700'>Yes Spayed</span>         
          </div>
          </>
        ) : (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="orange.png" alt="No" />
            <span className='text-xl mt-2 font-medium text-gray-700'>Not Spayed</span>         
          </div>
          </>
        )}
      </h1>
      <h1 className='font-medium  pt-4'>
        {pet.cat === 'Yes' ? (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="green.png" alt="Yes" />
            <span className='text-xl mt-2 font-medium text-gray-700'>Good with Cats</span>         
          </div>
          </>
        ) : (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="orange.png" alt="No" />
            <span className='text-xl mt-2 font-medium text-gray-700'> Not Good with Cats</span>         
          </div>
          </>
        )}
      </h1>
</div>
<div>
<h1 className='font-medium pl-[10%] lg:pl-[0%] md:pl-[0%] '>
        {pet.shot === 'Yes' ? (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="green.png" alt="Yes" />
            <span className='text-xl mt-2 font-medium text-gray-700'>Shots up to Date</span>         
          </div>
          </>
        ) : (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="orange.png" alt="No" />
            <span className='text-xl mt-2 font-medium text-gray-700'> Not Shots up to Date</span>         
          </div>
          </>
        )}
      </h1>
      <h1 className='font-medium pt-4 pl-[10%] lg:pl-[0%] md:pl-[0%] '>
        {pet.dog === 'Yes' ? (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="green.png" alt="Yes" />
            <span className='text-xl mt-2 font-medium text-gray-700'>Good with Dogs</span>         
          </div>
          </>
        ) : (
          <>
          <div className='flex  '> 
            <img className='w-10 h-10' src="orange.png" alt="No" />
            <span className='text-xl mt-2 font-medium text-gray-700'> Not Good with Dogs</span>         
          </div>
          </>
        )}
      </h1>
</div>
<div>
<div className='flex pt-4 lg:pt-0 md:pt-0 pl-[10%] lg:pl-[0%] md:pl-[0%]  '> 
            <img className='w-10 h-10' src="green.png" alt="Yes" />
            <span className='text-xl mt-2 font-medium text-gray-700'>Needs Loving Adopter</span>         
          </div>
          <h1 className='font-medium pt-4 pl-[10%] lg:pl-[0%] md:pl-[0%]'>
        {pet.kid === 'Yes' ? (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="green.png" alt="Yes" />
            <span className='text-xl mt-2 font-medium text-gray-700'>Good with kids</span>         
          </div>
          </>
        ) : (
          <>
          <div className='flex '> 
            <img className='w-10 h-10' src="orange.png" alt="No" />
            <span className='text-xl mt-2 font-medium text-gray-700'> Not Good with kids</span>         
          </div>
          </>
        )}
      </h1>
</div>
</div>

 <h1 className='text-[28px] pl-[10%] font-extrabold text-gray-700 pt-4 pb-6'>Additional Adoption Info</h1>      
<p className='pl-[10%] lg:text-xl lg:font-medium text-gray-700 pb-10'>{pet.detail}</p>

<div className='box-content md:h-[450px] h-[600px] lg:h-[400px] w-[85%] mx-auto rounded-2xl bg-gray-300'>
<hr className='h-4 bg-cyan-800 rounded-t-xl'/>
<div className='text-base pl-[5%] font-bold pt-14 space-y-2 text-red-500 '>
  <h1>*Addo pet does not ask for money for any adoption listed on website.</h1>
  <h1>*Please do not make any payment for transportation, vaccination etc of pet in advance.</h1>
  <h1>*Only make any payment upon arrival of the pet at your location.</h1>
  <h1>*Please report to Addo pet Support Team if anyone asks for money before making any payment.</h1>
</div>
<div className='box-content ml-[5%] mt-10 w-[90%] md:w-[85%] lg:w-[85%] lg:h-[150px] md:h-[150px] h-[200px] border-gray-500 border-[1.5px] rounded-md'>
<div className='lg:flex md:flex hidden'>
<div className='inline-block'>
<h1 className='text-[28px] pl-[10%] font-bold text-gray-700 pt-4 pb-2'>Contact Info</h1>
<h1 className='text-xl pl-[10%] font-bold text-gray-700 pb-3 '>Name <span className='font-medium'>{pet.username}</span></h1>
<h1 className='text-xl pl-[10%] font-bold text-gray-700  '>Address<span className='pl-2 font-medium'>{pet.city},{pet.state}</span></h1>
</div>
<div className='lg:inline-block md:inline-block pt-16 pl-40 '>
<h1 className='text-xl font-bold  text-gray-700 pb-3 '>Mobile No. <span className='font-medium'>+{pet.mobileNumber}</span></h1>
</div>
</div>
<div className='lg:hidden md:hidden flex'>
<div className='inline-block'>
<h1 className='text-[28px] pl-[10%] font-bold text-gray-700 pt-4 pb-2'>Contact Info</h1>
<h1 className='text-xl pl-[10%] font-bold text-gray-700 pb-3 '>Name <span className='font-medium'>{pet.username}</span></h1>
<h1 className='text-xl pl-[10%] font-bold text-gray-700 pb-3 '>Address<span className='pl-2 font-medium'>{pet.city},{pet.state}</span></h1>
<h1 className='text-xl pl-[10%] font-bold  text-gray-700 flex  '>MobileNo. <span className='font-medium'>+{pet.mobileNumber}</span></h1>
</div>
</div>
</div>
</div>


      
      {/* <div>
      <h1>{pet.name}'s Details</h1>
      <img src={`http://localhost:5000/${pet.imageUrl}`} alt={pet.name} />
      <p>Age: {pet.age}</p>
      <p>City: {pet.city}</p>
      <p>State: {pet.state}</p>
      <p>Vaccinated: {pet.vaccinated ? 'Yes' : 'No'}</p>
      <p>Mobile Number: {pet.mobileNumber}</p>
     
    </div> */}


    </>
  );
};


export default PetDetails;
