import React, { Component } from "react";
import Stalk from "./stalks/Stalk";

import { Container } from "react-bootstrap";

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
          politeRequest:
            "Hi! Please be patient. No response after 3min = Removed! Please be as fast as possible to keep the line moving. Multiple trips ARE allowed but get back in line!",
        },
        {
          id: 3,
          name: "Heavell",
          price: 642,
          entryFee:
            "5 NMTs or 5 stacks of 99k bells per trip please! (Bells: you can tip after you sell. NMTs: tip before entry.) *** MUST LEAVE THRU THE AIRPORT ***",
        },
        {
          id: 4,
          name: "Winkington",
          price: 500,
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
        <h1>Stalks </h1>

        {this.state.stalks.map((stalk) => (
          <Stalk {...stalk} key={stalk.id} />
        ))}
      </div>
    );
  }
}
