import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { StalkRow } from "./stalk/StalkStyle";
import { Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

import { Button, Form, Modal } from "react-bootstrap";

class Stalk extends PureComponent {
  static propTypes = {
    stalk: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      eta: PropTypes.string,
      entryFee: PropTypes.string,
      politeRequest: PropTypes.string,
    }),
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      wantToJoin: false,
      joined: false,
    };
  }

  handleClose = () => this.setState({ show: false, wantToJoin: false });
  handleShow = (event) => {
    this.setState({ show: true });
    event.stopPropagation();
  };

  // Do something with ActionCable here
  joinLine = (event) => {
    event.stopPropagation();

    // I don't currently want to join so let me in!
    if(!this.state.wantToJoin) {
      this.setState({ wantToJoin: true });
      return;
    }

    // We've joined the queue but now we want to leave.
    if(this.state.joined) {
      this.setState({ joined: false, wantToJoin: false,show: false});
    }

    const data = axios.get("/").then((response) => {
      this.setState({ joined: true, show: false});
    });

  };

  render() {
    return (
      <React.Fragment>
        <StalkRow active={this.state.show ? 1 : 0} onClick={this.handleShow}>
          <Col xs={6}>
            <a href="#" onClick={this.handleShow}>
              {this.props.stalk.name}
            </a>

            {this.props.stalk.entryFee && (
              <FontAwesomeIcon icon={faCoins} className="ml-2" />
            )}
          </Col>
          <Col xs={3}>
            <span>
              {this.props.stalk.price}

              {/* Hidden only on xs	 */}
              <span className="d-none d-sm-inline"> Bells</span>
            </span>
          </Col>
          <Col xs={3}>
            <span>{this.props.stalk.eta}</span>
          </Col>
        </StalkRow>
        <StalkModal
          {...this.props}
          handleClose={this.handleClose}
          show={this.state.show}
          joinLine={this.joinLine}
          joined={this.state.joined}
          wantToJoin={this.state.wantToJoin}
        />
      </React.Fragment>
    );
  }
}

const StalkModal = (props) => {
  // The normal requirements
  let body = (
    <React.Fragment>
      <ItemDisplay name="Description:" value={props.stalk.description} />
      <ItemDisplay name="Polite Request:" value={props.stalk.politeRequest} />
      <ItemDisplay name="Entry Fee:" value={props.stalk.entryFee} />
    </React.Fragment>
  );

  // If they want to join we prompt them to enter some information before hand
  if (props.wantToJoin) {
    body = <JoinPrompt />;
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.stalk.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>
        <Button variant="light" onClick={props.handleClose}>
          Close
        </Button>

        <JoinButton
          joinLine={props.joinLine}
          joined={props.joined}
          wantToJoin={props.wantToJoin}
        />
      </Modal.Footer>
    </Modal>
  );
};

const JoinPrompt = (props) => (
  <React.Fragment>
    <Form.Group controlId="name">
      <Form.Label className="font-weight-bold">In-Game Name</Form.Label>
      <Form.Control
        autoComplete="off"
        type="text"
        placeholder="Your character name"
      />
    </Form.Group>

    <Form.Group>
      <div> 🤖 i'm not a robot prompt goes here </div>
    </Form.Group>
  </React.Fragment>
);

const JoinButton = (props) => {
  // Jump in de line
  let button = (
    <Button variant="primary" onClick={props.joinLine}>
      Join line
    </Button>
  );

  // Okay I believe you
  if (props.wantToJoin) {
    button = (
      <Button variant="primary" onClick={props.joinLine}>
        Join this line!
      </Button>
    );
  }

  // Shake, shake, shake, senora
  if (props.joined) {
    button = (
      <a className="btn btn-danger text-white" onClick={props.joinLine}>
        Leave line
      </a>
    );
  }

  return button;
};

const ItemDisplay = (props) => {
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
