import { Colors, ListedColors } from 'styled-theme';

const black: Colors['black'] = {
  blackBasic: '#000',
  black800: '#474A57',
  black700: '#969BAB',
  black300: '#9FA4B4',
  black200: '#EEEFF4',
  black100: '#F4F5F7'
};

const white: Colors['white'] = {
  whiteBasic: '#fff'
};

const blue: Colors['blue'] = {
  blueBasic: '#1947E5',
  blue800: '#8094FF',
  blue100: '#E9E7FC'
};

const pink: Colors['pink'] = {
  pinkBasic: '#FF89BB',
  pink800: '#FFC7DE',
  pink100: '#FFF3F8'
};

const yellow: Colors['yellow'] = {
  yellowBasic: '#FFBD12',
  yellow800: '#FFD465',
  yellow100: '#FFF4CC'
};

const green: Colors['green'] = {
  greenBasic: '#00C6AE',
  green800: '#61E4C5',
  green100: '#D6FCF7'
};

const red: Colors['red'] = {
  redBasic: '#F95A2C',
  red800: '#FF9692',
  red100: '#FFE8E8'
};

const colors: ListedColors = {
  ...black,
  ...white,
  ...blue,
  ...pink,
  ...yellow,
  ...green,
  ...red
};

export default colors;
