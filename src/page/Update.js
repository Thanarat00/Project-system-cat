import React, { useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Upload from '../components/Upload';
import './Home.css';
import Video from '../components/Video';


  
  function Update() {

    const [setShow] = useState(false);

    const handleClose = () => setShow(false);


    return (
        <div class="text-dark">
         <div className='Model'>
         <Upload />
          </div>


        <div className='announce'>
   
       <Row xs={4} md={4} className="g-4">
         {Array.from({ length: 4 }).map((_, idx) => (
           <Col>
             <Card>
               <Card.Img variant="top" src="/images/cat-sm1.jpg" />
               <Card.Body>
                 <Card.Title>Card title</Card.Title>
                 <Card.Text>
                   <ul> 
                       <li>วัน/เดือน/ปี </li>
                       <li>เวลา </li>
                       <li>ราบละเอียด้พิ่มเติม</li>
                        <br></br>
                       
                        
                                        
                  </ul>
                 </Card.Text>
                  <Video />
                <br></br>
                 <Modal.Footer>
                 <Button variant="danger" onClick={handleClose}>
              ลบ
                 </Button>
          </Modal.Footer>

               </Card.Body>
              
             </Card>
           </Col>
         ))}
       </Row>

       
         
               </div>
               </div>
    )
  }


export default Update 