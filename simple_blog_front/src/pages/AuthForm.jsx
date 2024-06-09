import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const AuthForm = ({ isRegistration }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegistration ? 'http://127.0.0.1:8000/Users/usersRegistrate/' : 'http://127.0.0.1:8000/Users/usersLogin/';
      //const response = await axios.post(url, formData);
      //console.log(response.data);
      // Здесь можно сохранить токен и данные пользователя
    } catch (error) {
      //console.error('Error:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {isRegistration && (
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>
      )}
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isRegistration ? 'Register' : 'Login'}
      </Button>
    </Form>
  );
};

export default AuthForm;