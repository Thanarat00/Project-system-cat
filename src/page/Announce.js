import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { AiFillDelete } from "react-icons/ai";
import Edit from '../components/Edit';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';


export class Announce extends Component {
  render() {
    return (
            <div class="p-3 mb-2 bg-dark  text-dark">
        
      
     <div className='announce'>

    <Row xs={2} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/cat-sm1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                <ul> 
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    <li>This is a longer card with supporting text </li>
                    
               
               </ul>
              </Card.Text>
              <Modal.Footer>
                <Edit />
                 <Button variant="danger"><AiFillDelete/></Button>
                 </Modal.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      
            </div>
            </div>
            
            
      );
    }
}
export default Announce