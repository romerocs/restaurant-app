import React, { useState } from "react";
import styled from "styled-components";
import sizes from "../style-settings/scale";
import colors from "../style-settings/colors";
import theming from "../style-settings/theming";
import { capitalizeFirstLetter } from "../helpers";

const Input = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
`;

const Label = styled.label`
    position: relative;
    text-align: center;
    display:block;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: ${sizes.xxsmall};
    color: ${colors.black};
    box-shadow: ${ theming.cardShadow };
    background-color: ${props => props.isChecked ? colors.pink : "#f5f5f5"};
`;

function Checkbox( { onCheckboxClick, value, checked } ) {
  const [ labelChecked, setLabelChecked ] = useState(checked);

  const clickHandler = (e) => {
    setLabelChecked(!labelChecked);
    onCheckboxClick(e); 
  }

  const transformedValue = capitalizeFirstLetter(value);

  return (
    <Label htmlFor="" isChecked={labelChecked}>
      <Input
        onClick={clickHandler}
        type="checkbox"
        value={value}
        defaultChecked={checked}
      />
      {transformedValue}
    </Label>
  )
}

export default Checkbox;
