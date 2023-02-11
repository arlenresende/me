import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      white200: '#FBFBFF',

      blue900: '#040F16',
      blue500: '#19647E',

      black200: '#37392E',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      yellow300: '#edff7e',

      dev: '#2A9D8F',
      cot: '#E76F51',
      project: '#F4A261',
    },
  },
  media: {
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1024px)',
  },
})
