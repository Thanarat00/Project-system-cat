import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Interested from './Interested';
 
    function Detail() {
                const [show, setShow] = useState(false);

                const handleClose = () => setShow(false);
                const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow} size='xl'>
          รายละเอียด 
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/cat-sm1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    
                </Carousel.Caption>
                <Card.Text>
                <br></br>
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

            </Carousel.Item>






                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/1.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    

                    </Carousel.Caption>
                    <Card.Text>
                      <br></br>
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

                </Carousel.Item>


                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/2.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                    
                        </Carousel.Caption>

                        <Card.Text>
                        <br></br>
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

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                    
                        </Carousel.Caption>

                        <Card.Text>
                        <br></br>
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

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/4.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                    
                        </Carousel.Caption>

                        <Card.Text>
                        <br></br>
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

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/5.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                    
                        </Carousel.Caption>
                        <Card.Text>
                        <br></br>
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

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/6.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                    
                        </Carousel.Caption>
                        <Card.Text>
                        <br></br>
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

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/8.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                    
                        </Carousel.Caption>
                        <Card.Text>
                        <br></br>
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

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/9.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                    
                        </Carousel.Caption>
                        <Card.Text>
                        <br></br>
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

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/images/10.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        
                    
                        </Carousel.Caption>
                        <Card.Text>
                        <br></br>
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


                    </Carousel.Item>
                    
    </Carousel>

    
          </Modal.Body>
          <Modal.Footer>
           <Interested />
        
  
          </Modal.Footer>
        </Modal>
      </>
    )
  }


export default Detail