import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

import { Circle } from "./navigation/NavigationStyle";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

export default class Navigation extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div className="d-flex justify-content-center">
        <CircleLink path="/" icon={faTh} />
        <CircleLink path="/add" icon={faPlus} />
        <CircleLink path="/profile" icon={faUser} />
      </div>
    );
  }
}

const CircleLink = (props) => (
  <Link to={props.path}>
    <Circle>
      <FontAwesomeIcon icon={props.icon} size="2x" />
    </Circle>
  </Link>
);
