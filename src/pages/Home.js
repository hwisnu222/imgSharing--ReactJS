import React, { useState, useContext } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import Masonry from "react-masonry-css";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { FavoriteContext } from "../context/userContext";

export default function Home() {
  const [favorite, dispatch] = useContext(FavoriteContext);
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);

  const favorites = favorite.favorites;

  // create base url
  const API_BASE = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/albums/1",
  });

  //   get data image
  useQuery("photos", async () => {
    const response = await API_BASE.get(`/photos`);
    setImages(response?.data);
  });

  const favoriteHandle = (item) => {
    dispatch({ type: "SAVE", payload: [...favorites, item] });
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Container className="mt-5">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((item) => (
          <div className="card-item">
            <img
              src={item.url}
              className="img-fluid"
              alt={`images-${item.id}`}
              loading="lazy"
            />
            <div className="overlay">
              <p className="text-overlay">{item.title}</p>
              <div className="action-image">
                <span
                  className="favorite mr-2"
                  onClick={() => {
                    favoriteHandle(item);
                    setModal(!modal);
                  }}
                >
                  Favorite
                </span>
                <Link to={{ pathname: "photos", state: item }}>
                  <Button
                    variant="danger"
                    className="button-danger shadow-none"
                  >
                    Detail
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

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
