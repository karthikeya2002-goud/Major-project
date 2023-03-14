import React, { useState } from 'react'
import {auth} from '../../firebase-config'
import {Link, useNavigate} from "react-router-dom"
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap'
import {createUserWithEmailAndPassword, signOut} from "firebase/auth"
import './Auth.css'



const SignUp = () => {

  const navigate = useNavigate();
  let [state, setState] = useState({
    user: {
      
      email: '',
      password: ''
    }
  })
  let updateInput = e => {
    setState({
      ...state,
      user: {
        ...state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  let register = async e => {
    e.preventDefault()
    if(state.user.email=="" ||  state.user.password==""){
      alert("Something is missing");
    }
    else{
     try{
      const user=  await createUserWithEmailAndPassword(
        auth,
        state.user.email,
        state.user.password
        );
      console.log(user)
      // console.log(state.user)
      alert("signup is successfull");
      navigate("/home")

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
                {' '}<h4 className='text-center'>SignUp</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    
                    <Form.Control
                      name='email'
                      onChange={updateInput}
                      type='email'
                      placeholder='Enter email'
                      className='mb-2'
                    />
                    <Form.Control
                      name='password'
                      onChange={updateInput}
                      type='password'
                      placeholder='Enter password'
                      className='mb-2'
                    />
                    <div className='text-right mb-2'>
                      <Button
                        onClick={register}
                        type='submit'
                        className='w-100'
                      >
                        SignUp
                      </Button>
                    </div>
                    <div className='text-right '>
                      <span>Already have an account </span>
                      <Link to="/login">Login</Link>
                    </div>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
    </>
  )
}

export default SignUp
