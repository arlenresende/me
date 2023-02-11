import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    textDecoration: 'none',
  },
  body: {
    background: '$white200',
    color: '$black200',
    '-webkit-font-smoothing': 'antialiased',
  },
  'body, input, textarea, button': {
    fontFamily: 'Oxygen',
    fontWeight: 400,
  },
})
