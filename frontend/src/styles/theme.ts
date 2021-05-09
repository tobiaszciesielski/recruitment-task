import './fonts/fonts.css';

export type ThemeType = typeof theme; // This is the type definition for my theme object.

const theme = {
  primary: 'rgba(0, 0, 0, 0.8);',
  secondary: 'rgba(0, 0, 0, 0.6);',
  touch: '#1FCE8B',
  grey: '#F4F4F4',
  outline: '#D7D7D7',
  background: '#FFF',
  typography: {
    robotoRegular: 'Roboto Regular',
    ralewayRegular: 'Raleway Regular',
  },
};

export default theme;
