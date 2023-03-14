import React from 'react'
import Header from "../Header"
import { useForm, ValidationError } from '@formspree/react';
import {Form,Container,Row,Col,Card,Button} from "react-bootstrap"
import Footer from "../Footer"
import "./CSS/contact.css"
const Contact = () => {
  const [state, handleSubmit] = useForm("myyvronz");
  if (state.succeeded) {
      return <p>Thanks for submitting!</p>;
  }
  return (
    <>
      <Header/>
      <div className=''></div>
      <div className="content container  ">
        
        
        <Container className='mt-3 '>
      <Row>
        <Col xs md={{ span: 6, offset: 3 }}>
          <Card className='shadow-lg'>
            <Card.Header className='p-3' style={{ backgroundColor: '#212529' }}>
              {' '}<h4 className='text-center text-light'>Contact Us</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  
                  <Form.Control
                    name='email'
                    type='email'
                    placeholder='Enter email'
                    className='mb-2'
                    
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                  
                  
                  
                  <Form.Control
                    name='message'
                    as='textarea'
                    placeholder='Message'
                    className='mb-2'
                    
                  />{' '}
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                  <div className='text-right'>
                    <Button
                      type='submit'
                      className='w-100 mt-3'
                      disabled={state.submitting}
                      
                    >
                      submit
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </div>
      <Footer/>
    </>

  )
}

export default Contact