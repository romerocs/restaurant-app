import React from "react";
import styled from "styled-components";
import sizes from "../../../style-settings/scale";
import colors from "../../../style-settings/colors";
import { ReactComponent as PlusIcon } from "open-iconic/svg/plus.svg";

const AddButton = styled.button`
    background: ${colors.black};
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: relative;
    cursor: pointer;
`;

const StyledIcon = styled(PlusIcon)`
    fill: ${colors.pinkLighter};
    width: 15px;
    height: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

function Result({ className, name, index, addButtonClick }) {

    return (
        <div className={className}>
            <h3>{name}</h3>
            <AddButton
                onClick={() => addButtonClick(index)}
                aria-label="Add Restaurant"
            >
                <StyledIcon />
            </AddButton>
        </div>
    );
}

const StyledResult = styled(Result)`
    padding: ${sizes.large};
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
        border-bottom: 1px solid ${colors.greyLight};
    }
`

export default StyledResult;
