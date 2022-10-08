import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import Login from '../page/Login';
import Notify from './Notify';




function TheNavbar() {

  return (
   <div >
    <Navbar bg="dark" variant='{dark}' expand="lg" className='text-light'>
      <Container>
        <Navbar.Brand className='text-light'><h3>HAPPY CAT HOUSE SYSTEM</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='text-light' >หน้าแรก</Nav.Link>
            <Nav.Link as={Link} to="/announce" className='text-light'>ประกาศของฉัน</Nav.Link>
            <Nav.Link as={Link} to="/adopt" className='text-light' >แมวที่ประสงค์รับเลี้ยง</Nav.Link>
            <Nav.Link as={Link} to="/update" className='text-light'>อัพเดทน้องแมว</Nav.Link>
            <Nav.Link as={Link} to="/updateStatus" className='text-light' >อัพเดทสถานะน้องแมว</Nav.Link>
           
            <NavDropdown  title={
                                <span className="text-light">ขั้นตอน</span>
                               }
                                 id="basic-nav-dropdown" menuVariant="dark"> 

              <NavDropdown.Item as={Link} to="/step1">ขั้นตอนการรับเลี้ยง</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/step2">ขั้นตอนการประกาศ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/rearing" className='text-light'>วิธีการเลี้ยงแมว</Nav.Link>
            <Nav.Link as={Link} to="/Call" className='text-light' >ติดต่อเรา</Nav.Link>
     
          </Nav>
        </Navbar.Collapse>
      </Container>

        <Nav className="me-auto">
          <Navbar.Collapse className="justify-content-end">
            <Notify /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Login/>
             <NavDropdown title = "User Name" >
              
             </NavDropdown>
           
        </Navbar.Collapse>

                        
   


        </Nav>
       
    </Navbar>
 
    
        </div>
  
  );
}

export default TheNavbar