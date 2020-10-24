declare module 'styled-theme' {
  import type { MergeTypes } from 'utils';

  type StyledThemeProps = {
    theme: StyledTheme;
  };

  type StyledTheme = {
    button: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    cardWrapper: {
      borderColor: string;
    };
    link: {
      color: string;
      hoverColor: string;
    };
  };

  type Colors = {
    black: {
      blackBasic: '#000';
      black800: '#474A57';
      black700: '#969BAB';
      black300: '#9FA4B4';
      black200: '#EEEFF4';
      black100: '#F4F5F7';
    };
    white: {
      whiteBasic: '#fff';
    };
    blue: {
      blueBasic: '#1947E5';
      blue800: '#8094FF';
      blue100: '#E9E7FC';
    };
    pink: {
      pinkBasic: '#FF89BB';
      pink800: '#FFC7DE';
      pink100: '#FFF3F8';
    };
    yellow: {
      yellowBasic: '#FFBD12';
      yellow800: '#FFD465';
      yellow100: '#FFF4CC';
    };
    green: {
      greenBasic: '#00C6AE';
      green800: '#61E4C5';
      green100: '#D6FCF7';
    };
    red: {
      redBasic: '#F95A2C';
      red800: '#FF9692';
      red100: '#FFE8E8';
    };
  };

  type ListedColors = MergeTypes<
    Colors['black'] &
      Colors['white'] &
      Colors['blue'] &
      Colors['pink'] &
      Colors['yellow'] &
      Colors['green'] &
      Colors['red']
  >;

  export { StyledTheme, StyledThemeProps, Colors, ListedColors };
}
