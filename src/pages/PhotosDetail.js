import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function PhotosDetail(props) {
  const item = props.location.state;

  return (
    <Container className="mt-5">
      <Row className="card-photo p-4">
        <Col md={4} className="">
          <img src={item.url} className="img-fluid" width={300} />
        </Col>
        <Col md={8}>
          <h3>{item.title}</h3>
          <p className="text-muted">{item.title}</p>
          <p></p>
        </Col>
      </Row>
    </Container>
  );
}
