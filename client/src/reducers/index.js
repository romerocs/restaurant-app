import { combineReducers } from "redux";

let defaultInitialState = {
    meal: false,
    categories: false
};

function fetchInitialState(state = defaultInitialState, action) {
    switch (action.type) {
        case "FETCH_INITIAL_STATE":
            return {
                ...state,
                meal: action.data.meal,
                categories: action.data.categories
            };
        default:
            return state;
    }
}

let defaultRestaurantState = {
    restaurant: false
};
function fetchRandomRestaurant(state = defaultRestaurantState, action) {
    switch (action.type) {
        case "RECEIVED_RANDOM_RESTAURANT_SUCCESS":
            return {
                ...state,
                restaurant: action.data.restaurant,
                mealSelection: action.data.meal,
                categoriesSelection: action.data.categories
            };
        case "UNSET_RESTAURANT":
            return {
                ...state,
                restaurant: false,
                mealSelection: false,
                categoriesSelection: false
            };
        default:
            return state;
    }
}

let defaultFormState = {
    showForm: true
};

const defaultUIState = {
    showForm: true,
    showResult: false
};

function uiReducer(state = defaultUIState, action) {
    switch (action.type) {
        case "SHOW_FORM":
            return {
                ...state,
                showForm: true
            };
        case "HIDE_FORM":
            return {
                ...state,
                showForm: false
            };
        case "SHOW_RESULT":
            return {
                ...state,
                showResult: true
            };
        case "HIDE_RESULT":
            return {
                ...state,
                showResult: false
            };
        default:
            return state;
    }
}

const defaultYelpSearchState = {
    results: false,
    total: 0
}
function yelpSearch(state = defaultYelpSearchState, action) {
    switch (action.type) {
        case "RECEIVED_YELP_RESPONSE_SUCCESS":
            return {
                ...state,
                results: action.data.results,
                total: action.data.total
            };
        default:
            return state;
    }
}

const defaultAddRestaurantState = {

    
}
function addRestaurant(state = defaultAddRestaurantState, action) {
    switch (action.type) {
        case "ADDED_RESTAURANT_SUCCESS":
            return {
                ...state,
                // results: action.data.results,
                // total: action.data.total
            };
        default:
            return state;
    }
}

export default combineReducers({
    fetchInitialState: fetchInitialState,
    fetchRandomRestaurant: fetchRandomRestaurant,
    uiReducer: uiReducer,
    yelpSearch: yelpSearch 
});
