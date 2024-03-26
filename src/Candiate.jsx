import React, { useEffect, useState,Fragment,useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Dialog, Transition } from '@headlessui/react';
import {useNavigate,Link} from 'react-router-dom'
// import { ExclamationIcon } from '@heroicons/react/outline';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import NavBar from './NavBar';
import Loader from './Loader';

const Candiate = ({pet}) => {
  const handleEditClick = () => {
    // Navigate to the edit form page with the pet's ID included in the URL
    navigate(`/Edit/${pet._id}`);
  };
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    const fetchUserPets = async () => {
      try {
        const mobileNumber = Cookies.get('mobileNumber');
    
        if (!mobileNumber) {
          // Handle error: Mobile number not found in cookies
          return;
        }
    
        const response = await axios.get(`https://server4-qtq0.onrender.com/api/pets/pets`, {
          headers: {
            'Content-Type': 'application/json',
            'mobileNumber': mobileNumber
          }
        });
        
        setPets(response.data);
      } catch (error) {
        console.error(error);
        // Handle error: Display an error message or redirect to an error page
      }
    };
    

    fetchUserPets();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://server4-qtq0.onrender.com/api/pets/${id}`);
      setPets(pets.filter(pet => pet._id !== id));
      setFilteredPets(filteredPets.filter(pet => pet._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();

  if (!pets) {
    return <Loader/>;
  }


  return (
    <>
    <NavBar /><br/><br/>
    <div>
<h1 className='text-MainGray text-[38px] mt-10 animate-bounce text-center font-bold'>Your Pets</h1><hr className='w-32 flex justify-center mx-auto h-0 animate-pulse border-2'/>
{pets.map(pet => (
  <div key={pet._id}>
    {/* <h2>{pet.name}</h2>
    <p>Age: {pet.age}</p> */}

    <div class=" overflow-scroll rounded-lg border border-gray-200 shadow-md m-5">
<table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
<thead class="bg-gray-50">
<tr>
  <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
  <th scope="col" class="px-6 py-4 font-medium text-gray-900">State</th>
  <th scope="col" class="px-6 py-4 font-medium text-gray-900">Role</th>
  <th scope="col" class="px-6 py-4 font-medium text-gray-900">Quality</th>
  <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
</tr>
</thead>
<tbody class="divide-y divide-gray-100 border-t border-gray-100">
<tr class="hover:bg-gray-50">
  <th class="inline-block gap-3 px-6 py-4 font-normal text-gray-900">
    <div class="relative h-10 w-10">
      <img
        class="h-full w-full rounded-full object-cover object-center"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
    </div>
    <div class="text-sm">
      <div class="font-medium text-gray-700">{pet.username}</div>
      <div class="text-gray-400">jobs@sailboatui.com</div>
    </div>
  </th>
  <td class="px-6 py-4">
    <span
      class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
      {pet.state},{pet.city}
    </span>
  </td>
  <td class="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-500">{pet.age}</td>
  <td class="px-6 py-4">
    <div class="flex gap-2">
      <span
        class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
      >
        Attractive
      </span>
      <span
        class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
      >
       Charming
      </span>
      <span
        class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
      >
        Loyal
      </span>
    </div>
  </td>
  <td class="px-6 py-4">
    <div class="flex justify-end gap-4">
    
      <a x-data="{ tooltip: 'Delete' }" onClick={() => setOpen(true)}>      
      {/* onClick={() => handleDelete(pet._id)} */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
          x-tooltip="tooltip"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </a>
<section>
      <Transition.Root show={open} as={Fragment}>
<Dialog
  as="div"
  className="fixed z-10 inset-0 overflow-y-auto"
  initialFocus={cancelButtonRef}
  onClose={setOpen}
>
  <div
    className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
   sm:p-0"
  >
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    </Transition.Child>

    {/* This element is to trick the browser into centering the modal contents. */}
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
      &#8203;
    </span>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div
        className="inline-block align-bottom bg-white rounded-lg
         text-left 
      overflow-hidden shadow-xl 
      transform transition-all 
      sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div
              className="mx-auto flex-shrink-0 flex items-center
             justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0
              sm:h-10 sm:w-10"
            >
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAY1BMVEX/////Wnn/ucX/TnD/Vnb/U3T/sb7/Sm7/8/X/+fr/mar/2d//fZT//f7/obH/1Nv/7O//prX/RWr/3+T/ztb/X33/do7/yNH/5Oj/ZoL/cIr/kKP/iZ3/vcf/hJj/PWX/M184ZFLvAAAD30lEQVR4nO2c3ZKiMBCFgyT8CYoIIorDvP9TTiLDurom3eVW5eSC72ru5hRCd5/uToT4kEJFTFTx6f/4mEPMFRcfvIu7pVxx6c27uH3DFdfsvYs78p/c0bu4mv9B1N7FZVxtUZT5FzdInjQ5+BeXn7jiTrl3cdWV+dKpa+VdnNgxo3C8869NJFxxCUDcjSvOf4IQoue+cz1AXMv9WluAuGPHE9f5z146fw08cYP/7KVTxIX1u8qL/wSh4aUIeUJoEyVPXAkRx8tf6goRx3MRAAdh2LBq4XQDEdfyxCFisI7CLIvTIGKwDnQTR9wECXMi530Q/utgQ9UxAp3sAHWwgZO/5AWjTXwxorD6AokrGC9d7L/FNMNxERAHYdhwxGESBM9FQByEYc8R57//NbOltUXRFiTuzHARwxkkrqYLdXlC2BtDThfqssSkVs0XLQ6VILSLoMVhHIRhR8YSheh/zdD5C5a9dIogXUSKShA6CpMuokHFYB3oaHGoMKcLddLiTKAi3UC/czhtghqUyAEoriQCncK0mGZGStwIFEcNSiADkgWq0QRqMc1QKQKYIGgXAXMQhiMVSjD9rxnKRcAchKF293LkBZdahcjcLkKWmM7hTO6OwmqE2RuDe6MJsMX0Nwe3OMwMYiFxi8M5CMPNLQ4xQX/QusVhBiQLZ7c4ZAym1q0AK1ZPuMVhtQmXtigCi3MlV9iAZMGVv6AOwuByEVAHYUgchXqKTRDaRTjaJQ3SQRhc42rQkPrB2fXOYROEThF2bVEEThCupVfEmuuLOPugRJ7Q4hwuAuwgNJXdRagC2NacsbsIsIMw2F0E2EEY7C4C7CAMvf1rRWcv57gaNyBZOFs3cjt09jIpwiYOniCEvVCHF+mGoMXZWnSgHdxnbPkL3P+asbkIuIMw2GYR0BnEwv47fss3cgaxkCWbtyQBhLmVlZWVlTCocg3cSL+jbpNiLMuxSFp0c+mFqh0HqX6Rw9gG9Pz6cnqqONVUhlAvGbIi/qcYVnERRFGyjd52XuMAPLXYdjYP0cHVbZW9V6LA6jLbc5ufHfS9I24agNwv8Iee2p9DRpSQdzZbek8Yt4JArWwiR65BH3NxL5X8PjrU7xr0ibmgzxoGfUqTc8sArL9JbabfnxxKHOcKBNAFCLwrEEAXINBp/y4OlfpZd72g1jfCPmsY9KG0ij4gBCyFqe8V9q0aiOO3uKO3d7bORxeDvWHQ+3OOLxb4pT7UTW/fOzkFoE2I/eXNT5teQpjLaeoifalPVFqE096sr4NamnT6j+EajjRD3e/KrtF05a4PS9qdPLuDXppbWfkPfgBDKC31YSeG5QAAAABJRU5ErkJggg==' className="h-6 w-6 text-red-600" aria-hidden="true" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                Delete PetForm
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to Delete PetForm? All of your data will be
                  permanently removed. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md
             border border-transparent shadow-sm px-4 py-2 bg-red-600
              text-base font-medium text-white hover:bg-red-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2
               focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
               onClick={() => handleDelete(pet._id)}
          >
            Delete
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center
            rounded-md border border-gray-300 shadow-sm px-4 py-2
             bg-white text-base font-medium text-gray-700
              hover:bg-gray-50 focus:outline-none focus:ring-2
               focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setOpen(false)}
            ref={cancelButtonRef}
          >
            Cancel
          </button>
        </div>
      </div>
    </Transition.Child>
  </div>
</Dialog>
</Transition.Root>
</section>

<a x-data="{ tooltip: 'Edite' }" >
<Link to={`/Edit/${pet._id}`}> 
<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
          x-tooltip="tooltip"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
        </Link>
      </a>
      {/* <section>  <Button onClick={handleOpen}>Sign In</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog></section> */}
    
    </div>
  </td>
</tr>

</tbody>
</table>
</div>
   
  </div>
))}
</div> 

  </>  
  );
};

export default Candiate;







