import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";
import { Link } from 'react-router-dom'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/items")
      .then(response => {
        console.log("what did we get from the -------backend", response);
        this.setState({ items: response.data.items });
      })
      .catch(err => {
        this.setState({ error: err })
        console.log("Error fetching items", err)

      });
  }
  render() {

    // const { items } = this.state;
    return (
      <div>
        {this.state.items.map((item, index) => (

          <div key={index}>landingPage
          <Link to={`item/${item.itemHandle}`}>{item.name}</Link>
          </div>

        ))}
      </div>
    )
  }
}





export default protectedRoute(CSSModules(LandingPage, css));
