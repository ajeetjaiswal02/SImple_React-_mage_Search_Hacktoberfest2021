import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
function  Cards({photos}) {
  return (
    <Card style={{ width: '25rem' }} className="border border-info rounded-top rounded-end mt-3">
      <Card.Img variant="top" className="w-100" src={photos.urls.small}/>
      <Card.Body>
        <Button variant="primary" className="w-100 pt-2 pb-2">{photos.alt_description}</Button>
      </Card.Body>
    </Card>
  );
}
{/*For DIx* */}
export default Cards;