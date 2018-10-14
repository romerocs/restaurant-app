import React, { Component } from "react";
import { connect } from "react-redux";

import TopBar from "./components/TopBar";
import RandomRestaurant from "./containers/RandomRestaurant";
import Directory from "./containers/Directory";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <TopBar />
                    <Switch>
                        <Route path="/" component={() => 
                            <RandomRestaurant meal={this.props.meal} categories={this.props.categories}/>
                        } exact />
                        <Route path="/directory" component={() => 
                            <Directory meal={this.props.meal} categories={this.props.categories} />
                        } exact />
                    </Switch>
                    
                </div>
            </Router>
        );
    }
}

export default connect((state, props) => {
    return {
        meal: state.fetchInitialState.meal,
        categories: state.fetchInitialState.categories
    };
})(App);
