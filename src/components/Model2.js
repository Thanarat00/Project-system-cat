import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Model2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Save
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><center>-ข้อตกลง-</center></Modal.Title>
        </Modal.Header>
        <Modal.Body> 

       <ul>
        <li> การประกาศต้องเป็นรูปภาพแมวเท่านั้นหากเป็นรูปที่ไม่เหมาะสมจะถูกระงับการใช้งาน จากเว็บไซต์ และ จะไม่สามารถประกาศหรือรับเลี้ยงแมวจากเว็บไซต์ได้อีก </li> 
        <li> หากแมวที่ประกาศถูกรับเลี้ยง ผู้ประกาศจะต้องถ่ายรูปแมวกับผู้รับเลี้ยงแมวมาลงในเว็บไซต์ ที่หน้าประกาศของฉัน และคลิกที่แมวถูกรับเลี้ยงไปแล้ว หากไม่เข้าไปดำเนินการแมวจะยังคงอยู่
        ในหมวดรอรับเลี้ยง และ จะมีการแจ้งเตือนการสนใจจากผู้ที่สนใจจะรับเลี้ยงอยู่ตลอด</li>
     
        </ul>
        <Form>
                {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="ยินยอม"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              </div>
               ))}
              </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button variant="primary" onClick={handleClose}>
            บันทึก 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model2 