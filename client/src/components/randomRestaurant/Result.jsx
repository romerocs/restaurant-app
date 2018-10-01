import React from "react";

function RandomRestaurantResult(props) {
    const onTryAgainClick = () => {
        props.getRandomRestaurant({
            meal: props.meal,
            categories: props.categories
        });
    };
    
    const onStartOverClick = () => {
        props.startOver();
    }

    return (
        <div className="result">
            <button onClick={onTryAgainClick}>Try again</button>
            <button onClick={onStartOverClick}>Start over</button>
            <div>{props.restaurant.name}</div>
        </div>
    );
}

export default RandomRestaurantResult;
