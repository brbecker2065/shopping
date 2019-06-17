import omit from 'lodash/omit'
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../utilities/axios/wrapper";
import css from "./index.css";
import Header from "../components/header";
import Footer from "../components/footer";

import Landing from "./landing";
import Home from "./homepage/";
import Login from "./login/";
import SignOut from "./sign-out";
import AboutUs from "./about-us";
import ItemDetails from "./itemDetail";
import Seller from "./sellerpage"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numItemsInCart: 0
    };
  }

  //componentDidMount() {
  //axiosWrapper.get(this.cart.quantity)

  //}

  updateCart = (itemid, quantity) => {

    axiosWrapper.post('/carts/add', { items: [{ id: itemid, quantity }] })
      .then(res => {
        console.log(res)
        this.setState({ numItemsInCart: this.state.numItemsInCart + 1 })
      })

      .catch(err => {
        console.log(err)
      });
  };


  render() {
    return (
      <div styleName="App" >
        <div styleName="header-container">
          <Header numItemsInCart={this.state.numItemsInCart} />
        </div>
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/login" component={Login} />,
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/sign-out" />
            <Route exact path="/item/:id" render={({ match }) => (
              <ItemDetails match={match} updateCart={this.updateCart} />
            )}
            />
            <Route exact path="/cart"
              render={() => <div>inside our cart</div>} />
            <Route exact path="/sellerpage" component={Seller} />
            <Route component={() => (<div>No Page Found!!</div>)} />


          </Switch>
        </div>
        <div styleName="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default CSSModules(App, css);
