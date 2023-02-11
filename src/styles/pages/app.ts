import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1180px',
  margin: '0 auto',

  justifyContent: 'center',
  gap: '4rem',
  padding: ' 0 2rem',
  height: 'auto',
  minHeight: 'auto',

  '@bp3': {
    height: 'auto',
  },
  '&.container-home': {
    minHeight: '100vh',
    padding: ' 0 2rem',
  },
})
