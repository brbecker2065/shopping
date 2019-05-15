import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { protectedRoute } from "../../../process/users/auth";
import css from "./index.css";
import * as axiosWrapper from "../../../utilities/axios/wrapper";


//`/items/4893`


class ItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemDetail: {}
    }
  }
  componentDidMount() {
    axiosWrapper.get(`/items/${this.props.match.params.id}`)
      .then(response => {
        console.log("response from item detail--------", response);
        this.setState({ itemDetail: response.data.item });
      })
      .catch(err => {
        console.log("something bad happened------", err)

      })
  }
  render() {
    const { itemDetail } = this.state

    if (!itemDetail.name)
      return <div>loading</div>
    return <div>Here is some item {itemDetail.name}</div>
  }
}
export default protectedRoute(CSSModules(ItemDetails, css));