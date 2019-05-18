import React, { Component } from "react";
import CSSModules from "react-css-modules";

import css from "./index.css";

class Seller extends Component {
    render() {
        const { creator, updatedCreator } = this.props;
    }
}
<div>sellerpage</div>







/*if (creator && creator.firstName) {
    return (
        <div>seller page
            <div>spotlight{creator.firstName}</div>
            <div>{creator.email}</div>
            <form
                onSubmit={event =>
                    this.props.submitCreatorUpdate(event, creator.userHandle)
                }
            >
                <input
                    type="text"
                    value={updatedCreator.firstName}
                    placeholder="First Name"
                    onChange={this.props.updateCreator}
                />
                <button
                    type="submit"
                    onClick={event =>
                        this.props.submitCreatorUpdate(event, creator.userHandle)
                    }
                >
                    Update Info
                </button>
            </form>
        </div>
    );
}

return null;
}
}*/

export default CSSModules(Seller, css);