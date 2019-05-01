import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import css from "./index.css";
import { protectedRoute } from "../../../process/users/auth";

class LandingPage extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    axiosWrapper

      .get("/items")
      .then(response => {
        console.log("about us response", response);
        this.setState({ items: response.data });
      })
      .catch(err => {
        this.setState({ error: false })
        console.log("Error fetching items")

      })
  }



  //   if(this.state.error) <div>oh no, I am on fire</div>
  // if items == " "

  // else if (
  // }
  render() {
    console.log(this.state)
    return this.state.items.map((item, i) => {


      <div className="landingContainer">this is our landing page</div>;



    })
    // return <div key={i}>{item.itemid}</div> 

  }
}




export default protectedRoute(CSSModules(LandingPage, css));
