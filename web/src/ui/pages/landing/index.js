import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";
import { Link } from 'react-router-dom'

class LandingPage extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    axiosWrapper
      .get("/items")
      .then(response => {
        console.log("about us response", response);
        this.setState({ items: response.data.items });
      })
      .catch(err => {
        this.setState({ error: err })
        console.log("Error fetching items")

      })
  }
  render() {

    return this.state.items.map((item_handle, i) => {
      return <div> key={i}{items.item}</div>
    })


  }
}





export default protectedRoute(CSSModules(LandingPage, css));
