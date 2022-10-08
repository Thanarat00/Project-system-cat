
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
import Detail from "../components/Detail";
import Footer from "../components/Footer";
import Detailrearin from "../components/Detailrearin";






function Homepage(){
  
  return(
   <>
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
         <Route path="/detail" element={<Detail />} />
         <Route path="/detailrearing" element={<Detailrearin />}/>
      </Routes>
      
  </BrowserRouter>
   <Footer />
   </>
  )

}
export default Homepage;
