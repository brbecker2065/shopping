import React, { Component } from "react";
import CSSModules from "react-css-modules";

import Spotlight from "./spotlight";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

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
        console.log("about us response", response);
        this.setState({ creators: response.data.creators });
      })
      .catch(err => {
        console.log("Error fetching daily message");
      });
  }
  fetchCreatorDetails = (event, userhandle) => {
    event.preventDefault();
    axiosWrapper
      .get(`/creators/${userhandle}`)
      .then(response => {
        console.log("spotligh response", response);
        this.setState({
          creator: response.data.creator,
          updatedCreator: response.data.creator
        });
      })
      .catch(err => {
        console.log("Error fetching daily message");
      });
  };

  updateCreator = event => {
    event.preventDefault();
    this.setState({
      updatedCreator: {
        ...this.state.updatedCreator,
        firstName: event.target.value
      }
    });
  };

  submitCreatorUpdate = (event, userhandle) => {
    event.preventDefault();
    axiosWrapper
      .put(`/creators/${userhandle}`, { creator: this.state.updatedCreator })
      .then(response => {
        console.log("updated creator response", response);
        const { creator } = response.data;
        this.setState({ creator: creator, updateCreator: creator });
      })
      .catch(err => {
        console.log("Error fetching daily message");
      });
  };

  render() {
    return (
      <div styleName="container">
        <aside styleName="left-side-menu">
          <ol>
            {this.state.creators.map((creator, index) => {
              return (
                <li
                  key={index}
                  onClick={event =>
                    this.fetchCreatorDetails(event, creator.userHandle)
                  }
                >
                  {creator.firstName}
                </li>
              );
            })}
          </ol>
        </aside>
        <div styleName="right-main">
          <Spotlight
            creator={this.state.creator}
            updatedCreator={this.state.updatedCreator}
            updateCreator={this.updateCreator}
            submitCreatorUpdate={this.submitCreatorUpdate}
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(AboutUsPage, css);