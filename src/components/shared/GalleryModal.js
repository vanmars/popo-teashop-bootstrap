import React from 'react';
import { Modal } from 'react-bootstrap';
import MyCarousel from './Carousel';

const GalleryModal = (props) => {
  const { show, hide, images, title } = props;
  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={hide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyCarousel 
            images={images}
          />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default GalleryModal;