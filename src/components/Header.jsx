import React,{useState} from 'react';
import { Container,Navbar,Nav } from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../firebase-config'
import { signOut} from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState();
  const logout = async ()=>{
    await signOut(auth);
    navigate('/login');
  }
  return (
    <>
    <Navbar collapseonselect="true" expand="sm" bg="dark" variant="dark" fixed='top'>
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll'/>
        <Container>
          
            <Navbar.Collapse id="navbarScroll">
                <Navbar.Brand  >Advocate and Court Services</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link eventKey='1' as={Link} to="/home"><span className="text-light fw-bolder">Home</span></Nav.Link>
                    <Nav.Link eventKey='2' as={Link} to="/courtservices"><span className="text-light">Court Services</span></Nav.Link>
                    <Nav.Link eventKey='2' as={Link} to="/details"><span className="text-light">LawyerDetails</span></Nav.Link>
                    <Nav.Link eventKey='4' as={Link} to="/login"><span className="text-light"><button onClick={logout} style={{background:"transparent",color:"white"}}>logout</button></span></Nav.Link>
                    
                   
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header