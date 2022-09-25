import React, { useState}  from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

function OTP() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const otpInput = useRef(null);

  const clearText = () => {
      otpInput.current.clear();
  }

  const setText = () => {
      otpInput.current.setValue("1234");
  }


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
      
     
      
            <OTPTextInput ref={setText => (otpInput = setText)} /> 
            <Button title="clear" onClick={clearText}/> 
      

        </Modal.Body>

   
      </Modal>
    </>
  )
}

export default OTP ;