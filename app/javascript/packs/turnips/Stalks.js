import React, { Component } from "react";
import Stalk from "./stalks/Stalk";

import { Container, Row, Col } from "react-bootstrap";

export default class Stalks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stalks: [
        { id: 1, name: "Starlight", price: 105 },
        {
          id: 2,
          name: "Hogwarts",
          price: 23,
          eta: "2 minutes",
          politeRequest:
            "Hi! Please be patient. No response after 3min = Removed! Please be as fast as possible to keep the line moving. Multiple trips ARE allowed but get back in line!",
        },
        {
          id: 3,
          name: "Heavell",
          price: 642,
          eta: "3.2 hours",
          entryFee:
            "5 NMTs or 5 stacks of 99k bells per trip please! (Bells: you can tip after you sell. NMTs: tip before entry.) *** MUST LEAVE THRU THE AIRPORT ***",
        },
        {
          id: 4,
          name: "Winkington",
          price: 500,
          eta: "38 minutes",
          entryFee: "Entry is 5 NMT.",
          politeRequest:
            "Single trip for now, and please be fast so that everyone can have a chance to sell! Anything in the shop is up for grabs 💕😊",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Today's Stalk Prices</h2>

        <Row>
          <Col xs={6}>Name</Col>
          <Col xs={3}>Bells</Col>
          <Col xs={3}></Col>
        </Row>
        {this.state.stalks.map((stalk) => (
          <Stalk stalk={stalk} key={stalk.id} />
        ))}
      </div>
    );
  }
}
