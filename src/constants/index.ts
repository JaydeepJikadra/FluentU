/**
 * @format
 * @flow
 */
import { Dimensions } from 'react-native';
import { isIos } from 'src/utils/functions';
//############################################################
//NOTE: SCREEN TITLE
//############################################################
export const screenTitle = {
  LEARN: 'Learn',
};

//############################################################
//NOTE: TIME-ZONE
//############################################################
export const TimeZone = {
  clientTimeZone: 'Asia/Tokyo',
};

//############################################################
//NOTE: FONTS NAME
//############################################################
export const font = isIos() ? 'Avenir' : 'Roboto';
export const fontsName = {
  H1_BLACK: 'H1Black',
  H2_BLACK: 'H2Black',
  H3_BLACK: 'H3Black',
  H4_BLACK: 'H4Black',
  H5_BLACK: 'H5Black',
  H6_BLACK: 'H6Black',
  H1_BOLD: 'H1Bold',
  H2_BOLD: 'H2Bold',
  H3_BOLD: 'H3Bold',
  H4_BOLD: 'H4Bold',
  H5_BOLD: 'H5Bold',
  H6_BOLD: 'H6Bold',
  H1_LIGHT: 'H1Light',
  H2_LIGHT: 'H2Light',
  H3_LIGHT: 'H3Light',
  H4_LIGHT: 'H4Light',
  H5_LIGHT: 'H5Light',
  H6_LIGHT: 'H6Light',
  H7_LIGHT: 'H7Light',
  H1_MEDIUM: 'H1Medium',
  H2_MEDIUM: 'H2Medium',
  H3_MEDIUM: 'H3Medium',
  H4_MEDIUM: 'H4Medium',
  H5_MEDIUM: 'H5Medium',
  H6_MEDIUM: 'H6Medium',
  H1_REGULAR: 'H1Regular',
  H2_REGULAR: 'H2Regular',
  H3_REGULAR: 'H3Regular',
  H4_REGULAR: 'H4Regular',
  H5_REGULAR: 'H5Regular',
  H6_REGULAR: 'H6Regular',
  H7_REGULAR: 'H7Regular',
  H1_THIN: 'H1Thin',
  H2_THIN: 'H2Thin',
  H3_THIN: 'H3Thin',
  H4_THIN: 'H4Thin',
  H5_THIN: 'H5Thin',
  H6_THIN: 'H6Thin',
  H1_PAGE_TITLE_SEMI_BOLD: 'H1PageSemiBold',
  H2_PAGE_TITLE_SEMI_BOLD: 'H2PageSemiBold',
  H3_PAGE_TITLE_SEMI_BOLD: 'H3PageSemiBold',
  H4_PAGE_TITLE_SEMI_BOLD: 'H4PageSemiBold',
  H5_PAGE_TITLE_SEMI_BOLD: 'H5PageSemiBold',
  H6_PAGE_TITLE_SEMI_BOLD: 'H6PageSemiBold',
  H7_PAGE_TITLE_SEMI_BOLD: 'H7PageSemiBold',
  BODY: 'Body',
  PLACE_HOLDER: 'PlaceHolder',
  SMALL: 'Small',
  TINY: 'Tiny',
};

//############################################################
//NOTE: COMMON DIMENSION
//############################################################
export const heights = {
  headerHeight: 80,
  viewHeight: Dimensions.get('window').height - 80,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  headerParallaxHeight: Dimensions.get('window').height / 3,
};
