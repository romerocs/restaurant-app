import React, { Component } from "react";

import TopBar from "./components/TopBar";
import RandomRestaurant from "./containers/RandomRestaurant";
import Directory from "./containers/Directory";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <TopBar />
                <RandomRestaurant />
                <Directory />
            </div>
        );
    }
}

export default App;
