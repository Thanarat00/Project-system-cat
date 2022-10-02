import React, { useState}  from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useRef } from 'react';
import Footer from './Footer.css'
function OTP() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const otpInput = useRef(null);

  const clearText = () => {
      otpInput.current.clear();
  }
  const [OTP, setOTP] = useState("10");
  const renderButton = (buttonProps) => {
    return (
      <button {...buttonProps}>
        {buttonProps.remainingTime !== 0 ? `กรุณารอสักครู่ ${buttonProps.remainingTime} sec` : "ส่งซ้ำ"}
      </button>
    );
  };
  const renderTime = () => React.Fragment;

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
      
        <div className='otp'>
      
        <OTPInput value={OTP} onChange={setOTP} autoFocus={true} OTPLength={6} otpType="number" disabled={false}  /><br></br>
        <ResendOTP renderButton={renderButton} renderTime={renderTime} />
        <br></br><br></br>
       
        <button className='buttonn'>
         ยินยัน OTP
      </button>
   
       </div>

        </Modal.Body>

   
      </Modal>
    </>
  )
}

export default OTP ;