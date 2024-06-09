import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const CreatePost = () => {
  const [form, setForm] = useState({
    topic: '',
    postText: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно отправить данные формы на сервер или обработать их как необходимо
    console.log('Форма отправлена:', form);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTopic">
          <Form.Label>Тема</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите тему"
            name="topic"
            value={form.topic}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPostText">
          <Form.Label>Текст поста</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Введите текст поста"
            name="postText"
            value={form.postText}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Отправить
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
