import {  HashRouter,Routes,Route } from 'react-router-dom'
import Pricecity from './Pricecity';
import Home from './Home';
import Service from './Service';
import Petgrooming from './Petgrooming';
import Consult from './Consult';
import Question from './Question';
import Question2 from './Question2';
import Trainning from './Trainning';
import Adoptpet from './Adoptpet';
import Insurance from './Insurance';
import Question3 from './Question3';
import Relocation from './Relocation';
import About from './About';
import Blogs from './Blogs';
import State from './State';
import Loader2 from './Loader2';
import PetDetails from './Petdetails';
import PetForm from './PetForm';
import Dhairya from './Dhairya';
import NavBar from './NavBar';
function App() {
  return (
   <>



   
   <HashRouter>
   <Routes>  
  <Route path="/Dhairya" element={<Dhairya/>}/>
   <Route path="/" element={<Home/>} />
   <Route path="/Service" element={<Service/>}/>
   <Route path="/Petgrooming" element={<Petgrooming/>}/>
   <Route path="/Pricecity" element={<Pricecity/>}/> 
   <Route path="/Consult" element={<Consult/>}/> 
   <Route path="/Question" element={<Question/>}/> 
   <Route path="/Question2" element={<Question2/>}/> 
   <Route path="/Question3" element={<Question3/>}/> 
   <Route path="/Trainning" element={<Trainning/>}/> 
   <Route path="/Adoptpet" element={<Adoptpet/>}/> 
   <Route path="/Insurance" element={<Insurance/>}/> 
   <Route path="/Relocation" element={<Relocation/>}/> 
   <Route path="/Blogs" element={<Blogs/>}/> 
   <Route path="/About" element={<About/>}/> 
   <Route path="/State" element={<State/>}/> 
   <Route path="/Loader2" element={<Loader2/>}/>
   <Route path="/PetForm" element={<PetForm/>}/>
   <Route path="/Petdetails/:id" element={<PetDetails />} /> 



   </Routes>

   
   </HashRouter>
   </>
  );
}

export default App;