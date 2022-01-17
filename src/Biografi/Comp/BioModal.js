import React from "react";
import { Modal, Button } from "react-bootstrap";

function BioModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pop up not dynamic
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Judul NULL</h4>
        <p>nihil provident nobis quis eligendi itaque reprehenderit,</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BioModal;
