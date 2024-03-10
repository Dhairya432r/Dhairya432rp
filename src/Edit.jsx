import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import NavBar from './NavBar';

const Edit = () => {
  const { id } = useParams();
  const [age, setAge] = useState('');
  const [gender,setGender] =useState('');
  const [vaccinated,setVaccinated] = useState('');
  const [spray, setSpray] = useState('');
  const [shot, setShot] = useState('');
  const [dog, setDog] = useState('');
  const [cat, setCat] = useState('');
  const [kid, setKid] = useState('');
  const [pet, setPet] = useState({
    name: '',
    age: '',
    vaccinated: '',
    image: null,
    selectedState: '',
    selectedCity: '',
    gender: '',
    spray: '',
    shot: '',
    dog: '',
    cat: '',
    kid: '',
    detail: '',
    username: '',
  });

  useEffect(() => {
    // Fetch pet data based on ID
    const fetchPetData = async () => {
      try {
        const response = await axios.get(`https://server4-qtq0.onrender.com/api/pets/${id}`);
        setPet(response.data);
         // Assuming response.data is an object containing pet data
      } catch (error) {
        console.error('Error fetching pet data:', error);
      }
    };

    fetchPetData();
  }, [id]);

  useEffect(() => {
    // Set the initial age when the component mounts
    setAge(pet.age);
    setGender(pet.gender);
    setVaccinated(pet.vaccinated);
    setSpray(pet.spray)
    setShot(pet.shot)
    setDog(pet.dog)
    setCat(pet.cat)
    setKid(pet.kid)
    setImage(pet.image)
  }, [pet.age,pet.gender,pet.vaccinated,pet.spray,pet.shot,pet.dog,pet.cat,pet.kid,pet.image]);
  // useEffect(() => {
  //   // Set the initial age when the component mounts
  //   setGender(pet.gender);
  // }, [pet.gender]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update pet data
      await axios.put(`https://server4-qtq0.onrender.com/api/pets/${id}`, pet);
      toast.success('Pet information updated successfully!');
    } catch (error) {
      console.error('Error updating pet data:', error);
      toast.error('Failed to update pet information. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: value,
    }));
  };

  const puppy = "puppy";
  const Adolescence = "Adolescence";
  const Adult = "Adulthood";
  const senior = "Senior";

  const handleImage = (selectedAge) => {
    setPet((prevPet) => ({
      ...prevPet,
      age: selectedAge,
    }));
  
  };
  const handleYesClick1 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      gender: 'Male',
    }));
  };
  
  const handleNoClick1 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      gender: 'Female',
    }));
  };
  const handleYesClick = () => {
    setPet((prevPet) => ({
      ...prevPet,
      vaccinated: 'true',
    }));
  };
  
  const handleNoClick = () => {
    setPet((prevPet) => ({
      ...prevPet,
      vaccinated: 'false',
    }));
  };
  const handleYesClick2 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      spray: 'Yes',
    }));
  };
  
  const handleNoClick2 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      spray: 'No',
    }));
  };
  const handleYesClick3 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      shot: 'Yes',
    }));
  };
  
  const handleNoClick3 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      shot: 'No',
    }));
  };

  const handleYesClick4 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      dog: 'Yes',
    }));
  };
  
  const handleNoClick4 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      dog: 'No',
    }));
  };

  const handleYesClick5 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      cat: 'Yes',
    }));
  };
  
  const handleNoClick5 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      cat: 'No',
    }));
  };

  const handleYesClick6 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      kid: 'Yes',
    }));
  };
  
  const handleNoClick6 = () => {
    setPet((prevPet) => ({
      ...prevPet,
      kid: 'No',
    }));
  };
  
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const states = ['Gujarat', 'Maharashtra'];
  const cities = {
    Gujarat: ['Vadodara'],
    Maharashtra: ['Mumbai']
  };

  return (
    <>
     <NavBar />
    <br/><br/><br/><br/>
          <h1 className='lg:text-4xl text-3xl text-center  text-gray-600 font-bold'>Edit Your details</h1>
      <p className='lg:text-xl text-2xl lg:pt-14 pt-6 pl-[10%] text-gray-600 font-semibold'>Pet Details</p><hr className='ml-[10%] border-2 w-[80%]' />
      <form onSubmit={handleFormSubmit}>
        {/* Input fields for editing pet information */}
        <label className='pl-[10%] lg:text-xs  text-lg  font-bold text-gray-800 '>Pet's Name?</label>
        <input type='text' name="name" value={pet.name} onChange={handleInputChange} placeholder='Please enter your pet name' className='bg-gray-50 border-[2.5px] mt-1 ml-[10%] border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[70%]  lg:w-[40%] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500' required />
        {/* <input type="text" name="name" value={pet.name} onChange={handleInputChange} /> */}
        {/* Other input fields */}
        <div>
      <label className='pl-[10%] lg:text-xs text-lg font-bold text-gray-800'>Age of your Pet?</label>
      <div className='lg:space-x-6 lg:flex md:flex hidden md:space-x-3 justify-center'>
        <button type='button' onClick={() => handleImage(puppy)} className={`lg:h-32 lg:w-64 md:w-44 md:h-36 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${age === puppy ? 'border-orange-500' : 'border-gray-600'}`}>
          <img className='h-20 w-20 mx-auto rounded-full' src='./assets/images/pet2.jpg' alt='Puppy' />
          <h1 className='font-bold'>Puppy</h1>
          <h2 className='lg:text-xs text-lg font-normal'>Up to 6 months</h2>
        </button>
        <button type='button' onClick={() => handleImage(Adolescence)} className={`lg:h-32 lg:w-64 md:w-44 md:h-36 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${age === Adolescence ? 'border-orange-500' : 'border-gray-600'}`}>
          <img className='h-20 w-20 mx-auto rounded-full' src='./assets/images/pet3.jpg' alt='Adolescence' />
          <h1 className='font-bold'>Adolescence</h1>
          <h2 className='lg:text-xs text-lg font-normal'>6-8 months</h2>
        </button>
        <button type='button' onClick={() => handleImage(Adult)} className={`lg:h-32 lg:w-64 md:w-44 md:h-36 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${age === Adult ? 'border-orange-500' : 'border-gray-600'}`}>
          <img className='h-20 w-20 mx-auto rounded-full' src='./assets/images/pet1.jpg' alt='Adulthood' />
          <h1 className='font-bold'>Adulthood</h1>
          <h2 className='lg:text-xs text-lg font-normal'>1.5-3 years</h2>
        </button>
        <button type='button' onClick={() => handleImage(senior)} className={`lg:h-32 lg:w-64 md:w-44 md:h-36 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${age === senior ? 'border-orange-500' : 'border-gray-600'}`}>
          <img className='h-20 w-20 mx-auto rounded-full' src='./assets/images/pet4.jpg' alt='Senior' />
          <h1 className='font-bold'>Senior</h1>
          <h2 className='lg:text-xs text-lg font-normal'>3 years or more</h2>
        </button>
      </div>
    </div>
        <div className='  lg:hidden md:hidden '>
          <div className=' flex space-x-3 justify-center '>
            <button type='button' onClick={() => handleImage(puppy)} className={`h-[136px] mb-5 w-40 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${age === puppy ? 'border-orange-500' : 'border-gray-600'}`} ><img className='h-20 w-20 mx-auto rounded-full' src='./assets/images/pet2.jpg' /><h1 className='font-bold'>Puppy<br /></h1><h2 className='lg:text-xs text-lg font-normal'>Upto 6 months</h2></button>
            <button type='button'  onClick={() => handleImage(Adolescence)} className={`h-[136px] mb-5 w-40 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${age === Adolescence ? 'border-orange-500' : 'border-gray-600'}`}><img className='h-20 w-20 mx-auto rounded-full' src='./assets/images/pet3.jpg' /><h1 className='font-bold'>Adolescence<br /></h1><h2 className='lg:text-xs text-lg font-normal'>6-8 months</h2></button>
          </div>
          <div className='flex space-x-3 justify-center'>
            <button type='button'  onClick={() => handleImage(Adult)} className={`h-[136px] mb-5 w-40 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${age === Adult ? 'border-orange-500' : 'border-gray-600'}`}><img className='h-20 w-20 mx-auto rounded-full' src='./assets/images/pet1.jpg' /><h1 className='font-bold'>Adulthood<br /></h1><h2 className='lg:text-xs text-lg font-normal'>1.5-3 years</h2></button>
            <button type='button'  onClick={() => handleImage(senior)} className={`h-[136px] mb-5 w-40 border-2 transition duration-1000 rounded-md hover:border-orange-500 ${age === senior ? 'border-orange-500' : 'border-gray-600'}`}><img className='h-20 w-20 mx-auto rounded-full' src='./assets/images/pet4.jpg' /><h1 className='font-bold'>Senior<br /></h1><h2 className='lg:text-xs text-lg font-normal'>3 years or more</h2></button>
          </div>
        </div>
        <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
        Pet Gender?
      </label>
      <div className="space-x-3 mb-4 pl-[10%]">
        <button
          type="button"
          className={`w-[45%] lg:w-[25%] h-14  lg:h-10  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${gender === 'Male' ? 'border-orange-500' : 'border-gray-600'}`}
          onClick={ ()=> handleYesClick1('male')}
        >
          Male
        </button>
        <button
          type="button"
          className={`lg:w-[25%] w-[45%] h-14 lg:h-10  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${gender === 'Female' ? 'border-orange-500' : 'border-gray-600'}`}
          onClick={()=> handleNoClick1('Female')}
        >
          Female
        </button>
      </div>
      <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
          Pet Vaccinated? </label>
        <div className=" space-x-3 mb-4  pl-[10%]">
          <button
            type="button"
            className={`w-[45%] lg:w-[25%] h-14  lg:h-10  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${vaccinated === 'true' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={ ()=> handleYesClick('true')}
          >
            Yes,pet is vaccinated
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[45%] h-14 lg:h-10  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${vaccinated === 'false' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={ ()=> handleNoClick('false')}
          >
            No,pet is vaccinated
          </button>

        </div>
    
         <div>
          <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
            Pet Sprayed? </label>
            <div className=" space-x-3 mb-4  pl-[10%]">
          <button
            type="button"
            className={`w-[45%] lg:w-[25%] h-14  lg:h-10  transition duration-1000 hover:border-orange-600  rounded-md border-2 ${spray === 'Yes' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={ () => handleYesClick2('Yes')}
          >
            Yes,pet is sprayed
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[45%] h-14 lg:h-10  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${spray === 'No' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={ () => handleNoClick2('No')}
          >
            No,pet is sprayed
          </button>

        </div>
          <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
            Pet shots upto date? </label>
            <div className=" space-x-3 mb-4  pl-[10%]">
          <button
            type="button"
            className={` lg:w-[25%] w-[45%]  lg:h-10 h-14 transition duration-1000 hover:border-orange-600  rounded-md border-2 ${shot === 'Yes' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={ () => handleYesClick3('Yes')}
          >
            Yes,pet is shots
          </button>
          <button
            type="button"
            className={`lg:w-[25%] w-[45%] h-14 lg:h-10  transition duration-1000 hover:border-orange-600 rounded-md border-2 ${shot === 'No' ? 'border-orange-500' : 'border-gray-600'}`}
            onClick={ () => handleNoClick3('No')}
          >
            No,pet is shots
          </button>

        </div>
          <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
            Pet is good with dogs? </label>
          <div className=" space-x-3 mb-4 pl-[10%]">
            <button
              type="button"
              className={` lg:w-[25%] w-[45%]  lg:h-10 h-14 transition duration-1000 hover:border-orange-600  rounded-md border-2 ${dog === 'Yes' ? 'border-orange-500' : 'border-gray-600'}`}
              onClick={ () => handleYesClick4('Yes')}
            >
              Yes, Good with dogs
            </button>
            <button
              type="button"
              className={` lg:w-[25%] w-[45%]  lg:h-10 h-14 transition duration-1000 hover:border-orange-600 rounded-md border-2 ${dog === 'No' ? 'border-orange-500' : 'border-gray-600'}`}
              onClick={ () => handleNoClick4('No')}
            >
              No, Good with dogs
            </button>
          </div>
          <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
            Pet is good with cats? </label>
          <div className=" space-x-3 mb-4 pl-[10%]">
            <button
              type="button"
              className={` lg:w-[25%] w-[45%]  lg:h-10 h-14 transition duration-1000 hover:border-orange-600  rounded-md border-2 ${cat === 'Yes' ? 'border-orange-500' : 'border-gray-600'}`}
              onClick={ () => handleYesClick5('Yes')}
            >
              Yes, Good with cats
            </button>
            <button
              type="button"
              className={` lg:w-[25%] w-[45%]  lg:h-10 h-14 transition duration-1000 hover:border-orange-600 rounded-md border-2 ${cat === 'No' ? 'border-orange-500' : 'border-gray-600'}`}
              onClick={ () => handleNoClick5('No')}
            >
              No, Good with cats
            </button>
          </div>
          <label className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>
            Pet is good with kids? </label>
          <div className=" space-x-3 mb-4 pl-[10%]">
            <button
              type="button"
              className={` lg:w-[25%] w-[45%]  lg:h-10 h-14 transition duration-1000 hover:border-orange-600  rounded-md border-2 ${kid === 'Yes' ? 'border-orange-500' : 'border-gray-600'}`}
              onClick={() => handleYesClick6('Yes')}
            >
              Yes,Good with kids
            </button>
            <button
              type="button"
              className={` lg:w-[25%] w-[45%]  lg:h-10 h-14 transition duration-1000 hover:border-orange-600 rounded-md border-2 ${kid === 'No' ? 'border-orange-500' : 'border-gray-600'}`}
              onClick={() => handleNoClick6('No')}
            >
              No, Good with kids
            </button>
          </div>
        </div> 
        <label className="block">
        <span className="sr-only">Choose pet photo</span>
        <input
          type="file"
          onChange={() =>handleImageChange('')}
          className="block w-full text-sm pl-[10%] mt-2 text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-blue-600"
        />
      </label>
      <div className='mb-8'>
          <h1 className='pl-[10%]  lg:text-xs text-lg font-bold text-gray-800'>Additional Details about the Pet?</h1>
          <textarea name='detail' value={pet.detail} onChange={handleInputChange} placeholder='Please enter your Pet details in two lines' className='bg-gray-50 border-[2.5px] placeholder:text-xl h-24 mt-1 ml-[10%] border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 transition duration-1000 w-[70%]  lg:w-[1000px] p-2.5 dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'></textarea>
        </div>
        {/* personal details */}
        
        <label className='lg:text-xl text-2xl lg:pt-14 pt-6 pl-[10%]  text-gray-600 font-semibold'>Personal Details</label><hr className='ml-[10%] border-2 mb-8 w-[80%]' />
        
        <div className='lg:flex md:flex inline justify-center gap-6'>
          <div className='lg:flex lg:pl-0 pl-[10%]'>
            <div className=' lg:text-xl md:text-lg font-bold text-gray-800 '>Owner Name:</div><input name='username' value={pet.username} onChange={handleInputChange} className=' w-[80%] lg:w-[340px] h-14 lg:h-10 rounded-md text-2xl lg:text-2xl bg-gray-400  border-[2.5px]  border-gray-300  text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 transition duration-1000   dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500'></input>
          </div>
          <div className='lg:flex lg:pl-0 pl-[10%]'>
          <h1 className='lg:text-xl md:text-lg font-bold text-gray-800'>Mobile No.</h1><div class="box-content  w-[80%] lg:w-[340px] h-14 lg:h-10 rounded-md text-2xl bg-gray-400  border-[2.5px]  border-gray-300  text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 transition duration-1000   dark:bg-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 block dark:focus:border-blue-500 hover:border-orange-500 "><p className='flex justify-center mx-auto mt-3 lg:mt-1 text-2xl'>+{pet.mobileNumber}</p></div><br/>
          </div>
          </div>
          <div className='flex space-x-10 justify-center'>
          <label className='block font-bold text-2xl text-gray-700'>
            State:
            <select
              className='mt-2 block lg:w-60 w-44 text-base bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300'
              name='state'
              value={pet.state}
              onChange={handleInputChange}
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </label>
          {/* City dropdown */}
          <label className='block font-bold text-2xl text-gray-700'>
            City:
            <select
              className='mt-2 block lg:w-60 w-44 text-base bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300'
              name='city'
              value={pet.city}
              onChange={handleInputChange}
            >
              <option value="">Select City</option>
              {pet.state && cities[pet.state] && cities[pet.state].map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </label>
        </div>
        <div className='pl-[10%] pt-10'>
          <h1 className='text-[22px] font-semibold text-gray-600'>Rehome your pet stress-free</h1>
          <div className='text-[15px] text-gray-600 font-semibold pt-5'>
            <h2 className='pb-4'>Rehoming or donating your pet should be easy and stress-free both for you and your pet.</h2>
            <h2 className='pb-4'><span className='text-orange-500'>Addo pet</span>, India's first pet care market place has taken the initiative to remove your pet where your pet will be home again. We have created a reliable, simple & free initiative to help you rehome your pet from your loving family directly to another family.</h2>
            <h2 className='pb-4'>Here are some tips for putting your pet for adoption in a loving new home and family -</h2>
            <h2 className='pb-4'>Make your pet look more attractive to potential new owners. Make sure your pet is vaccinated and checked by a veterinarian. Also, make sure your pet is spayed and neutered. This will make your cat or dog more likely to be chosen by a new owner.</h2>
            <h2 className='pb-4'>Be transparent/clear with the new owner. Share all the details about your pet's personality and how they get along with cats, dogs, and people. Share your dog's or cat's favorite food, game, things, and any medical or behavior issues your pet is experiencing so that potential new adopters will have the information they need to determine if your cat or dog would be a good fit for their home and family.</h2>
          </div>

          <div>
            <h1 className='text-[22px] font-semibold text-gray-600'>Why rehome your pet?</h1>
            <ul className='pl-[2%]'>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold pt-5 '><span className='text-orange-500'>Addo pet</span> provides adopters to meet and learn about cats or dogs from the owners who know them best.</li>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold  '>Loving fur baby families keep their cats or dogs out of the shelter homes. By rehoming a cat or dog, they can find them loving & caring new family.</li>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold  '>Shelter homes can focus only on limited resources for your pet.</li>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold  '>Your cat or dog goes directly from one loving home to another potential owner. <span className='text-orange-500'>Addo pet</span> provides a stress-free pet adoption platform theryby reducing the chance of illness or discomfort.</li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h1 className='text-[22px] font-semibold text-gray-600'>How does pet rehoming work?</h1>
            <ul className='pl-[2%]'>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold pt-5 '>Fill in your personal and pet details in the form</li>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold  '>Provide every detail of your pet including diet, medication, or existing illness if any.</li>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold  '>Upload clear and attractive pictures of your pet for potential owners to see and explore.</li>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold  '>Submit the details to <span className='text-orange-500'>Addo pet</span>. Your pet details would be seen by potentials owners.</li>
              <li className='list-disc marker:text-gray-600 text-[15px] text-gray-600 font-semibold  '>Potential owners would contact you for more details if required and talk to them to see if they are a great fill for your fur baby.</li>
              <li></li>
            </ul>
          </div>
          <p className='text-[15px] pt-10 font-semibold text-gray-600'><span className='text-orange-500'>Addo pet</span> is India's first pet care marketplace to provide an online pet adoption platform and community where people who want to adopt a dog or cat connect with<br className='lg:block hidden' /> people who need to rehome a dog or cat. The best possible way to care about your beloved pet is to keep them out of the shelter homes and rehoming your dog or <br className='lg:block hidden' />cat to a loving family. Rehoming a dog or cat is the best kind of pet adoption, in every possible way.</p>
        </div>
        <div className='flex justify-center mx-auto pt-10'>
        <button type='submit' className='bg-orange-500 flex justify-center items-center text-2xl font-semibold lg:w-[20%] text-white font-adelia lg:h-10 h-14 rounded-xl w-[63%]'>Update <img src='https://dm6g3jbka53hp.cloudfront.net/static-images/tpn-next-grooming-funnel.png' className='w-5 h-5' /> </button>        </div>
          <Toaster toastOptions={{ duration: 4000 }} />
          <Toaster
  position="top-center"
  reverseOrder={false}
/>

        {/* <button type="submit">Update</button> */}
      </form>
      <Toaster />
      <div className=''>
        <div className='dog-container'>
          <img className='dog-gif h-44 ' src='https://media.tenor.com/oQBNNsF1jA8AAAAi/darklajka-wsl.gif' alt='Running dog' />
          <img className='w-full h-40' src='./assets/images/logo192.png' />
        </div>
        <div className='dog-line '></div>
      </div>
    </>
  );
};

export default Edit;
