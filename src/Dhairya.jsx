import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState,useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import Typewriter from 'typewriter-effect'
import Footer from './Footer'
import NavBar from './NavBar'

const Dhairya = () => {
 
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
//delet karisa kai cookie login logout save mate che
  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    if (isLoggedIn) {
      setUser("someUser"); // Replace "someUser" with your actual user data
    }
  }, []);

  useEffect(() => {
    if (user) {
      Cookies.set("isLoggedIn", true, { expires:2 }); // Set the cookie for 1 day
    } else {
      Cookies.remove("isLoggedIn");
    }
  }, [user]);

  // Function to handle logout
  const handleLogout = () => {
    // Clear the phone number from cookies
    Cookies.remove('mobileNumber');
    console.log('successfully logout')
    setUser(null); // Reset user state or perform any additional logout steps if required
    setAuthenticated(false);
  };
  

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        Cookies.set('mobileNumber',ph);
        // history(`/home?mobile=${ph}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid OTP try again!")
        setLoading(false);
      });
  }
  return (
    //lg and md mate che
    <>
    <NavBar />
    <br/><br/><br/>
    <div className=' bg-blue-gray-100 h-full w-full'>
      <div className=' flex justify-center lg:gap-44 md:gap-20   '>
        <div className='lg:block md:block hidden  '>
         <img src='https://i.pinimg.com/originals/5e/40/20/5e4020c8ccf8b980c23be800ad8b8da4.gif' className='w-80 rounded-md  mt-[35%] h-96 mx-auto' />
        </div>
        <div className="">
       <section className="bg-emerald-400 w-80 flex items-center justify-center ">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <>
          <h2 className="text-center mt-44 animate-pulse text-gray-600 font-medium text-2xl">
            👍Login Success
          </h2>
          <button onClick={handleLogout} >
          <a  class="relative inline-flex items-center justify-start px-16 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-orange-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span  class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Logout</span>
</a></button>
          {/* <button onClick={handleLogout}>Logout</button> */}
          </>
        ) : (
          <div className=" lg:w-80 md:80 w-[360px] lg:h-[500px] h-[550px]  flex flex-col   bg-green-500 gap-4 rounded-lg  p-4">
            <img src="https://media.tenor.com/skLObiUvWIwAAAAi/animal-puppy.gif" className=" w-28 mx-auto h-28 lg:h-20 md:h-20"/>
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              Welcome to <br /> Addo pet
            </h1>
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                  <Toaster
  position="top-center"
  reverseOrder={false}
/>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
      </section>
      
      <div className="text-3xl mt-10 text-orange-600 text-center ">
        <span className="text-3xl text-gray-600">For access more feature</span><br/><span className="text-gray-600">Login to</span>
    <Typewriter 
           options={{loop:true}}
           onInit={(typewriter)=>{
           typewriter.typeString("Addo pet ").pauseFor(1000).deleteAll().start();
           }}
         /></div>
        </div>
      </div>
    </div>
<Footer />

  </>
  )
}

export default Dhairya;