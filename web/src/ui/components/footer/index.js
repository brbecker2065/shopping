/* eslint-disable no-console */
import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import css from "./index.css";

class Footer extends Component {
  render() {
    return <footer styleName="footer">Here's our footer</footer>;
  }
}

export default CSSModules(Footer, css);
