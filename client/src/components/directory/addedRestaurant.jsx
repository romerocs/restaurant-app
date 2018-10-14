import React from "react";

const AddedRestaurant = (props) => {
    
    return (
        <div className="list-group-item">
            <div>{props.restaurant.name}</div>
            <div>{props.restaurant.address}</div>
            {props.children}
        </div>
    
    )
}

export default AddedRestaurant;