/* eslint-disable import/no-anonymous-default-export */
import { colors } from '@material-ui/core';
const white = '#FFFFFF';
const black = '#000000';
export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    primary: '#f2e1b7',
    secondary: '#33b890',
    tertiary: '#9ac48d',
    quaternary: '#7ec3e6',
    quinary: '#e7140d',
  },
};