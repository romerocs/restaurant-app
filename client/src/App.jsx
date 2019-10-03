import React, { Component } from "react";
import { Security, SecureRoute, ImplicitCallback, withAuth } from '@okta/okta-react';
import { connect } from "react-redux";

import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'
import colors from './style-settings/colors';

import TopBar from "./components/TopBar";
import RandomRestaurant from "./containers/RandomRestaurant";
import Directory from "./containers/Directory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import chefImage from "./_images/angrychef.svg";
import Auth from "@okta/okta-react/dist/Auth";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  body {
    background-color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    position: relative;
  }
`;

class App extends Component {
    render() {
        const RandomRestaurantWithAuth = withAuth(RandomRestaurant);
        const DirectoryWithAuth = withAuth(Directory);
        return (
            <Router>
                <Security
                    issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
                    client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
                    redirect_uri={`${window.location.origin}/implicit/callback`}
                >
                    <div className="App">
                        {<GlobalStyle pinkColor />}
                        <TopBar />
                        <Switch>
                            <Route path="/" component={() =>
                                <RandomRestaurantWithAuth meal={this.props.meal} categories={this.props.categories} />
                            } exact />
                            <SecureRoute path="/directory" component={() =>
                                <DirectoryWithAuth meal={this.props.meal} categories={this.props.categories} />
                            } exact />
                            <Route path="/implicit/callback" component={ImplicitCallback} />
                        </Switch>

                    </div>
                </Security>
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
