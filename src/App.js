import {  HashRouter,Routes,Route } from 'react-router-dom'
import Pricecity from './Pricecity';
import Home from './Home';
import Service from './Service';
import Petgrooming from './Petgrooming';
import Consult from './Consult';
import Question from './Question';
function App() {
  return (
   <>
   
   <HashRouter>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/Service" element={<Service/>}/>
   <Route path="/Petgrooming" element={<Petgrooming/>}/>
   <Route path="/Pricecity" element={<Pricecity/>}/> 
   <Route path="/Consult" element={<Consult/>}/> 
   <Route path="/Question" element={<Question/>}/> 


   </Routes>

   
   </HashRouter>
   </>
  );
}

export default App;