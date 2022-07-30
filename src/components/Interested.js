
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Interested() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        สนใจ
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><center>ข้อตกลง</center></Modal.Title>
        </Modal.Header>
        <Modal.Body> 

          <ul>
            <li>เมื่อีับเลี้ยงไปแล้วต้องทำการมีการอัพเดทลงบนเว็บไซต์ในหน้าแมวที่รับเลี้ยงตามข้อตกลงเป็นการบันทึกวิดิโอแบบเรียลไทม์</li>
            <li>หากไม่ทำตามข้อตกลงทางเว็บไซต์จะขอละเมิดลิขสิทธิ์ในการเอารูปถ่ายของผู้รับเลี้ยงแมวขึ้นบนเว็บไซต์ในหน้าบุคคลที่ไม่สามารถรับเลี้ยงแมวได้และผู้ใช้งานจะถูกระงับการใช้งาน</li>
            <li>พ.ร.บ คุ้มครองสัตว์</li>
            <li>มาตรา 20 ห้ามมิให้ผู้ใดกระทำการอันใดเป็นการทารุณกรรมสัตว์โดยไม่มีเหตุอันสมควร ผู้ใดฝาฝืนมีโทษจำคุกไม่เกิน 2 ปี ปรับไม่เกิน 40,000 บาท หรือทั้งจำทั้งปรับ</li>
            <li>มาตรา 22 ต้องจัดให้สัตว์มีที่อยู่ น้ำ อาหาร เหมาะสมตามชนิด ลักษณะ สภาพ และอายุของสัตว์</li>
            <li>มาตรา 23 ห้ามปล่อย ละทิ้งสัตว์ ให้พ้นความดูแลของตนเองยกเว้นโอนกรรมสิทธิ์ให้ผู้อื่นดูแล</li>
            <li>มาตรา 24 การขนส่ง ขนย้ายสัตว์ต้องทำให้เหมาะตามชนิด ลักษณะ สภาพ และอายุของสัตว์</li>
            <li>มาตรา 25 ผู้ใดเป็นเจ้าของสัตว์ต้องดูแล ไม่ปล่อยทิ้ง หากผู้ที่เป็นเจ้าของสัตว์ ปล่อย ละทิ้ง ไม่ดูแลสัตว์ โดยไม่มีเหตุผลอันสมควร ซึ่งจะมีโทษปรับไม่เกิน 40,000 บาท</li>
            <li></li>
            
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
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Interested 