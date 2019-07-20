import sizes from "./scale";

const theming = {
  cardShadow: `0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)`,
}

export const roundButton = () => {
  return `
    border: none;
    cursor: pointer;
    position: relative;
    border-radius: 100%;
  `
}

export const roundButtonIcon = () => {
  return `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
}

export const BasicContainer = () => {
  return `
    background-color: #ffffff;
    padding: ${sizes.xlarge};
    border-radius: 5px;
    box-shadow: ${theming.cardShadow};
  `
}

export default theming;