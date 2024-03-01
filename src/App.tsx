import React from "react";
import * as Toggle from "@radix-ui/react-toggle";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { styled, globalCss, darkTheme, lightTheme, } from "./theme";
import svgToDataUri from 'mini-svg-data-uri';
 
import "./App.css";

globalCss({
  "*": {
    boxSizing: "border-box",
  },
  body: {
    '--grid-color': '$colors$block',
    fontFamily: "$base, sans-serif",
    backgroundColor: "$bg",
    color: "$textHighContrast",
    fontSize: 16,
    backgroundImage: `url("${svgToDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="${lightTheme.colors.block.value}"><path d="M0 .5H31.5V32"/></svg>`
    )}")`,

    [`&.${darkTheme}`]: {
      backgroundImage: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="${darkTheme.colors.block.value}"><path d="M0 .5H31.5V32"/></svg>`
      )}")`,
    }
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
})();

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: 1260,
  margin: '0px auto 3.15rem',
  padding: "1.375rem 0.925rem 1.5rem",
});

const Logo = styled("a", {
  color: "$textHighContrast",
  fontSize: "calc($logo * 1)",
  fontWeight: "$bold",
  display: "grid",
  lineHeight: 0.9,
  letterSpacing: "0.025rem",
  small: {
    fontSize: "0.75em",
    letterSpacing: "0.025em",
  },
});

const ThemeButton = styled(Toggle.Root, {
  all: "unset",
  width: 15,
  height: 15,
  position: "relative",
  cursor: "pointer",
  color: "$textHighContrast",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 40,
    height: 40,
  },
});

const Title = styled("h1", {
  margin: "0 auto",
  textAlign: "center",
  fontSize: "clamp(3.5rem, 1.25rem + 5vw, 6.25rem)",
  lineHeight: 1.35,
  fontWeight: "$bold",
  marginBottom: "1.35rem",
  letterSpacing: "-0.02em",

  small: {
    fontSize: "0.5em",
    color: "$textLowContrast",
  },

  "@bp1": {
    px: "1rem",
    fontSize: "2.5rem",
    span: {
      display: "none",
    },
  },
});

const CTA = styled("a", {
  all: "unset",
  display: "inline-block",
  padding: "0.75rem 1.25rem",
  fontSize: "1rem",
  fontWeight: "$semiBold",
  background: '$textHighContrast',
  color: "$block",
  borderRadius: "1.5em",
  marginBottom: "5.05rem",
  cursor: "pointer",
  outlineOffset: '2px',
  transformOrigin: '50%',
  transition: 'transform 0.25s ease, outline 0.2s ease',

  '&:hover, &:focus-visible': {
    transform: 'scale(1.025)',
  },

  '&:focus-visible': {
    outline: '2px solid $textHighContrast',
    outlineOffset: '2px',
  },
  
  "&:active": {
    transform: 'scale(0.975)',
  },
});

const Bio = styled("div", {
  width: "95%",
  maxWidth: 1260,
  mx: "auto",
  display: "flex",
  justifyContent: "center",
  background: "$block",
  height: "100%",
  borderTopLeftRadius: "1.5rem",
  borderTopRightRadius: "1.5rem",
  paddingTop: "2rem",
});

const BioList = styled("ul", {
  display: "grid",
  gridAutoFlow: "column",
  maxWidth: 690,
  gridTemplateColumns: "1fr 1fr 1fr",
  gridColumnGap: "6.25rem",
  listStyle: "none",
  padding: 0,

  "@bp1": {
    padding: 0,
    gridTemplateColumns: "1fr",
    gridAutoFlow: 'row',
    gridRowGap: "3.125rem",
  },
});

const BioEntry = styled("li", {
  display: 'grid',
  justifyContent: 'center',

  '> div': {
    display: "grid",
    gridRowGap: "2rem",
    placeItems: "start",
    gridAutoRows: "min-content",
  },

  "@bp1": {
    display: 'flex',
    '> div': {
      width: '100%',
      gridRowGap: "1rem",
    },
  },
});

const BioEntryTitle = styled("h2", {
  fontSize: "$body",
  color: '$textHighContrast',
  fontWeight: "$bold",
  margin: 0,
  backgroundColor: '$uiBg'
});

const BioEntryEntry = styled("p", {
  fontSize: "$body",
  margin: 0,
  color: "$textHighContrast",
  textDecoration: "none",
});

const StyledLinkSvg = styled("svg", {
  color: "$textLowContrast",
});

function LinkIcon() {
  return (
    <StyledLinkSvg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </StyledLinkSvg>
  );
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
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  React.useEffect(() => {
    const method = isDarkMode ? "add" : "remove";
    document.body.classList[method](darkTheme);
  }, [isDarkMode]);

  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsDarkMode(e.matches);
      });
  }, []);

  return (
    <>
      <Nav>
        <Logo>
          Darko. <small>Efremov</small>
        </Logo>
        <ThemeButton pressed={isDarkMode} onPressedChange={setIsDarkMode}>
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </ThemeButton>
      </Nav>
      <Title>
        Front-end Engineer <br />
        <small>
          <span>working</span> at
        </small>{" "}
        StreamElements
      </Title>
      <CTA
        // className={darkTheme}
        href={`mailto:workwithme@darko.mk?subject=${mailSubject}&body=${mailBody}`}
      >
        Work with me
      </CTA>
      <Bio>
        <BioList>
          <BioEntry css={{ minWidth: 195 }}>
            <div>
              <BioEntryTitle className={lightTheme}>Span</BioEntryTitle>
              <BioEntryEntry>
                {new Date().getFullYear() - new Date(2016, 0, 1).getFullYear()}+
                years at current unicorn company
              </BioEntryEntry>
              <BioEntryEntry>Years spent on trial and error</BioEntryEntry>
              <BioEntryEntry>Born March 21, 1996</BioEntryEntry>
            </div>
          </BioEntry>
          <BioEntry>
            <div>
              <BioEntryTitle className={lightTheme}>Background</BioEntryTitle>
              <BioEntryEntry>Self/Community taught</BioEntryEntry>
              <BioEntryEntry>Computer Science</BioEntryEntry>
            </div>
          </BioEntry>
          <BioEntry>
            <div>
              <BioEntryTitle className={lightTheme}>Presence</BioEntryTitle>
              <BioEntryEntry
                as="a"
                href="https://github.com/darko"
                target="_blank"
              >
                Github <LinkIcon />
              </BioEntryEntry>
              <BioEntryEntry
                as="a"
                href="https://www.instagram.com/darko_efremov"
                target="_blank"
              >
                Instagram <LinkIcon />
              </BioEntryEntry>
              <BioEntryEntry
                as="a"
                href="https://twitter.com/grtr_than_equal"
                target="_blank"
              >
                Twitter <LinkIcon />
              </BioEntryEntry>
            </div>
          </BioEntry>
        </BioList>
      </Bio>
    </>
  );
}

export default App;
