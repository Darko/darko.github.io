import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { styled, globalCss, darkTheme } from './theme';
import './App.css'

globalCss({
  '*': {
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: '$base',
    backgroundColor: '$bg',
    color: '$textHighContrast',
    fontSize: 16
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  }
})();

const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: 1440,
  margin: '0 auto 3.75rem',
  padding: '2.5rem 1.125rem'
});

const Logo = styled('a', {
  color: '$textHighContrast',
  fontSize: '$logo',
  letterSpacing: '-0.025em'
});

const ThemeButton = styled(Toggle.Root, {
  all: 'unset',
  width: 15,
  height: 15,
  position: 'relative',
  cursor: 'pointer',
  color: '$textLowContrast',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 40,
    height: 40
  }
});

const Title = styled('h1', {
  maxWidth: 400,
  margin: '0 auto',
  textAlign: 'center',
  fontSize: '$subheading',
  fontWeight: '$light',
  letterSpacing: '-0.125rem',
  marginBottom: '1.5rem'
});

const CTA = styled('button', {
  all: 'unset',
  padding: '0.625rem 1rem',
  fontSize: '$body',
  fontWeight: '$light',
  textTransform: 'uppercase',
  backgroundColor: '$uiBg',
  borderRadius: '0.25rem',
  marginBottom: '5rem',
  '&:hover': {
    backgroundColor: '$uiBgHover',
  },
  '&:active': {
    backgroundColor: '$uiBgActive',
  }
});

const Bio = styled('ul', {
  maxWidth: 690,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridColumnGap: '6.25rem',
  listStyle: 'none'
});

const BioEntry = styled('li', {
  display: 'grid',
  gridRowGap: '2rem',
  placeItems: 'start',
  gridAutoRows: 'min-content'
});

const BioEntryTitle = styled('h2', {
  fontSize: '$body',
  fontWeight: '$bold',
  margin: 0
});

const BioEntryEntry = styled('p', {
  fontSize: '$body',
  margin: 0
})

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(window.matchMedia('(prefers-color-scheme: dark)').matches);

  React.useEffect(() => {
    const method = isDarkMode ? 'add' : 'remove';
    document.body.classList[method](darkTheme);
  }, [isDarkMode]);

  return (
    <>
      <Nav>
        <Logo>Darko Efremov.</Logo>
        <ThemeButton pressed={isDarkMode} onPressedChange={setIsDarkMode}>
          { isDarkMode ? <MoonIcon /> : <SunIcon /> }
        </ThemeButton>
      </Nav>
      <Title>
        Front-end Engineer <br/>
        working at StreamElements
      </Title>
      <CTA>Work with me</CTA>
      <Bio>
        <BioEntry>
          <BioEntryTitle>Span</BioEntryTitle>
          <BioEntryEntry>
            6+ years at current unicorn startup
          </BioEntryEntry>
          <BioEntryEntry>
            Years spent on trying and learning
          </BioEntryEntry>
          <BioEntryEntry>
            Born on March 21, 1996
          </BioEntryEntry>
        </BioEntry>
        <BioEntry>
          <BioEntryTitle>Background</BioEntryTitle>
          <BioEntryEntry>
            Self/Community taught
          </BioEntryEntry>
          <BioEntryEntry>
            Computer Science dropout
          </BioEntryEntry>
        </BioEntry>
        <BioEntry>
          <BioEntryTitle>Presence</BioEntryTitle>
          <BioEntryEntry>
            Github
          </BioEntryEntry>
          <BioEntryEntry>
            Instagram
          </BioEntryEntry>
          <BioEntryEntry>
            Twitter
          </BioEntryEntry>
        </BioEntry>
      </Bio>
    </>
  );
}

export default App;
