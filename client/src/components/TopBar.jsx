import React, { Component } from "react";
import {Link} from "react-router-dom";

class TopBar extends Component {

    render() {
        return (
            <div className="container">
                <h1>
                    <Link to="/" className="button-primary">I don't feel like cooking!</Link>
                </h1>
                <Link to="/directory" className="button-primary">Directory</Link>

            </div>
        )
    }
}

export default TopBar;