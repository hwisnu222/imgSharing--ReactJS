import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FavoriteContext } from "../context/userContext";

export default function PhotosDetail(props) {
  const item = props.location.state;
  const [favorite, dispatch] = useContext(FavoriteContext);
  const [modal, setModal] = useState(false);

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
            className="button-danger-lg mt-4"
            onClick={() => {
              favoriteHandle(item);
              setModal(!modal);
            }}
          >
            Save
          </Button>
        </Col>
      </Row>

      {/* modal favorite */}
      <Modal
        show={modal}
        onHide={setModal}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-container"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title id="contained-modal-title-vcenter">Berhasil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Gambar berhasil di simpan</p>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            className="button-danger-lg shadow-none"
            variant="danger"
            onClick={() => {
              setModal(!modal);
            }}
          >
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
