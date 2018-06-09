const colors = {
  primary: alpha => `rgba(102, 34, 204, ${alpha === undefined ? 1 : alpha})`,
  black: alpha => `rgba(0, 0, 0, ${alpha === undefined ? 1 : alpha})`
}

const theme = {
  colors: {
    primary: alpha => colors.primary(alpha === undefined ? 1 : alpha),
    primaryHue: colors.primary(0.2),
    title: colors.black(0.87),
    copy: colors.black(0.77),
    navLink: colors.black(0.57),
    icon: colors.black(0.3),
    iconActive: colors.primary
  },
  typography: {
    title: {
      fontFamily: `'Playfair Display', serif`
    },
    copy: {
      fontFamily: `'Catamaran', sans-serif`
    }
  }
}

export default theme;