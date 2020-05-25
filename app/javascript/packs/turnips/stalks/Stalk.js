import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { StalkRow } from "./stalk/StalkStyle";
import { Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

import { Button, Modal } from "react-bootstrap";

class Stalk extends PureComponent {
  static propTypes = {
    stalk: {
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      eta: PropTypes.string,
      entryFee: PropTypes.string,
      politeRequest: PropTypes.string,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      joined: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  joinLine = (event) => {
    const data = axios.get("/").then((response) => {
      console.log("joined Line");
      this.setState({ joined: !this.state.joined });
    });

    event.stopPropagation();
  };

  render() {
    return (
      <React.Fragment>
        <StalkRow active={this.state.show ? 1 : 0} onClick={this.handleShow}>
          <Col xs={6}>
            {this.props.stalk.name}

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
            <div className="d-flex flex-row-reverse">
              <JoinButton joinLine={this.joinLine} joined={this.state.joined} />
            </div>
          </Col>
        </StalkRow>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.stalk.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ShowItem
              name="Description:"
              value={this.props.stalk.description}
            />
            <ShowItem
              name="Polite Request:"
              value={this.props.stalk.politeRequest}
            />
            <ShowItem name="Entry Fee:" value={this.props.stalk.entryFee} />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="light" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Join line
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

const JoinButton = (props) => {
  if (props.joined) {
    return (
      <a className="btn btn-danger text-white" onClick={props.joinLine}>
        Leave line
      </a>
    );
  }
  return (
    <a className="btn btn-dark text-white" onClick={props.joinLine}>
      Join line
    </a>
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
