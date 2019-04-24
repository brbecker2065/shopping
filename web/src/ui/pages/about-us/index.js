import React, { Component } from "react";
import CSSModules from "react-css-modules";
import css from "./index.css"
import * as axiosWrapper from "../../../utilities/axios/wrapper";
//import Spotlight from "./spotlight";


class AboutUsPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      creators: [],
      creator: {},
      updatedCreator: {}
    };
  }
  componentDidMount() {
    axiosWrapper
      .get("/creators")
      .then(response => {
        this.setState({
          creators: response.data.creators
        });
        console.log("about us response", response.data.creators);
      })
      .catch(err => {
        console.log("Error fetching daily message", err);
      });
  }
  /*fetchCreatorDetails = (event) => {
    event.preventDefault();
    axiosWrapper.get("/creators/${userhandle}").then((response) => {
      console.log("spotlight response", response)
      this.setState({ creator: response.data.creator })
        .catch((r) => {
          console.log()

        })
    })


  }*/

  render() {
    console.log(this.state);
    return (
      <div styleName="container">
        <aside styleName="left-side-menu"></aside>
        <ol>
          {this.state.creators.map((creator, index) => {
            return <li> key={index}{creator.firstName}</li>;
          })}
          <div>{this.state.creators.email}</div>
        </ol>
        <main styleName="right-side-menu">
          Main Stuff</main>
        <ol></ol>
      </div>

    )
  }
}

export default CSSModules(AboutUsPage, css)