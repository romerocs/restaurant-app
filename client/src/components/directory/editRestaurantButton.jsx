import React from "react";
import { ReactComponent as EditIcon } from "open-iconic/svg/pencil.svg";
import styled from "styled-components";
import sizes from "../../style-settings/scale";
import colors from "../../style-settings/colors";
import { roundButton, roundButtonIcon } from "../../style-settings/theming";

const EditButton = styled.button`
    ${ roundButton }
    width: 35px;
    height: 35px;
    margin-right: ${sizes.base};
    background-color: ${colors.blueLightest};
`;

const StyledIcon = styled(EditIcon)`
    ${ roundButtonIcon }
    fill: ${colors.blue};
    width: 15px;
    height: 15px;
`;

function EditRestaurantButton( { onEditClick } ) {
    return (
        <React.Fragment>
            <EditButton
                onClick={onEditClick}
            >
                <StyledIcon />
            </EditButton>
        </React.Fragment>
    );
}

export default EditRestaurantButton;
