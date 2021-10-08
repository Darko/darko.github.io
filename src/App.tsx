import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { styled, globalCss, darkTheme, lightTheme } from './theme';
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
  color: '$textHighContrast',
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
  lineHeight: '1.4',
  fontWeight: '$light',
  letterSpacing: '-0.125rem',
  marginBottom: '1.5rem',
  '@bp1': {
    px: '1rem',
    span: {
      display: 'none'
    }
  }
});

const CTA = styled('a', {
  all: 'unset',
  display: 'inline-block',
  padding: '0.625rem 1rem',
  fontSize: '0.875rem',
  fontWeight: '$semiBold',
  textTransform: 'uppercase',
  backgroundColor: '$uiBg',
  color: '$onUiText',
  borderRadius: '0.25rem',
  marginBottom: '5rem',
  cursor: 'pointer',
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
  listStyle: 'none',
  
  '@bp1': {
    padding: 0,
    gridTemplateColumns: '1fr',
    gridRowGap: '3.125rem'
  }
});

const BioEntry = styled('li', {
  display: 'grid',
  gridRowGap: '2rem',
  placeItems: 'start',
  gridAutoRows: 'min-content',
  '@bp1': {
    gridRowGap: '1rem'
  }
});

const BioEntryTitle = styled('h2', {
  fontSize: '$body',
  fontWeight: '$bold',
  margin: 0
});

const BioEntryEntry = styled('p', {
  fontSize: '$body',
  margin: 0,
  color: '$textHighContrast',
  textDecoration: 'none'
});

const StyledLinkSvg = styled('svg', {
  color: '$textLowContrast'
});

function LinkIcon () {
  return <StyledLinkSvg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></StyledLinkSvg>
}

const mailSubject = encodeURIComponent(`I'd like to work with you!`);
const mailBody = encodeURIComponent(`
  Hey Darko,

  I'm interested in working with you and I'd like to apply for [position] at StreamElements.

  Please find attached my CV for your review and consideration.
  I look forward to hearing from you.

  Cheers,
  [name]
`);

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
        <span>working</span> at StreamElements
      </Title>
      <CTA className={lightTheme} href={`mailto:workwithme@darko.mk?subject=${mailSubject}&body=${mailBody}`}>
        Work with me
      </CTA>
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
          <BioEntryEntry as="a" href="https://github.com/darko" target="_blank">
            Github <LinkIcon />
          </BioEntryEntry>
          <BioEntryEntry as="a" href="https://www.instagram.com/darko_efremov" target="_blank">
            Instagram <LinkIcon />
          </BioEntryEntry>
          <BioEntryEntry as="a" href="https://twitter.com/grtr_than_equal" target="_blank">
            Twitter <LinkIcon />
          </BioEntryEntry>
        </BioEntry>
      </Bio>
    </>
  );
}

export default App;
