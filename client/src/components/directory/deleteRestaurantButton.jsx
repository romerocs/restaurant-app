import React from "react";
import { ReactComponent as TrashIcon } from "open-iconic/svg/trash.svg";
import styled from "styled-components";
import colors from "../../style-settings/colors";
import { roundButton, roundButtonIcon } from "../../style-settings/theming";

const DeleteButton = styled.button`
    ${ roundButton }
    width: 35px;
    height: 35px;
    border: 1px solid ${colors.greyLight};
`;

const StyledIcon = styled(TrashIcon)`
    ${ roundButtonIcon }
    fill: ${colors.grey};
    width: 15px;
    height: 15px;
`;

function DeleteRestaurantButton({ onDeleteClick, id }) {
    return (
        <React.Fragment>
            <DeleteButton
                onClick={() => onDeleteClick(id)}
            >
                <StyledIcon />
            </DeleteButton>
        </React.Fragment>
    );
}

export default DeleteRestaurantButton;
