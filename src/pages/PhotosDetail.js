import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FavoriteContext } from "../context/userContext";

export default function PhotosDetail(props) {
  const item = props.location.state;
  const [favorite, dispatch] = useContext(FavoriteContext);

  const favorites = favorite.favorites;

  const favoriteHandle = (item) => {
    dispatch({ type: "SAVE", payload: [...favorites, item] });
  };

  return (
    <Container className="mt-5">
      <Row className="card-photo p-4">
        <Col md={4} className="">
          <img
            src={item.url}
            className="img-fluid"
            alt={`images-${item.id}`}
            width={300}
          />
        </Col>
        <Col md={8}>
          <h3>{item.title}</h3>
          <p className="text-muted">{item.title}</p>
          <Button
            variant="danger"
            className="button-danger-lg"
            onClick={() => {
              alert("saving");
              favoriteHandle(item);
            }}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
