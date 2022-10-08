import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillEdit} from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Uploadimagess from './Uploadimagess';
    function Edit() {
                const [show, setShow] = useState(false);

                const handleClose = () => setShow(false);
                const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="success" onClick={handleShow}>
        <AiFillEdit/>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Uploadimagess/>
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
               <Form.Label>การฉีดวัคซีน :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
               <Form.Label>การทำหมัน :</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
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
        </Modal.Footer>
      </Modal>
    </>
      
    )
  }


export default Edit