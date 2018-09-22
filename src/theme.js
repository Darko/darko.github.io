const primaryColor = {
  light: [102, 34, 204],
  dark: [35, 205, 160]
};

const colorg = { // stands for color generator
  primary: (alpha, theme = 'light') => {
    const [r, g, b] = primaryColor[theme];
    return `rgba(${r},${g}, ${b}, ${alpha === undefined ? 1 : alpha})`;
  },
  black: alpha => `rgba(0, 0, 0, ${alpha === undefined ? 1 : alpha})`,
  white: alpha => `rgba(255, 255, 255, ${alpha === undefined ? 1 : alpha})`,
};

const colors = {
  primary: colorg.primary,
  primaryHue: colorg.primary(0.2),
  title: colorg.black(0.87),
  copy: colorg.black(0.77),
  navLink: colorg.black(0.57),
  icon: colorg.black(0.3),
  iconActive: colorg.primary,
  background: '#ffffff',
};

const light = {
  type: 'light',
  colors,
  typography: {
    title: {
      fontFamily: '"Playfair Display", serif'
    },
    copy: {
      fontFamily: '"Catamaran", sans-serif'
    }
  },
  breakpoints: {
    medium: '42em'
  }
};

const dark = {
  ...light,
  type: 'dark',
  colors: {
    ...colors,
    background: '#1D1E30',
    title: colorg.white(0.92),
    copy: colorg.white(0.82),
    navLink: colorg.white(0.67),
    icon: colorg.white(0.3),
    primary: alpha => colorg.primary(alpha, 'dark'),
    primaryHue: colorg.primary(0.2, 'dark'),
  }
};



export default (type = 'light') => {
  if (type === 'dark') {
    return dark;
  }

  return light;
}
