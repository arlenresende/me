import { styled } from '../../styles/index'

export const FooterContainer = styled('header', {
  display: 'flex',
  height: 'auto',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',
  a: {
    color: '$black200',
    '&:hover': {
      color: '$blue500',
    },
  },
})
