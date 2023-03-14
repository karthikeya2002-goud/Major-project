import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Emailjs () {
  const [state, handleSubmit] = useForm('myyvronz')
  const [input, setInput] = useState({
    user: {
      name: '',
      email: '',
      phno: 0,
      ddmmyy: '',
      caseType: '',
      msg: ''
    }
  })
  const navigate = useNavigate()
  if (state.succeeded) {
    navigate('/home')
  }
  const updateInput = () => {
    setInput({
      ...input,
      user: {
        ...input.user,
        [e.target.name]: e.target.value
      }
    })
  }
  

  return (
    <Container className='mt-3 '>
      <Row>
        <Col xs md={{ span: 6, offset: 3 }}>
          <Card className='shadow-lg'>
            <Card.Header className='p-3' style={{ backgroundColor: '#212529' }}>
              {' '}<h4 className='text-center text-light'>Book Appointment</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    name='Name'
                    type='text'
                    placeholder='Name'
                    className='mb-2'
                    onChange={updateInput}
                  />
                  <Form.Control
                    name='email'
                    type='email'
                    placeholder='Enter email'
                    className='mb-2'
                    onChange={updateInput}
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                  <Form.Control
                    name='phone'
                    type='text'
                    placeholder='Phone number'
                    className='mb-2'
                    onChange={updateInput}
                  />
                  <Form.Control
                    name='day'
                    type='datetime-local'
                    placeholder='enter day'
                    className='mb-2'
                    onChange={updateInput}
                  />
                  <Form.Select
                    name='Case Type'
                    className='mb-2'
                    onChange={updateInput}
                  >
                    <option>Family Case</option>
                    <option>Crimial case</option>
                    <option>Land case</option>
                    <option>Land case</option>
                    <option>Land case</option>
                  </Form.Select>
                  <Form.Control
                    name='message'
                    as='textarea'
                    placeholder='Message'
                    className='mb-2'
                    onChange={updateInput}
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
  )
}
export default Emailjs
