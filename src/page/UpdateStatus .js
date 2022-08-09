import React, { useState} from 'react'
import Card from 'react-bootstrap/Card';
import './Home.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UploadVideo from '../components/UploadVideo';



  
  function UpdateStatus() {
    const [setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
   
        
      
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
                       <li> 
                       <Form>
                          {['checkbox'].map((type) => (
                                  <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                      inline
                                      label="รับเลี้ยงแมว"
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    
                                  </div>
                                ))}
                                </Form>
                                </li>
                
                  <UploadVideo/>
                  </ul>
                 </Card.Text>
                 
                 <Modal.Footer>
                 <Button variant="primary" onClick={handleClose}>
              บันทึก
                 </Button>
                 <Button variant="danger" onClick={handleClose}>
              ยกเลิก
                 </Button>
          </Modal.Footer>

               </Card.Body>
              
             </Card>
           </Col>
         ))}
       </Row>

       <Row xs={2} md={2} className="g-4">
         {Array.from({ length: 2 }).map((_, idx) => (
           <Col>
             <Card>
               <Card.Img variant="top" src="/images/cat-sm1.jpg" />
               <Card.Body>
                 <Card.Title>Card title</Card.Title>
                 <Card.Text>
                   <ul> 
                       <li> 
                       <Form>
                          {['checkbox'].map((type) => (
                                  <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                      inline
                                      label="แมวที่ถูกรับเลี้ยงจากระบบ"
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    
                                  </div>
                                ))}
                                </Form>
                                </li>

                                <li> 
                       <Form>
                          {['checkbox'].map((type) => (
                                  <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                      inline
                                      label="แมวทีุ่ถูกรับเลี้ยงจากทางอื่น"
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    
                                  </div>
                                ))}
                                </Form>
                                </li>
                                
                                
                                <UploadVideo/>
             
                  </ul>
                 </Card.Text>
                 
                 <Modal.Footer>
                 <Button variant="primary" onClick={handleClose}>
              บันทึก
                 </Button>
                 <Button variant="danger" onClick={handleClose}>
              ยกเลิก
                 </Button>
          </Modal.Footer>

               </Card.Body>
              
             </Card>
           </Col>
         ))}
       </Row>
 
         
               </div>
               
    )
  }


export default UpdateStatus 