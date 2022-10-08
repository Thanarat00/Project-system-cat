import React, { Component } from 'react'
import Searchbar from '../components/Searchbar'
import './Home.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export class Rearing extends Component {
  render() {
    return (
       <div>
        <div className='Search'>
        <center><Searchbar /></center>
        </div>

     <div className='home'>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      <Link to="/detailrearing">
      <Button>รายละเอียด</Button>
      </Link>
      </Card.Body>
    </Card>
      </div>

     

      </div>
      </div>


      
    )
  }
}

export default Rearing