import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player'


function Video() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="d-grid gap-2">
      <Button variant="dark" onClick={handleShow}>
        ดูวีดิโอ
      </Button>
      </div>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><ReactPlayer url='https://www.youtube.com/watch?v=dkE2rbmAB2Q' height='460px' width='770px'/></Modal.Body>
      </Modal>
    </>
  );
}

export default Video