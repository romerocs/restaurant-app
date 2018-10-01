import fetch from "fetch-everywhere";

export function addRestaurant(payload) {
    return dispatch => {
        _addRestaurantAjaxCall(payload, dispatch);
    };
}

function _addRestaurantAjaxCall(payload, dispatch) {
    dispatch({ type: "ADD_RESTAURANT_REQUEST" });
    console.log(payload);
    let address = `${payload.location.display_address[0]} ${payload.location.display_address[1]}`;

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
            console.log(restaurant);
            // dispatch({
            //     type: "ADDED_RESTAURANT_SUCCESS",
            //     data: {
            //         // restaurant: restaurant,
            //         // meal: payload.meal,
            //         // categories: payload.categories
            //     }
            // });
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
    dispatch({ type: "REQUEST_RANDOM_RESTAURANT", data: payload });

    fetch(`/api/restaurant/random/${payload.categories}/${payload.meal}`)
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
