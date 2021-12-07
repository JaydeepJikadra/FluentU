/**
 * @format
 * @flow
 */
import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean;
    primaryColor: string;
    primaryColor100Alpha: string;
    primaryColor200Alpha: string;
    primaryColor400Alpha: string;
    primaryColor500Alpha: string;
    secondaryColor: string;
    secondaryColor50Alpha: string;
    secondaryColor100Alpha: string;
    secondaryColor200Alpha: string;
    secondaryColor300Alpha: string;
    secondaryColor400Alpha: string;
    secondaryColor600Alpha: string;
    secondaryColor700Alpha: string;
    secondaryColor800Alpha: string;
    secondaryColor900Alpha: string;
    primaryBackgroundColor: string;

    primaryTextColor: string;

    searchBackgroundColor: string;
    iconColor: string;
    placeHolderColor: string;
    searchTextColor: string;

    textInputLabelColor: string;
    textInputTextColor: string;

    cardBackGroundColor: string;

    dividerColor: string;

    primaryTextLightColor: string;
    primaryTextErrorColor: string;
    secondaryTextColor: string;
    secondaryTextErrorColor?: string;
    secondaryTextLightColor: string;
    primaryBorderColor: string;
    secondaryBorderColor: string;
    primaryShadowColor: string;
    shadowColor1: string;
    shadowColor2: string;
    shadowColor3: string;
    shadowColor4: string;

    primaryPlaceHolderColor: string;
    borderColor1: string;
    borderColor2: string;
    gradientColor1: string;
    gradientColor2: string;
    gradientColor3: string;
    gradientColor4: string;
    textColor1: string;
    protocolStatusColor1: string;
    protocolStatusColor2: string;
    buttonColor1: string;

    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
  }
}

export const lightTheme: DefaultTheme = {
  dark: false,
  primaryColor: '#9575CD',
  primaryColor100Alpha: '#D1C4E9',
  primaryColor200Alpha: '#B39DDB',
  primaryColor400Alpha: '#7E57C2',
  primaryColor500Alpha: '#673AB7',
  secondaryColor: '#9E9E9E',
  secondaryColor50Alpha: '#FAFAFA',
  secondaryColor100Alpha: '#F5F5F5',
  secondaryColor200Alpha: '#EEEEEE',
  secondaryColor300Alpha: '#E0E0E0',
  secondaryColor400Alpha: '#BDBDBD',
  secondaryColor600Alpha: '#757575',
  secondaryColor700Alpha: '#616161',
  secondaryColor800Alpha: '#424242',
  secondaryColor900Alpha: '#212121',

  primaryBackgroundColor: '#EEEEEE',
  primaryTextErrorColor: '#EB5B76',
  primaryShadowColor: '#EEEEEE',

  primaryTextColor: '#FFFFFF',

  searchBackgroundColor: '#E0E0E0', // *
  iconColor: '#424242', // *
  placeHolderColor: '#818181', //*
  searchTextColor: '#212121', //*
  textInputLabelColor: '#9A9A9A', // *
  textInputTextColor: '#424242', // *

  cardBackGroundColor: '#FAFAFA', //*

  dividerColor: '#424242', //*

  primaryTextLightColor: '#636466',
  secondaryTextColor: '#000000',
  secondaryTextLightColor: '#AEAEB2',
  primaryBorderColor: '#C7C7CC',
  secondaryBorderColor: '#f8f8ff',
  primaryPlaceHolderColor: '#C7C7CC',
  shadowColor1: '#663896',
  shadowColor2: '#558b6f',
  shadowColor3: '#D1D1D6',
  shadowColor4: '#000000',
  borderColor1: '#ECECEC',
  borderColor2: '#A7B1B8',
  gradientColor1: '#663896',
  gradientColor2: '#663896',
  gradientColor3: '#663896',
  gradientColor4: '#663896',
  textColor1: '#010A3F',

  protocolStatusColor1: '#46A44D',
  protocolStatusColor2: '#B00020',
  buttonColor1: '#FEB72C',
  colors: {
    primary: '#9575CD',
    background: '#EEEEEE',
    card: '#EEEEEE',
    text: '#424242',
    border: '#000000',
    notification: '#B00020',
  },
};

export const darkTheme: DefaultTheme = {
  dark: true,
  primaryColor: '#9575CD',
  primaryColor100Alpha: '#D1C4E9',
  primaryColor200Alpha: '#B39DDB',
  primaryColor400Alpha: '#7E57C2',
  primaryColor500Alpha: '#673AB7',
  secondaryColor: '#BDBDBD', // *
  secondaryColor50Alpha: '#FAFAFA',
  secondaryColor100Alpha: '#F5F5F5',
  secondaryColor200Alpha: '#EEEEEE',
  secondaryColor300Alpha: '#757575', // *
  secondaryColor400Alpha: '#BDBDBD',
  secondaryColor600Alpha: '#757575',
  secondaryColor700Alpha: '#616161',
  secondaryColor800Alpha: '#FFFFFF', // *
  secondaryColor900Alpha: '#FFFFFF', // *

  primaryBackgroundColor: '#000000', // *
  primaryShadowColor: '#000000', // *
  primaryTextErrorColor: '#EB5B76', // *

  primaryTextColor: '#FFFFFF', // *

  searchBackgroundColor: '#424242', // *
  iconColor: '#F5F5F5', //*
  placeHolderColor: '#BDBDBD', // *
  searchTextColor: '#FFFFFF', // *
  textInputLabelColor: '#FFFFFF', //*
  textInputTextColor: '#FFFFFF', // *

  cardBackGroundColor: '#212121', // *

  dividerColor: '#EEEEEE', //*

  primaryTextLightColor: '#efefef',
  secondaryTextColor: '#FFFFFF',
  secondaryTextLightColor: '#AEAEB2',
  primaryBorderColor: '#C7C7CC',
  secondaryBorderColor: '#f8f8ff',
  primaryPlaceHolderColor: '#C7C7CC',
  shadowColor1: '#558b2f',
  shadowColor2: '#558b6f',
  shadowColor3: '#D1D1D6',
  shadowColor4: '#000000',
  borderColor1: '#ECECEC',
  borderColor2: '#A7B1B8',
  gradientColor1: '#FFFFFF',
  gradientColor2: '#FFFFFF',
  gradientColor3: '#FFFFFF',
  gradientColor4: '#FFFFFF',
  textColor1: '#010A3F',
  protocolStatusColor1: '#46A44D',
  protocolStatusColor2: '#B00020',
  buttonColor1: '#FEB72C',
  colors: {
    primary: '#9575CD',
    background: '#616161',
    text: '#FFFFFF',
    card: '#616161',
    border: '#FFFFFF',
    notification: '#CF6679',
  },
};
