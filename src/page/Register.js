import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Uploadimage from '../components/Uploadimage';
import OTP from '../components/OTP';
function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href='##' onClick={handleShow} >
        Register 
        </a>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Uploadimage />
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>ชื่อ</Form.Label>
          <Form.Control type="first-name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>นามสกุล</Form.Label>
          <Form.Control type="last-name"  />
        </Form.Group>
      </Row>
      <Form.Group controlId="date"className="mb-3">
          <Form.Label>วันเกิด</Form.Label>
          <Form.Control type="date" name="date" placeholder="Date of Birth" />
       </Form.Group>

       <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>อายุ</Form.Label>
          <Form.Control type="age" />
        </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>เพศ</Form.Label>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="ผู้"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="เมีย"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
          </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>อีเมล</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>เบอร์โทรศัพท์</Form.Label>
          <Form.Control type="tel"  />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>ที่อยู่ </Form.Label>
              <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>ลักษณะบ้าน</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>ที่ติดต่อเพิ่มเติม</Form.Label>
          <Form.Control type="tel"  />
        </Form.Group>
      </Row>
       
    </Form>
       </Modal.Body>
       <Modal.Footer>
        <OTP />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register