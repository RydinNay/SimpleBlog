import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTopic, setSearchTopic] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (topic = '') => {
    const url = `http://127.0.0.1:8000/BlogPosts/postsRead/`;
    try {
    axios.get(url/* {params:{"topic": ""}}*/).then((response) => {
        setPosts(response.data);
        console.log(response.data)
      })      //const response = await fetch(url);
      //const data = await response.json();
      //setPosts(data);
    } catch (error) {
      console.error('Ошибка при загрузке постов:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPosts(searchTopic);
  };
  if (!posts.data) return null;

  return (
    <Container>
      <Button variant="secondary" onClick={() => (fetchPosts())} className="m-3">
            {"RefreshTable"}
      </Button>

      <Row>
        {posts.data.map((post) => (
          <Col md={4} key={post.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.topic}</Card.Title>
                <Card.Text>{post.postText}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;