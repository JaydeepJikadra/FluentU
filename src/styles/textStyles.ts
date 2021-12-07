/**
 * @format
 * @flow
 */
/* eslint-disable */
import React from 'react';
import styled, { css } from 'styled-components/native';
import { heights } from 'src/constants';
import * as C from 'src/constants';
import { scale, verticalScale } from 'react-native-size-matters';
import { TextProps } from 'src/types';

export const ErrorsText = styled.Text<TextProps>`
  font-size: ${scale(25)}px;
  font-weight: 400;
  font-family: ${C.font};
  margin-bottom: ${scale(8)}px;
  color: ${props => props.theme.secondaryTextErrorColor};
`;

export const FooterText = styled.Text<TextProps>`
  color: ${props => props.theme.secondaryTextErrorColor};
  font-size: ${scale(16)}px;
  font-family: ${C.font};
  color: ${props => props.theme.primaryTextLightColor};
  ${props =>
    props.dynamicText &&
    css`
      font-size: ${scale(props.fS)}px;
      color: ${props.color ? props.color : props.theme.secondaryTextColor};
      margin-vertical: ${scale(props.mV ? props.mV : 4)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 4)}px;
      font-weight: 500;
      opacity: ${props.opacity ? props.opacity : 1.0};
    `};
`;

