import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Modal } from 'react-bootstrap';
function  Cards({photos}) {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card style={{ width: '25rem' }} className="border border-info rounded-top rounded-end mt-3">
      <Card.Img variant="top" className="w-100" src={photos.urls.small}/>
      <Card.Body>
        <Button variant="primary" className="w-100 pt-2 pb-2" onClick={handleShow}>{photos.alt_description}</Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Color: {photos.color} <br/>
            Likes: {photos.likes}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default Cards;
