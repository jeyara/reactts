import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Canonical from '../CanonicalComponet';

import dialogData from './dialogData'

function CustomDialog({title, message, canonicals}:dialogData) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Check Extracted Data
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{message}</h3>
          {canonicals.map(e => { const{ extractedValue, fieldName, friendlyName } = e;
          return (<div key={fieldName}><Canonical friendlyName={friendlyName} fieldName={fieldName} extractedValue= {extractedValue}></Canonical></div>) 
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomDialog;