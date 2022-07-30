import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Model2 from './Model2';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Uploadimagess from './Uploadimagess';


function TheModel() {
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
          <Modal.Title><Uploadimagess/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>สายพันธ์ :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
              <Form.Label>เพศ</Form.Label>
              <Form>
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
         </Form>
               <Form.Label>สี :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
              <Form.Label>ช่วงอายุ :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
              <Form.Label>นิสัย :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
              <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>การฉีดวัคซีน :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>เมื่อ :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>การทำหมัน :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>เมื่อ :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
          </Row>

               <Form.Label>สุขภาพแมว :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
              <Form.Label>ที่อยู่ :</Form.Label>
              <Form.Control as="textarea" rows={3} />

              <Form.Label>ระยะการติดตาม :</Form.Label>
              <Form.Select aria-label="Default select example">
              <option>--------------------------กรุณาเลือกระยะเวลา----------------------</option>
              <option value="1">สัปดาห์ละ 1 ครั้ง เป็นระยะเวลา 6 เดือน</option>
              <option value="2">เดือนละ  1 ครั้ง เป็นระยะเวลา 6 เดือน</option>
            </Form.Select>                                                         
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              
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
export default TheModel