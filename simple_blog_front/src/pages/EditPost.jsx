import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditPostForm = ({ topic, postText, onSave }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    topic: topic,
    postText: postText
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Изменить пост
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Изменить пост</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              Сохранить
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditPostForm;