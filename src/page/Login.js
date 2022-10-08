import  React,{useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Register from './Register';
import Password from '../components/Password';




export default function Logon() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData ={
          username : data.get('username'),
          password : data.get('password'),
    
        }
            fetch('http://localhost:3333/login', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.status == 'ok'){ 
              alert('login success')
              localStorage.setItem('token', data.token);
              window.location = '/Call'
             
            }
            else{
              alert('login error')
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
   
  return (
        <>
           <Button variant="contained"  onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <Typography component="h1" variant="h5">
              Sign in
            </Typography></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                  <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
         
            </Box>
            <p className="forgot-password text-right">
          Dont have an account? <Register />
            </p>
           <Password />
            </Modal.Body>
   
      </Modal>
        
          
       </>
    
  );
}