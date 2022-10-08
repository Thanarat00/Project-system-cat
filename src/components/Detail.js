import React from "react";
import './Footer.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ImUndo2 } from "react-icons/im";
import Interested from "./Interested";
function Detail() {
  return (
   <div className="cathead"> 
   <Link to="/rearing">
      <Button className="link"  variant="dark" ><ImUndo2 /></Button>
      </Link>
    
   <div className="imagesss">
   
    <img src="https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg" width={600} height={350} />

   </div>
   <br></br>
   <ul className="p1">
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
    <li >sdfdsfdsfsdsdsdfdsfdsfdsfdssdfdsfdsfdsdsfdsfdsfsd</li>
   </ul>

    <Interested />
 
 
  </div>
   
   





  );
}

export default Detail