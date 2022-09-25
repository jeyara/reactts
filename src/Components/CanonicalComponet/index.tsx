import React, { useState } from 'react';
import { Badge, Form } from 'react-bootstrap';
import canonical from '../../SharedModel/canonical';

function Canonical({extractedValue, fieldName, friendlyName}:canonical) {

  return (
    <>
        <Form.Group className="mb-3" controlId="{fieldName}">
        <Form.Label>{fieldName}</Form.Label>
        <Form.Control type="text" value={extractedValue} readOnly />
        </Form.Group>
    </>
  );
}

export default Canonical;