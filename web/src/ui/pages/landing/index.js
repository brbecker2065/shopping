import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class LandingPage extends Component {
  render() {
    return <div className="landingContainer">this is our landing page</div>;
  }

  componentDidMount() {
    axiosWrapper
      .get("/items")
      .then(response => {
        console.log("about us response", response);
        this.setState({ items: response.data.items });
      })
      .catch(err => {
        console.log("Error fetching items");
      })
  }
}
export default protectedRoute(CSSModules(LandingPage, css));
