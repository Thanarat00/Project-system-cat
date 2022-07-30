import React, { useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Upload from '../components/Upload';
import './Home.css';


  
  function Update() {

    const [setShow] = useState(false);

    const handleClose = () => setShow(false);


    return (
        <div class="p-3 mb-2 bg-dark  text-dark">
         <div className='Model'>
         <Upload />
          </div>


        <div className='announce'>
   
       <Row xs={2} md={2} className="g-4">
         {Array.from({ length: 2 }).map((_, idx) => (
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
                 <div className="d-grid gap-2">
                  <Button variant="dark" type="submit">
                    ดูวิดิโอ
                  </Button>
                  </div>
                <br></br>
                 <Modal.Footer>
                 <Button variant="primary" onClick={handleClose}>
              บันทึก
                 </Button>
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