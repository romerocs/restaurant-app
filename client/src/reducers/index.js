import { combineReducers } from "redux";

let defaultInitialState = {
    meal: false,
    categories: false,
    directoryList: false
};

function fetchInitialState(state = defaultInitialState, action) {
    switch (action.type) {
        case "FETCH_INITIAL_STATE":
            return {
                ...state,
                meal: action.data.meal,
                categories: action.data.categories,
                directoryList: action.data.directoryList
            };
        case "GET_ALL_DIRECTORY_RESTAURANTS_SUCCESS":
            return {
                ...state,
                directoryList: action.data.content
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

const defaultUIState = {
    showForm: true,
    showResult: false,
    editMode: false
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
};
function yelpSearch(state = defaultYelpSearchState, action) {
    switch (action.type) {
        case "RECEIVED_YELP_RESPONSE_SUCCESS":
            return {
                ...state,
                results: action.data.results,
                total: action.data.total
            };
        case "YELP_SEARCH_RESET":
        return {
            ...state,
            results: false,
            total: 0
        };        
        default:
            return state;
    }
}

const defaultAddRestaurantState = {
    addedRestaurant: false
};

function displayAddedRestaurant(state = defaultAddRestaurantState, action) {
    switch (action.type) {
        case "DISPLAY_ADDED_RESTAURANT":
            return {
                ...state,
                addedRestaurant: action.data
            };
        case "REMOVE_ADDED_RESTAURANT":
            return {
                ...state,
                addedRestaurant: false
            };
        default:
            return state;
    }
}

const defaultCheckboxState = {
    selectedCheckboxes: []
};

function checkboxSelection(state = defaultCheckboxState, action) {
    switch (action.type) {
        case "ADD_CHECKBOX_SELECTION":
            return {
                ...state,
                selectedCheckboxes: [...state.selectedCheckboxes, action.data]
            };
        case "REMOVE_CHECKBOX_SELECTION":
            let index = state.selectedCheckboxes.indexOf(action.data);
            let arr = state.selectedCheckboxes;
            arr.splice(index, 1);

            return {
                ...state,
                selectedCheckboxes: arr
            };
        default:
            return state;
    }
}

const defaultCategorySelectionState = {
    categoriesSelection: false
};

function categorySelection(state = defaultCategorySelectionState, action) {
    switch (action.type) {
        case "ADD_CATEGORY_SELECTION":
            return {
                ...state,
                categoriesSelection: action.data
            };
        default:
            return state;
    }
}

export default combineReducers({
    fetchInitialState: fetchInitialState,
    fetchRandomRestaurant: fetchRandomRestaurant,
    uiReducer: uiReducer,
    yelpSearch: yelpSearch,
    displayAddedRestaurant: displayAddedRestaurant,
    checkboxSelection: checkboxSelection,
    categorySelection: categorySelection
});
