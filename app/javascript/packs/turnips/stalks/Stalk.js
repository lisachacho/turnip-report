import React, { PureComponent } from "react";

import { StalkRow } from "./stalk/StalkStyle";
import { Col } from "react-bootstrap";

import { Button, Modal } from "react-bootstrap";

const Stalk = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const joinLine = (event) => {
    console.log("yes");
    event.stopPropagation();
  };

  return (
    <React.Fragment>
      <StalkRow active={show ? 1 : 0} onClick={handleShow}>
        <Col md={8}>{props.name}</Col>
        <Col md={2}>
          <span>{props.price} Bells</span>
        </Col>
        <Col md={2}>
          <div className="d-flex flex-row-reverse">
            <a className="btn btn-light" onClick={joinLine}>
              Join line
            </a>
          </div>
        </Col>
      </StalkRow>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowItem name="Description:" value={props.description} />
          <ShowItem name="Polite Request:" value={props.politeRequest} />
          <ShowItem name="Entry Fee:" value={props.entryFee} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Join line
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

const ShowItem = (props) => {
  if (props.value) {
    return (
      <p>
        <strong>{props.name}</strong>
        <br />
        {props.value}
      </p>
    );
  }
  return <React.Fragment />;
};

export default Stalk;
