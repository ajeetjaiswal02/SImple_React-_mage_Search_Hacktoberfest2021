import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
function  Cards({photos}) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={photos.urls.small}/>
      <Card.Body>
        <Button variant="primary">{photos.alt_description}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;