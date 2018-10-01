import { connect } from "react-redux";
import * as actions from "../actions";

import React, { Component } from "react";
import YelpSearchForm from "../components/directory/yelp/Form";
import YelpSearchResults from "../components/directory/yelp/Results";
import YelpSearchResult from "../components/Result";

class Directory extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addButtonClick = this.addButtonClick.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(actions.searchYelp(e.target.keyword.value));
    }
    addButtonClick(e) {
        
        let i = e.target.getAttribute("index");
        let restaurant = this.props.results[i];
        //console.log(this.props.results[i]);
        this.props.dispatch(actions.addRestaurant(restaurant));
    }
    render() {
        return (
            <div className="container">
                <YelpSearchForm handleSubmit={this.handleSubmit}/>
                {this.props.results.length > 0 && (
                    <YelpSearchResults>
                        {
                            this.props.results.map((i,index) => {
                                return (
                                    <YelpSearchResult name={i.name} key={index}>
                                        <button onClick={this.addButtonClick} index={index}>Add</button>
                                    </YelpSearchResult>)
                            })
                        }
                    </YelpSearchResults>

                    /* RECENTLY ADDED COMPONENT, ALLOWS USER TO SELECT CATEGORY AND MEALS */
                )}
            </div>
        );
    }
}

export default connect((state, props) => {
    return {
        results: state.yelpSearch.results,
        total: state.yelpSearch.total
        /* recentlyAdded: state.something */
    };
})(Directory);
