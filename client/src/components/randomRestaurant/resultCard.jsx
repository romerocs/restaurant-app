import React from "react";
import TagMeal from "../tagMeal";
import TagCategory from "../tagCategory";
import styled from "styled-components";
import sizes from "../../style-settings/scale";

const TagWrapper = styled.div`
    margin-top: ${sizes.base};
`;

function ResultCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{props.restaurant.name}</h3>
                <div className="card-text">{props.restaurant.address}</div>

                <TagWrapper>
                    {props.restaurant.meal.map((i, index) => {
                        return <TagMeal key={index} meal={i} />;
                    })}
                    <TagCategory category={props.restaurant.category} />
                </TagWrapper>

            </div>
        </div>
    );
}

export default ResultCard;
