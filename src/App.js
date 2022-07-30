
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import TheNavbar from "./components/TheNavbar";
import Adopt from "./page/Adopt";
import Announce from "./page/Announce";
import Call from "./page/Call";
import Home from "./page/Home";
import Rearing from "./page/Rearing";
import Step1 from "./page/Step1";
import Step2 from "./page/Step2";
import Update from "./page/Update";
import UpdateStatus from "./page/UpdateStatus ";







function App(){
  
  return(
    <div className="App"> 
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
    <Footer/>
    </div>
  )

}
export default App;
