import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './Admin.css'

const Admin = () => {
	const [user,setUser]=useState({
		name:"",email:"",password:""
	});
	
	let name ,value;
	const handleInputs =(e)=>{
	console.log(e);
	name= e.target.name;
	value = e.target.value;
	
	setUser({...user,[name]:value});
	
	}
	const PostData = async (e) =>{
	
	  e.preventDefault();
	  const {name,email,phone,work,password,cpassword} = user;
	  const res = await fetch('/register',{  //aiya kai errr=or che solve karvani che pachi
		method:"POST",
		headers:{
		  "content-Type" :"application/json"
	
		},
		body:JSON.stringify({
		  name,email,password
		})
	  });
	  const data = await res.json();
	  if(data.status === 422 ||!data){
		window.alert("invalid registeration")
	
	  }
	  else{
		window.alert("successfull registeration")
	}
	}
    useEffect(() => {
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");

        signUpButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });

        // Clean up event listeners when component unmounts
        return () => {
            signUpButton.removeEventListener("click", () => {
                container.classList.add("right-panel-active");
            });
            signInButton.removeEventListener("click", () => {
                container.classList.remove("right-panel-active");
            });
        };
    }, []);
 const cssStyles = `
 
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
box-sizing: border-box;
}

body {
background: #f6f5f7;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: "Montserrat", sans-serif;
height: 100vh;
margin: -20px 0 50px;
}

h1 {
font-weight: bold;
margin: 0;
}

h2 {
text-align: center;
}

p {
font-size: 14px;
font-weight: 100;
line-height: 20px;
letter-spacing: 0.5px;
margin: 20px 0 30px;
}

span {
font-size: 12px;
}

a {
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
}

button {
border-radius: 20px;
border: 1px solid #ff4b2b;
background-color: #ff4b2b;
color: #ffffff;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
}

button:active {
transform: scale(0.95);
}

button:focus {
outline: none;
}

button.ghost {
background-color: transparent;
border-color: #ffffff;
}

form {
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
}

input {
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
}

.container {
background-color: #fff;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 768px;
max-width: 100%;
min-height: 480px;
}

.form-container {
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
}

.sign-in-container {
left: 0;
width: 50%;
z-index: 2;
}

.container.right-panel-active .sign-in-container {
transform: translateX(100%);
}

.sign-up-container {
left: 0;
width: 50%;
opacity: 0;
z-index: 1;
}

.container.right-panel-active .sign-up-container {
transform: translateX(100%);
opacity: 1;
z-index: 5;
animation: show 0.6s;
}

@keyframes show {
0%,
49.99% {
opacity: 0;
z-index: 1;
}

50%,
100% {
opacity: 1;
z-index: 5;
}
}

.overlay-container {
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
}

.container.right-panel-active .overlay-container {
transform: translateX(-100%);
}

.overlay {
background: #ff416c;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(to right, #ff4b2b, #ff416c);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
transform: translateX(50%);
}

.overlay-panel {
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 40px;
text-align: center;
top: 0;
height: 100%;
width: 50%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
}

.overlay-left {
transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
transform: translateX(0);
}

.overlay-right {
right: 0;
transform: translateX(0);
}

.container.right-panel-active .overlay-right {
transform: translateX(20%);
}

.social-container {
margin: 20px 0;
}

.social-container a {
border: 1px solid #dddddd;
border-radius: 50%;
display: inline-flex;
justify-content: center;
align-items: center;
margin: 0 5px;
height: 40px;
width: 40px;
}

footer {
background-color: #222;
color: #fff;
font-size: 14px;
bottom: 0;
position: fixed;
left: 0;
right: 0;
text-align: center;
z-index: 999;
}

footer p {
margin: 10px 0;
}

footer i {
color: red;
}

footer a {
color: #3c97bf;
text-decoration: none;
}
`;
   
  return (
    
    <>
     <style>{cssStyles}</style>
   
    <div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<Link to="#" class="social"><i class="fab fa-facebook-f"></i></Link>
				<Link to="#" class="social"><i class="fab fa-google-plus-g"></i></Link>
				<Link to="#" class="social"><i class="fab fa-linkedin-in"></i></Link>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" name='name' value ={user.name} onChange={handleInputs}/>
			<input type="email" placeholder="Email" name='email' value ={user.email} onChange={handleInputs} />
			<input type="password" placeholder="Password" name='password' value ={user.password} onChange={handleInputs} />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<Link to="#" class="social"><i class="fab fa-facebook-f"></i></Link>
				<Link to="#" class="social"><i class="fab fa-google-plus-g"></i></Link>
				<Link to="#" class="social"><i class="fab fa-linkedin-in"></i></Link>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<Link to="#">Forgot your password?</Link>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
            <div className='z-50'>
        <img className='absolute  w-[50%] h-[100%]' src='https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D'/>
        <div class="overlay-panel overlay-left">
				<h1>Welcome Back Admin!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div></div>
            <div className='z-10'>
            <img className='absolute ml-[50%]  w-[50%] h-[100%]' src='https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D'/>
            
			<div class="overlay-panel overlay-right">
				<h1 className=''>Hello,Admin!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div></div>
            
		</div>
	</div>
</div>


    </>
  )
}

export default Admin