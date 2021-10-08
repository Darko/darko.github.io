import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { amber, amberDark, indigoA } from '@radix-ui/colors';

const { styled, globalCss, createTheme, theme } = createStitches({
  theme: {
    colors: {
      bg: indigoA.indigoA1,
      uiBg: amber.amber6,
      uiBgHover: amber.amber7,
      uiBgActive: amber.amber8,
      onUiText: amberDark.amber8,
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
      light: '400',
      regular: '500',
      medium: '600',
      semiBold: '700',
      bold: '800'
    }
  },
  media: {
    bp1: '(max-width: 699px)'
  },
  utils: {
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value
    })
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
  theme as lightTheme
}