export const CTAText = styled.Text<TextProps>`
  ${props =>
    props.dynamic &&
    css`
      font-family: ${props.fF ? props.fF : C.font};
      text-align: ${props.tA ? props.tA : 'center'};
      color: ${props.color ? props.color : props.theme.secondaryColor};
      font-size: ${scale(props.fS ? props.fS : 16)}px;
      color: ${props.color ? props.color : props.theme.primaryTextColor};
      margin-end: ${scale(props.mE ? props.mE : 0)}px;
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      color: ${props.color ? props.color : props.theme.secondaryColor};
      margin-vertical: ${scale(props.mV ? props.mV : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      letter-spacing: ${scale(props.lS ? props.lS : 0)};
    `},
`;

export const SectionItemText = styled.Text<TextProps>`
  width: ${scale(heights.screenWidth / 2.5)}px;
  margin-horizontal: ${scale(0.5)}px;
  font-size: ${scale(13)}px;
  color: ${props => props.theme.secondaryColor};
  font-weight: 500;
  font-family: ${C.font};
  text-align: left;
`;

const ProjectTitle = styled.Text<TextProps>`
  font-size: ${scale(20)}px;
  color: ${props => props.theme.secondaryColor};
  font-weight: 800;
  font-family: ${C.font};
  text-align: left;
  margin-vertical: ${scale(10)}px;
  margin-horizontal: ${scale(3)}px;
`;

export const SectionTitleText = styled.Text<TextProps>`
  font-size: ${scale(20)}px;
  color: ${props => props.theme.secondaryColor};
  font-weight: 500;
  font-family: ${C.font};
  text-align: left;
  background-color: ${props => props.theme.primaryColor};
`;

export const WorkTitleText = styled.Text<TextProps>`
  font-size: ${scale(20)}px;
  color: ${props => props.theme.secondaryTextColor};
  font-family: ${C.font};
  font-weight: 500;
  text-align: left;
  background-color: ${props => props.theme.primaryColor};
  margin-vertical: ${scale(3)}px;
  ${props =>
    props.dynamic &&
    css`
      font-weight: ${props.fW};
      margin-right: ${scale(props.mR)}px;
    `}
`;

export const DynamicText = styled.Text<TextProps>`
  ${props =>
    props.fontStyle === C.fontsName.H1_BLACK &&
    css`
      font-weight: 900;
      font-size: ${scale(props.fS ? props.fS : 35)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H2_BLACK &&
    css`
      font-weight: 900;
      font-size: ${scale(props.fS ? props.fS : 33)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H3_BLACK &&
    css`
      font-weight: 900;
      font-size: ${scale(props.fS ? props.fS : 24)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H4_BLACK &&
    css`
      font-weight: 900;
      font-size: ${scale(props.fS ? props.fS : 21)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H5_BLACK &&
    css`
      font-weight: 900;
      font-size: ${scale(props.fS ? props.fS : 18)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H6_BLACK &&
    css`
      font-weight: 900;
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H1_BOLD &&
    css`
      font-weight: 700;
      font-size: ${scale(props.fS ? props.fS : 35)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H2_BOLD &&
    css`
      font-weight: 700;
      font-size: ${scale(props.fS ? props.fS : 33)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H3_BOLD &&
    css`
      font-weight: 700;
      font-size: ${scale(props.fS ? props.fS : 24)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H4_BOLD &&
    css`
      font-weight: 700;
      font-size: ${scale(props.fS ? props.fS : 21)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H5_BOLD &&
    css`
      font-weight: 700;
      font-size: ${scale(props.fS ? props.fS : 18)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H6_BOLD &&
    css`
      font-weight: 700;
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.H1_LIGHT &&
    css`
      font-weight: 300;
      font-size: ${scale(props.fS ? props.fS : 35)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H2_LIGHT &&
    css`
      font-weight: 300;
      font-size: ${scale(props.fS ? props.fS : 33)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H3_LIGHT &&
    css`
      font-weight: 300;
      font-size: ${scale(props.fS ? props.fS : 24)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H4_LIGHT &&
    css`
      font-weight: 300;
      font-size: ${scale(props.fS ? props.fS : 21)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H5_LIGHT &&
    css`
      font-weight: 300;
      font-size: ${scale(props.fS ? props.fS : 18)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H6_LIGHT &&
    css`
      font-weight: 300;
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.H7_LIGHT &&
    css`
      font-weight: 300;
      font-size: ${scale(props.fS ? props.fS : 8)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.H1_MEDIUM &&
    css`
      font-weight: 500;
      font-size: ${scale(props.fS ? props.fS : 35)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H2_MEDIUM &&
    css`
      font-weight: 500;
      font-size: ${scale(props.fS ? props.fS : 33)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H3_MEDIUM &&
    css`
      font-weight: 500;
      font-size: ${scale(props.fS ? props.fS : 24)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H4_MEDIUM &&
    css`
      font-weight: 500;
      font-size: ${scale(props.fS ? props.fS : 21)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H5_MEDIUM &&
    css`
      font-weight: 500;
      font-size: ${scale(props.fS ? props.fS : 18)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H6_MEDIUM &&
    css`
      font-weight: 400;
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.H1_REGULAR &&
    css`
      font-weight: 400;
      font-size: ${scale(props.fS ? props.fS : 35)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H2_REGULAR &&
    css`
      font-weight: 400;
      font-size: ${scale(props.fS ? props.fS : 33)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H3_REGULAR &&
    css`
      font-weight: 400;
      font-size: ${scale(props.fS ? props.fS : 24)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H4_REGULAR &&
    css`
      font-weight: 400;
      font-size: ${scale(props.fS ? props.fS : 21)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H5_REGULAR &&
    css`
      font-weight: 400;
      font-size: ${scale(props.fS ? props.fS : 18)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H6_REGULAR &&
    css`
      font-weight: 400;
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H7_REGULAR &&
    css`
      font-weight: 400;
      font-size: ${scale(props.fS ? props.fS : 8)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.H1_THIN &&
    css`
      font-weight: 100;
      font-size: ${scale(props.fS ? props.fS : 35)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H2_THIN &&
    css`
      font-weight: 100;
      font-size: ${scale(props.fS ? props.fS : 33)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H3_THIN &&
    css`
      font-weight: 100;
      font-size: ${scale(props.fS ? props.fS : 24)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H4_THIN &&
    css`
      font-weight: 100;
      font-size: ${scale(props.fS ? props.fS : 21)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H5_THIN &&
    css`
      font-weight: 100;
      font-size: ${scale(props.fS ? props.fS : 18)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H6_THIN &&
    css`
      font-weight: 100;
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.H1_PAGE_TITLE_SEMI_BOLD &&
    css`
      font-weight: 600;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 35)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H2_PAGE_TITLE_SEMI_BOLD &&
    css`
      font-weight: 600;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 33)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H3_PAGE_TITLE_SEMI_BOLD &&
    css`
      font-weight: 600;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 24)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H4_PAGE_TITLE_SEMI_BOLD &&
    css`
      font-weight: 600;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 21)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H5_PAGE_TITLE_SEMI_BOLD &&
    css`
      font-weight: 600;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 18)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H6_PAGE_TITLE_SEMI_BOLD &&
    css`
      font-weight: 600;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};
  ${props =>
    props.fontStyle === C.fontsName.H7_PAGE_TITLE_SEMI_BOLD &&
    css`
      font-weight: 600;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 8)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.BODY &&
    css`
      font-weight: bold;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.PLACE_HOLDER &&
    css`
      font-weight: 400;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 14)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.SMALL &&
    css`
      font-weight: bold;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 12)}px;
    `};

  ${props =>
    props.fontStyle === C.fontsName.TINY &&
    css`
      font-weight: 500;
      font-family: ${C.font};
      font-size: ${scale(props.fS ? props.fS : 10)}px;
    `};

  ${props =>
    props.dynamic &&
    css`
      text-align: ${props.tA ? props.tA : 'center'};
      text-decoration-line: ${props.tDL ? props.tDL : 'none'};
      margin-end: ${scale(props.mE ? props.mE : 0)}px;
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      color: ${props.color ? props.color : props.theme.secondaryColor};
      margin-vertical: ${verticalScale(props.mV ? props.mV : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
      margin-bottom: ${scale(props.mB ? props.mB : 0)}px;
      padding-right: ${scale(props.pR ? props.pR : 0)}px;
      padding-top: ${scale(props.pT ? props.pT : 0)}px;
      padding-bottom: ${scale(props.pB ? props.pB : 0)}px;
      padding-left: ${scale(props.pL ? props.pL : 0)}px;
      letter-spacing: ${props.lS ? props.lS : 0}px;
      top: ${verticalScale(props.top ? props.top : 0)};
      bottom: ${scale(props.bot ? props.bot : 0)};
      left: ${scale(props.lef ? props.lef : 0)};
      right: ${scale(props.rht ? props.rht : 0)};
      position: ${props.pOS ? props.pOS : 'relative'};
      z-index: 1000;
    `}
  ${props =>
    props.dynamicAlign &&
    css`
      align-self: ${props.aS ? props.aS : 'center'};
    `}
`;

export const RegistrationPageTitle = styled.Text<TextProps>`
  font-size: ${scale(19)}px;
  font-family: ${C.font};
  color: ${props => props.theme.secondaryTextColor};
  margin-horizontal: ${scale(32)}px;
  margin-bottom: ${scale(40)}px;
  ${props =>
    props.dynamic &&
    css`
      margin-bottom: ${scale(props.mB ? props.mB : 0)}px;
    `}
`;

export const RegistrationPageSubTitle = styled.Text<TextProps>`
  font-size: ${scale(14)}px;
  font-family: ${C.font};
  color: ${props => props.theme.secondaryTextLightColor};
  margin-left: ${scale(32)}px;
  margin-bottom: ${scale(60)}px;
  text-align: left;
`;
