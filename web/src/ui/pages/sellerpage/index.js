import React, { Component } from "react";
import CSSModules from "react-css-modules";
import * as axiosWrapper from "../../../utilities/axios/wrapper";

import css from "./index.css";

class Seller extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setStat({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A quantity was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {




        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    Qty:
                                <input type="number" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}







export default CSSModules(Seller, css);




