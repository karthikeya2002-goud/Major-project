import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap'
import {Link, useNavigate }from "react-router-dom"
import {auth }from "../../firebase-config"
import './Auth.css'
const Login = () => {
  let [state, setState] = useState({
    user: {
      email: '',
      password: ''
    }
  })
  const navigate = useNavigate();
  let updateInput = e => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  let register =async e => {
    e.preventDefault()

    if(state.user.email=="" ||  state.user.password==""){
      alert("Something is missing");
    }
    else{
     try{
      const user=  await signInWithEmailAndPassword(
        auth,
        state.user.email,
        state.user.password
        );
      console.log(user)
      // console.log(state.user)
      alert("login is successfull");
      navigate("/home");

     }catch(error){
      console.log(error)
     }
    }
  }
  return (
    <>

      <div className="login"></div>
      <Container className='mt-5 '>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card className='shadow-lg'>
              <Card.Header className='p-3 bg-black text-light'>
                {' '}<h4 className='text-center'>Login</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Control
                      name='email'
                      onChange={updateInput}
                      type='text'
                      placeholder='Enter Email'
                      className='mb-2'
                    />
                    
                    <Form.Control
                      name='password'
                      onChange={updateInput}
                      type='password'
                      placeholder='Enter password'
                      className='mb-2'
                    />
                    <div className='text-right'>
                      <Button
                        onClick={register}
                        type='submit'
                        className='w-100'
                      >
                        login
                      </Button>
                    </div>
                  </Form.Group>
                    <div className='text-right mt-2'>
                      <span>Need an account? </span>
                    <Link to="/signup">SignUp</Link>
                    </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
    </>
  )
}

export default Login
