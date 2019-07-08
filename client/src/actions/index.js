import fetch from "fetch-everywhere";

export function updateAddedRestaurant(payload) {
    return dispatch => {
        _updateAddedRestaurantAjaxCall(payload, dispatch);
    };
}

function _updateAddedRestaurantAjaxCall(payload, dispatch) {
    dispatch({ type: "UPDATE_ADDED_RESTAURANT_REQUEST" });

    fetch(`api/restaurant/update/${payload.id}`, {
        method: "PUT",
        body: JSON.stringify({
            meal: payload.selectedMeal,
            category: payload.selectedCategories
        }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(restaurant => {
            dispatch({ type: "UPDATE_ADDED_RESTAURANT_SUCCESS" });

            if(payload.type === "yelp") {
                dispatch({ type: "REMOVE_ADDED_RESTAURANT" });
                dispatch({ type: "YELP_SEARCH_RESET" });
            }

            dispatch({ type: "GET_ALL_DIRECTORY_RESTAURANTS_REQUEST" });

            fetch(`api/restaurants/list/`)
                .then(res => res.json())
                .then(restaurants => {
                    dispatch({
                        type: "GET_ALL_DIRECTORY_RESTAURANTS_SUCCESS",
                        data: restaurants
                    });
                })
                .catch(err => {
                    dispatch({
                        type: "GET_ALL_DIRECTORY_RESTAURANTS_FAILURE",
                        data: err
                    });
                });
        })
        .catch(err => {
            dispatch({ type: "UPDATE_ADDED_RESTAURANT_FAILURE", data: err });
        });
}

export function deleteAddedRestaurant(payload) {
    return dispatch => {
        _deleteAddedRestaurantAjaxCall(payload, dispatch);
    };
}

function _deleteAddedRestaurantAjaxCall(payload, dispatch) {
    dispatch({ type: "DELETE_ADDED_RESTAURANT_REQUEST" });

    fetch(`api/delete/restaurant/${payload}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(() => {
            dispatch({
                type: "DELETE_ADDED_RESTAURANT_SUCCESS"
            });

            dispatch({ type: "GET_ALL_DIRECTORY_RESTAURANTS_REQUEST" });

            fetch(`api/restaurants/list/`)
                .then(res => res.json())
                .then(restaurants => {
                    dispatch({
                        type: "GET_ALL_DIRECTORY_RESTAURANTS_SUCCESS",
                        data: restaurants
                    });
                })
                .catch(err => {
                    dispatch({
                        type: "GET_ALL_DIRECTORY_RESTAURANTS_FAILURE",
                        data: err
                    });
                });
        })
        .catch(err => {
            dispatch({ type: "DELETE_ADDED_RESTAURANT_FAILURE", data: err });
        });
}

export function addRestaurant(payload) {
    return dispatch => {
        _addRestaurantAjaxCall(payload, dispatch);
    };
}

function _addRestaurantAjaxCall(payload, dispatch) {
    dispatch({ type: "ADD_RESTAURANT_REQUEST" });

    let address = `${payload.location.display_address[0]} ${
        payload.location.display_address[1]
    }`;

    fetch(`/api/restaurant/add/`, {
        method: "POST",
        body: JSON.stringify({
            name: payload.name,
            address: address
        }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(restaurant => {
            dispatch({
                type: "DISPLAY_ADDED_RESTAURANT",
                data: restaurant
            });
        })
        .catch(err => {
            dispatch({ type: "ADDED_RESTAURANT_FAILURE", data: err });
        });
}

export function fetchRandomRestaurant(payload) {
    return dispatch => {
        _makeRandomRestaurantAjaxCall(payload, dispatch);
    };
}

function _makeRandomRestaurantAjaxCall(payload, dispatch) {
    const { category } = payload.categories;
    const { type } = payload.meal;

    dispatch({ type: "REQUEST_RANDOM_RESTAURANT", data: payload });
    
    fetch(`/api/restaurant/random/${category}/${type}`)
        .then(res => res.json())
        .then(restaurant => {
            dispatch({
                type: "RECEIVED_RANDOM_RESTAURANT_SUCCESS",
                data: {
                    restaurant: restaurant,
                    meal: payload.meal,
                    categories: payload.categories
                }
            });
        })
        .catch(err => {
            dispatch({ type: "RECEIVED_RANDOM_RESTAURANT_FAILURE", data: err });
        });
}


export function addCheckboxSelection(payload) {
    return {
        type: "ADD_CHECKBOX_SELECTION",
        data: payload
    };
}
export function removeCheckboxSelection(payload) {
    return {
        type: "REMOVE_CHECKBOX_SELECTION",
        data: payload
    };
}
export function addCategorySelection(payload) {
    return {
        type: "ADD_CATEGORY_SELECTION",
        data: payload
    };
}
export function showForm() {
    return {
        type: "SHOW_FORM"
    };
}

export function hideForm() {
    return {
        type: "HIDE_FORM"
    };
}

export function showResult() {
    return {
        type: "SHOW_RESULT"
    };
}

export function hideResult() {
    return {
        type: "HIDE_RESULT"
    };
}

export function searchYelp(payload) {
    return dispatch => {
        _makeYelpAjaxCall(payload, dispatch);
    };
}

function _makeYelpAjaxCall(keyword, dispatch) {
    dispatch({ type: "REQUEST_YELP_API" });

    fetch(`/api/search/restaurants/${keyword}`)
        .then(res => res.json())
        .then(yelp => {
            dispatch({
                type: "RECEIVED_YELP_RESPONSE_SUCCESS",
                data: { results: yelp.businesses, total: yelp.total }
            });
        })
        .catch(err => {
            dispatch({ type: "RECEIVED_YELP_RESPONSE_FAILURE", data: err });
        });
}
