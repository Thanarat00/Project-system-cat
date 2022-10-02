import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import TheModel from '../components/TheModel';
import './Home.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export class Home extends Component {
  render() {
    return (
     
      <div className='Search'>
        <center><Searchbar /></center>
        
        <div className='Model'>
        <TheModel />
          </div>



     <div className='home'>
      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
      <Button>รายละเอียด</Button>
      </Link>
   
      </Card.Body>
    </Card>
      </div>

      <div className='cat-item'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/cat-sm1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/detail">
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

export default Home