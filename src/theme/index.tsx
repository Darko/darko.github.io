import { createStitches } from '@stitches/react';
import { amberA, grayA, indigoA, indigoDarkA, grayDarkA } from '@radix-ui/colors';
// import { amber, amberA, amberDarkA } from '@radix-ui/colors';
// import type * as Stitches from '@stitches/react';

const { styled, globalCss, createTheme } = createStitches({
  theme: {
    colors: {
      bg: indigoA.indigoA1,
      uiBg: amberA.amberA6,
      uiBgHover: amberA.amberA7,
      uiBgActive: amberA.amberA8,
      textLowContrast: grayA.grayA9,
      textHighContrast: indigoA.indigoA12
    },
    fonts: {
      base: 'Silka'
    },
    fontSizes: {
      body: 16,
      logo: '1.125rem',
      heading: '4.5rem',
      subheading: '2rem'
    },
    fontWeights: {
      bold: 'bold',
      regular: '500',
      light: '400'
    }
  }
});

console.log(indigoDarkA);

const darkTheme = createTheme('dark-theme',{
  colors: {
    bg: indigoDarkA.indigoA1,
    textLowContrast: grayDarkA.grayA9,
    textHighContrast: indigoDarkA.indigoA12
  }
})

export {
  styled,
  globalCss,
  darkTheme
}
