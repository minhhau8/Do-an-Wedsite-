import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowAlert(true);
  };

  return (
    <div className='contact-page'>
      <header>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Liên Hệ</h1>
          <p className='text-center w-75 mb-5'>
           Hãy liên hệ ngay để được nhận các ưu đãi!
          </p>
        </div>
      </header>

      <div className='container my-5 d-flex justify-content-center'>
        <Form id='contact-form' onSubmit={handleSubmit}>
          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='First name' />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Last name' />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='Your address' />
          </Form.Group>

          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>Ngành học</Form.Label>
              <Form.Select defaultValue="An ninh mạng">
                <option>An ninh mạng</option>
                <option>Quản trị mạng</option>
                <option>Phát triển phần mềm</option>
                <option>Thiết kế đồ họa</option>
                <option>Thương mại điện tử</option>
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="danger btn-lg" type='submit'>Submit</Button>
        </Form>
      </div>

      {showAlert && (
        <Alert variant='success' onClose={() => setShowAlert(false)} dismissible>
          Gửi thành công!
        </Alert>
      )}
    </div>
  );
}

export default Contact;
