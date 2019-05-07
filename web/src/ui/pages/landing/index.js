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
  renderItems = () => {
    return this.state.items.map((stuff, i) => {
      return <div className="landingContainer" key={i}>{stuff.item}</div>;
    })
  }
  render() {
    return (<div>landing
      {this.renderItems()}
      <Link to="/itemDetail">itemdetails</Link>
    </div>
    )
    // return <div key={i}>{item.itemid}</div> 
  }
}




export default protectedRoute(CSSModules(LandingPage, css));
