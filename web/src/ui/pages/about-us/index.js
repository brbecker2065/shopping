import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css"
import * as axiosWrapper from "../../../utilities/axios/wrapper";
import { Column, Row } from "simple-flexbox";
export default CSSModules(AboutUs, CSS)

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatorsList: []
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/creators")
      .then(response => {
        this.setState({
          creatorsList: response.data.creators
        });
        console.log("about us response", response.data.creators);
      })
      .catch(err => {
        console.log("Error fetching daily message", err);
      });
  }
  fetchCreatorDetails = (event) => {
    event.preventDefault();
    axiosWrapper.get("/creators/${userhandle}").then((response) => {
      console.log("spotlight response", response)
      this.setState({ creators: response.data.creator })
    }).catch((r) => {
      console.log()
    })
  }
  render() {
    console.log(this.state);

    return (
      <div styleName="container">
        <div styleName="left-side-menu">
          <ol>this.renderList()</ol>
          <div>{creator.firstName}</div>
          <div>{creator.email}</div> </div>
        <div styleName="right-side-menu">
          Main Stuff
        <ol>this.renderList()</ol>
          <div></div>
        </div>
      </div>


    )
  }
}