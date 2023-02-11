import { styled } from '../../styles/index'

export const HeaderContainer = styled('header', {
  display: 'flex',
  height: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem 0',
  width: '100%',
  color: '$blue500',
  '@bp2': {
    flexDirection: 'column',
    gap: '2rem',
  },
  a: {
    fontFamily: 'Fira Code',
    fontSize: '1.3rem',
    color: '$blue500',
  },
})

export const NavContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  height: 'auto',
  '@bp3': {
    textAlign: 'center',
  },
  a: {
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '1px',
    textDecoration: 'none',
    color: '$black200',

    '&.active': {
      fontWeight: 700,
      color: '$blue500',
    },
    '&:hover': {
      color: '$blue500',
    },
  },
})
