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
      itemDetails: {},
      amount: 1
    };
  }
  componentDidMount() {
    axiosWrapper.get(`/items/${this.props.match.params.id}`)
      .then(response => {
        console.log("response from item detail--------", response);
        this.setState({ itemDetails: response.data.item });
      })
      .catch(err => {
        console.log("something bad happened------", err);

      });
  }
  addItemToCart = event => {
    this.props.updateCart(
      event,
      this.state.ItemDetails.handle,
      this.state.amount
    );
  };

  updateAmount = event => {
    event.preventDefault();
    this.setState({ amount: event.target.value });
  };

  render() {
    const { itemDetails } = this.state;


    if (!itemDetails.name) {
      return <div>loading</div>
    }
    else {
      return (

        <div styleName="itemDetailContainer">
          Here is some item
            <div>{itemDetails.name}</div>
          <div>{itemDetails.price}</div>
          {itemDetails.description}
          <input type="number" value={this.state.amount}
            onChange={this.updateAmount} />
          <button onClick={this.props.updateCart}>add to cart</button>


        </div>








      )

    }
  }
}

export default protectedRoute(CSSModules(ItemDetails, css));


