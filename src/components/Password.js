import React, { useState} from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Reset from './Reset';

function Password() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a  href='##' onClick={handleShow}>
        Forgot password?
      </a>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title><center>Forgot Password</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
    
      <Form>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="Username"  />
      </Form.Group>
    </Form>
    
     <Reset/>
      

 



   
        
        </Modal.Body>

   
      </Modal>
    </>
  )
}
export default Password