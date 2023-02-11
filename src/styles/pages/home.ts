import { styled } from '..'

export const CallSection = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  '@bp3': {
    gridTemplateColumns: '1fr ',
  },
})

export const ContentCallSection = styled('div', {
  fontWeight: 700,
  color: '$black200',
  fontSize: '1.3rem',
  marginTop: '1rem',
  '@bp3': {
    textAlign: 'center',
  },
  span: {
    color: '$blue500',
  },
  p: {
    fontWeight: 300,
    fontSize: '1.2rem',
    lineHeight: '160%',
    marginTop: '1rem',
    paddingRight: '4rem',
    '@bp1': {
      padding: '0',
    },
  },
})

export const TerminalSection = styled('div', {
  '.terminal-window': {
    textAlign: 'left',
    width: '600px',
    height: '360px',
    borderRadius: '10px 10px 0 0',
    position: 'relative',
    boxShadow: '0 0 5px 1px rgb(40, 42, 54)',
    margin: '0 auto',
    '@bp1': {
      display: 'none',
    },
  },
  '.terminal-header': {
    background: '#e0e8f0',
    height: '30px',
    borderRadius: '8px 8px 0 0',
    paddingLeft: '10px',
  },
  '.terminal-button': {
    width: '12px',
    height: '12px',
    margin: '10px 4px 0 0',
    display: 'inline-block',
    borderRadius: '50%',
  },
  '.green': { background: '#3bb662' },
  '.yellow': { background: '#e5c30f' },
  '.red': { background: '#e75448' },
  '.terminal-body': {
    color: 'white',
    fontFamily:
      'Menlo, Monaco, "Consolas", monospace, "Courier New", "Courier"',
    fontSize: '11pt',
    background: '#30353a',
    opacity: 0.9,
    padding: '10px',
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    top: '30px',
    bottom: '0',
    overflow: 'auto',
    '.prompt': {
      div: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0.5rem',
        '.content': {
          color: '$yellow300',
          a: {
            color: '$yellow300',
          },
        },
      },
    },
  },
})
