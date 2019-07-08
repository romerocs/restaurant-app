import React, { Component } from "react";
import { connect } from "react-redux";

import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'
import colors from './style-settings/colors';

import TopBar from "./components/TopBar";
import RandomRestaurant from "./containers/RandomRestaurant";
import Directory from "./containers/Directory";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  body {
    background-color: ${colors.pinkLightest};
    font-family: 'Montserrat', sans-serif;
  }
`;

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    { <GlobalStyle pinkColor/> }
                    <TopBar />
                    <Switch>
                        <Route path="/" component={() => 
                            <RandomRestaurant meal={this.props.meal} categories={this.props.categories} />
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
