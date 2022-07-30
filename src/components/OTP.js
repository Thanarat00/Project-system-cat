import React, { useState} from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function OTP() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleShow}>
        บันทึก
      </Button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title><center>OTP</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
    
      <Form>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="Username"  />
      </Form.Group>
    </Form>
    
    
      




   
        
        </Modal.Body>

   
      </Modal>
    </>
  )
}
export default OTP