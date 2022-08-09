
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "./Homepage.css";
import TheNavbar from "./../components/TheNavbar";
import Adopt from "./Adopt";
import Announce from "./Announce";
import Call from "./Call";
import Home from "./Home";
import Rearing from "./Rearing";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Update from "./Update";
import UpdateStatus from "./UpdateStatus ";
import Footer from "./../components/Footer";







function Homepage(){
  
  return(
    <div className="App"> 
    <div className="bg ">
    <BrowserRouter>
      <TheNavbar />
      
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/announce" element={<Announce/>} />
         <Route path="/adopt" element={<Adopt/>} />
         <Route path="/updateStatus" element={<UpdateStatus />} />
         <Route path="/update" element={<Update />} />
         <Route path="/step1" element={<Step1 />} />
         <Route path="/step2" element={<Step2 />} />
         <Route path="/rearing" element={<Rearing />} />
         <Route path="/call" element={<Call/>}/>
      </Routes>
      
  </BrowserRouter>
  </div>
    <Footer/>
    </div>
  )

}
export default Homepage;
