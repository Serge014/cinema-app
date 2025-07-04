import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MovieFilter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <Form className="mb-4">
      <Row>
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Filtrer par titre"
            onChange={(e) => setFilterTitle(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            type="number"
            min="0"
            max="5"
            step="0.1"
            placeholder="Note min"
            onChange={(e) => setFilterRating(Number(e.target.value))}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default MovieFilter;
