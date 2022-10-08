import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Delete from '../components/Delete';



export class Adopt extends Component {
  render() {
    return (
        
        
      
           <div className='announce'>


           <Row xs={4} md={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/cat-sm1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              
              <Modal.Footer>
                <Delete />
                 </Modal.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      

 
           



      
            </div>
           
            
            
      );
    }
}
export default Adopt