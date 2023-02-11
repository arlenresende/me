import { styled } from '..'
export const CardContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: ' repeat(3, 1fr)',
  '@bp3': {
    gridTemplateColumns: ' 1fr',
  },
})

export const CardPost = styled('div', {
  overflow: 'hidden',
  boxShadow: '0px 2px 20px #d7dfe2',
  background: 'white',
  borderRadius: '0.5rem',
  position: 'relative',
  width: '350px',
  margin: '1rem',
  transition: '250ms all ease-in-out',
  cursor: 'pointer',
  '@bp3': {
    width: 'auto',
  },

  '.popular': { color: '$cot' },
  '.dev': { color: '$dev' },
  '.project': { color: '$project' },
  '.card-body': { margin: '1rem' },
  '.blog-hashtag': {
    fontSize: '0.9rem',
    fontWeight: 700,
  },
  '.blog-title': {
    lineHeight: '1.8rem',
    margin: '1rem 0 0.5rem',
    color: '$gray900',
  },
  '.blog-description': { color: '$gray900', fontSize: '0.9rem' },
  '.card-profile': {
    display: 'flex',
    marginTop: '2rem',
    alignItems: 'center',
  },
  '.profile-img': {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  '.card-profile-info': {},
  '.profile-name': { fontSize: '1rem', color: '$blue500' },
  '.profile-followers': { color: '$gray900', fontSize: '0.9rem' },
})
