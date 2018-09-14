import React, { Component } from 'react';
import { connect } from "react-redux";
//import fetch from 'fetch-everywhere';

import TopBar from './components/TopBar';
import GetRandomRestaurantForm from './components/getRandomRestaurant/Form';

class App extends Component {
  constructor() {
    super();

    //this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.props.dispatch({type:"TEST_ACTION", data:{test: "hello squirrel"} });
  // }
  
  componentDidMount() {
    //get all categories
    //http://localhost:8000/api/categories

    //get all meals
    //http://localhost:8000/api/meal
  }
  render() {
    return (
      <div className="App">
          <TopBar />
          <GetRandomRestaurantForm/>
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
      test: state.test
  };
})(App);