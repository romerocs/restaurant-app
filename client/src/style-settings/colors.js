const colors = {
  pinkLightest: '#fbf3f0',
  pinkLighter: '#ecc1b6',
  pinkLight: '#f0a996',
  pink: '#e28977',
  pinkDark: '#b96d60',
  blue: '#0802b7',
  blueLight: '#4835c9',
  blueLightest: '#f1eeff',
  grey: '#89837b',
  greyLight: '#cfcfcf',
  greyLightest: '#ececec',
  black: '#000000',
  white: '#ffffff'
};

export const buttonThemes = {
  primary : {
    fg: colors.pinkLighter,
    bg: colors.blue
  },
  secondary : {
    fg: colors.blue,
    bg: colors.blueLightest
  }
}

export default { ...colors };
