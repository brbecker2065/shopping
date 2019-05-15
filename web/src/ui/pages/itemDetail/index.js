import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { protectedRoute } from "../../../process/users/auth";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";


//`/items/4893`

class itemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemDetails: {}
    }
  }
  componentDidMount() {
    axiosWrapper.get(`/items/${this.props.match.params.id}`)
      .then(response => {
        console.log("response from item detail", response);
        this.setState({ itemDetails: respose.data.items });
      })
      .catch(err => {
        console.log("something bad happened", err)

      })
  }
  render() {
    const { itemDetails } = this.state
    console.log("here", this.props);
    if (!itemDetails.name)
      return <div>loading</div>
    return <div>Here is some item {itemDetails.name}</div>
    //{this.props.match.params.id}
    // <div>itemdetails</div>
  }
}
export default protectedRoute(CSSModules(itemDetails, css));