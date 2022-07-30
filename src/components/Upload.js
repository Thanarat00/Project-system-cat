import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Model2 from './Model2';
import Uploadedit from './Uploadedit'




function Upload() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        กรอกข้อมูล
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Uploadedit />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รายละเพิ่มเติม :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
                    
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Model2 />

        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Upload