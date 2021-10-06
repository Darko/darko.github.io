import { createStitches } from '@stitches/react';
import { amber, amberDark, indigoA } from '@radix-ui/colors';

const { styled, globalCss, createTheme, config } = createStitches({
  theme: {
    colors: {
      bg: indigoA.indigoA1,
      uiBg: amber.amber6,
      uiBgHover: amber.amber7,
      uiBgActive: amber.amber8,
      onUiText: amberDark.amber7,
      textLowContrast: 'hsl(0 0% 0% / 0.5)',
      textHighContrast: 'hsl(0 0% 0% / 0.87)'
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

const lightTheme = createTheme('light-theme', {
  colors: {
    ...config.theme.colors
  }
});
const darkTheme = createTheme('dark-theme',{
  colors: {
    bg: 'hsl(0 0% 0% / 1)',
    textLowContrast: 'hsl(0 0% 100% / 0.5)',
    textHighContrast: 'hsl(0 0% 100% / 0.87)'
  }
});

export {
  styled,
  globalCss,
  darkTheme,
  lightTheme
}
