import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <h1>
            <Link to="/" className="button-primary">
              I don't feel like cooking!
            </Link>
          </h1>
          <Link to="/directory" className="button-primary">
            Directory
          </Link>
        </div>
      </div>
    );
  }
}

export default TopBar;
