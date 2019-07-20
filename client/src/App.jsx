import React, { Component } from "react";
import { connect } from "react-redux";

import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'
import colors from './style-settings/colors';

import TopBar from "./components/TopBar";
import RandomRestaurant from "./containers/RandomRestaurant";
import Directory from "./containers/Directory";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import chefImage from "./_images/angrychef.svg";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  body {
    background-color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    position: relative;

    /* &:before {
        content: "";
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-image: url(${chefImage});
        background-repeat: no-repeat;
        z-index: 1;
    } */
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
