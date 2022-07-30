import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Register from './Register';
import { BsFillPersonFill} from "react-icons/bs";
import Password from '../components/Password';



function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BsFillPersonFill/>LOGIN
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title><center>Sing In</center></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
    
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
    </Form>
    <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Remember Password" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" type="submit">
        Submit 
      </Button>
      </div>
      <p className="forgot-password text-right">
          Dont have an account? <Register/>
        </p>
        <Password />
 



   
        
        </Modal.Body>

   
      </Modal>
    </>
  );
}

export default Login