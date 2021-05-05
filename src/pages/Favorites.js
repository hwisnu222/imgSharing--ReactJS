import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FavoriteContext } from "../context/userContext";

export default function Favorites() {
  const [state, dispatch] = useContext(FavoriteContext);
  let stateStore = [...state.favorites];

  const DeleteFavorite = (index) => {
    stateStore.splice(index, 1);
    dispatch({ type: "SAVE", payload: [...stateStore] });
  };

  return (
    <Container className="mt-5">
      {state.favorites.map((item, index) => (
        <div className="card-list mb-4 p-4">
          <Row>
            <Col md={2}>
              <img src={item.thumbnailUrl} alt="images" className="img-fluid" />
            </Col>
            <Col md={10}>
              <h3>{item.title}</h3>
              <p className="text-muted">{item.title}</p>
              <Button
                className="button-danger-lg shadow-none"
                variant="danger"
                onClick={() => {
                  DeleteFavorite(index);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}
