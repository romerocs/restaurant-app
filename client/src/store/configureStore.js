import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import fetch from "fetch-everywhere";
/* 
    fetch initial data here
*/

const defaultState = {};

// fetch("/api/meal")
// .then(res => res.json())
// .then(data => {
//     defaultState.meal = data;
// });

// fetch("/api/categories")
// .then(res => res.json())
// .then(data => {
//     defaultState.categories = data;
// });

let promises = [fetch("/api/meal"), fetch("/api/categories")];

/* ACTIONS AND THEIR DEPENDEND FUNCTIONS */
function _fetchInitialData() {
    Promise.all(
        promises.map(item =>
            item.then(data => data.json()).then(result => {
                //do something with these results
                defaultState[result.type] = result.content;
            })
        )
    );
}

_fetchInitialData();

/* REDUCER EXAMPLE */
function test(state = defaultState, action) {
    switch (action.type) {
        case "TEST_ACTION":
            return {
                ...state,
                test: action.data.test
            };
        default:
            return state;
    }
}

var logger = createLogger({
    collapsed: true
});

var store = createStore(
    test,
    compose(
        applyMiddleware(thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
