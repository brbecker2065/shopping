import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { protectedRoute } from "../../../process/users/auth";
import css from "./index.css";
//import InputQuantity from "./custom-comp"
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
  // render() {


  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A quantity was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { itemDetail } = this.state;


    if (!itemDetail.name) {
      return <div>loading</div>
    }
    else {
      return (
        <div>
          <div styleName="itemDetailContainer">
            Here is some item
            <div>{itemDetail.name}</div>
            <div>{itemDetail.price}</div>
            {itemDetail.description}
          </div>
          <label styleName="itemDetailLeft">Qty:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <form onSubmit={this.handleSubmit}></form>
        </div >

      )

    }
  }
}

export default protectedRoute(CSSModules(ItemDetails, css));