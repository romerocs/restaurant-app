import React from "react";
import styled from 'styled-components';
import colors from '../style-settings/colors';
import sizes from '../style-settings/scale';
//import { HomeIcon } from "../style-settings/icons";

const Button = ({ text, type, className, handler, style, theme }) => {

  return (
    <button
      className={className}
      type={type}
      style={style}
      onClick={handler}>
      {text}
    </button>
  )
}

const StyledButton = styled(Button)`
  font-weight: bold;
  font-size: ${sizes.base};
  padding: 15px 20px;
  border-radius: 15px;
  border: none;
  cursor:pointer;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
`;

export default StyledButton;