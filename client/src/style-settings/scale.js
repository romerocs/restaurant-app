export const base_size = 16;

export const rem_calc = (px) => {
  return `${px / base_size}rem`;
}

const sizes = {
 xxsmall: rem_calc(8.19),
 xsmall: rem_calc(10.24),
 small: rem_calc(12.8),
 base: rem_calc(16),
 medium: rem_calc(20),
 large: rem_calc(25),
 xlarge: rem_calc(31.25),
 xxlarge: rem_calc(39.06),
 xxxlarge: rem_calc(48.83)
}

export default { ...sizes };