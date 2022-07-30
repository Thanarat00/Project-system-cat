import React, { useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Reset() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className="d-grid gap-2">
      <Button variant="primary" type="submit"  onClick={handleShow}>
        Submit 
      </Button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title><center>Forgot Password</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
    
      <Form>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="New"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="Confirm"  />
      </Form.Group>
    </Form>
    
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit">
        Submit 
      </Button>
      </div>

 
        
        </Modal.Body>

   
      </Modal>
    </>
  )
}
export default Reset