/**
 * @format
 * @flow
 */
/* eslint-disable */
import React from 'react';
import styled, { css } from 'styled-components/native';
import { heights } from 'src/constants';
import { scale, verticalScale } from 'react-native-size-matters';
import { ViewProps, CommonButtonViewProps } from 'src/types';
import * as C from 'src/constants';
import { isAndroid } from '../utils/functions';

export const SafeAreaView = styled.SafeAreaView<ViewProps>`
  flex: 1;
  background: ${props => props.theme.primaryBackgroundColor};
`;

export const MainDiv = styled.View<ViewProps>`
  flex: 1;
  ${props =>
    props.dynamic &&
    css`
      margin-vertical: ${scale(props.mV ? props.mV : 0)}px;
      margin-top: ${verticalScale(props.mT ? props.mT : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      background: ${props.bGC ? props.bGC : props.theme.primaryColor};
    `}
`;

export const ProfileView = styled.View<ViewProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${props =>
    props.dynamic &&
    css`
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      margin-vertical: ${scale(props.mV ? props.mV : 5)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 5)}px;
    `},
`;

export const NoDataFound = styled.View<ViewProps>`
  margin-top: ${scale(heights.screenHeight / 4)}px;
`;

export const FooterView = styled.View<ViewProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${scale(20)}px;
  ${props =>
    props.dynamicMargin &&
    css`
      margin-top: ${props.mT}px;
    `}
`;

export const OfflineView = styled.View<ViewProps>`
  background-color: ${props => props.theme.primaryTextErrorColor};
  height: ${scale(30)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  width: ${heights.screenWidth}px;
  top: 0;
  z-index: 100;
`;

export const DynamicView = styled.View<ViewProps>`
  ${props =>
    props.dynamic &&
    css`
      justify-content: ${props.jC ? props.jC : 'space-between'};
      margin-vertical: ${scale(props.mV ? props.mV : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      padding-vertical: ${scale(props.pV ? props.pV : 0)}px;
      flex-direction: ${props.fD ? props.fD : 'row'};
      align-items: ${props.aLIT ? props.aLIT : 'center'};
      margin-bottom: ${verticalScale(props.mB ? props.mB : 0)}px;
      border: ${props.bW ? props.bW : 0}px solid
        ${props.bC ? props.bC : props.theme.secondaryColor};
      border-bottom-left-radius: ${scale(props.bBLR ? props.bBLR : 0)}px;
      border-bottom-right-radius: ${scale(props.bBRR ? props.bBRR : 0)}px;
      border-top-left-radius: ${scale(props.bTLR ? props.bTLR : 0)}px;
      border-top-right-radius: ${scale(props.bTRR ? props.bTRR : 0)}px;
      border-radius: ${scale(props.bR ? props.bR : 0)}px;
      background-color: ${props.bGC ? props.bGC : 'transparent'};
      z-index: 50;
    `}
  ${props =>
    props.dynamicPosition &&
    css`
      position: ${props.pOS ? props.pOS : 'relative'};
      top: ${scale(props.top ? props.top : 0)}px;
      bottom: ${scale(props.bot ? props.bot : 0)}px;
      right: ${scale(props.rht ? props.rht : 0)}px;
      left: ${scale(props.lef ? props.lef : 0)}px;
    `}
  ${props =>
    props.dynamicMargin &&
    css`
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
      margin-end: ${scale(props.mE ? props.mE : 0)}px;
      margin-start: ${scale(props.mS ? props.mS : 0)}px;
      padding-bottom: ${scale(props.pB ? props.pB : 0)}px;
      padding-top: ${verticalScale(props.pT ? props.pT : 0)}px;
    `}
    ${props =>
    props.dynamicFlex &&
    css`
      flex: ${verticalScale(props.flx ? props.flx : 0)};
    `}
    ${props =>
    props.dynamicHeight &&
    css`
      height: ${Math.floor(props.height ? props.height : 0)}%;
    `}  
      ${props =>
    props.fixHeight &&
    css`
      height: ${props.height ? props.height : 0}px;
    `}
    ${props =>
    props.fixWidth &&
    css`
      width: ${props.width ? props.width : 0}px;
    `}
    ${props =>
    props.dynamicAlign &&
    css`
      align-self: ${props.aLS ? props.aLS : 'center'};
    `}
    ${props =>
    props.dynamicShadow &&
    css`
      shadow-color: ${props.sC ? props.sC : 'transparent'};
      shadow-opacity: ${props.sO ? props.sO : 0};
      shadow-radius: ${scale(props.sR ? props.sR : 1)}px;
      shadow-offset: {
        width: ${scale(props.sOFW ? props.sOFW : 0)}px,
        height: ${scale(props.sOFH ? props.sOFH : 0)}px
      }
      elevation:  ${scale(props.eL ? props.eL : 1)};
    `}
    ${props =>
    props.dynamicBorderWidth &&
    css`
      border-bottom-width: ${props.bBW ? props.bBW : 0};
      border-top-width: ${props.bTW ? props.bTW : 0};
      border-right-width: ${props.bRW ? props.bRW : 0};
      border-left-width: ${props.bLW ? props.bLW : 0};
    `}
`;
export const ShadowView = styled.View<ViewProps>`
  ${props =>
    props.dynamic &&
    css`
      justify-content: ${props.jC ? props.jC : 'space-between'};
      box-shadow: ${scale(props.hOffSet ? props.hOffSet : 0)}px
        ${scale(props.vOffSet ? props.vOffSet : 0)}px
        ${scale(props.blur ? props.blur : 0)}px ${props.sC};
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      padding-vertical: ${verticalScale(props.pV ? props.pV : 0)}px;
      margin-vertical: ${verticalScale(props.mV ? props.mV : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      border-radius: ${scale(props.bR ? props.bR : 0)}px;
      background-color: ${props.bC ? props.bC : props.theme.primaryColor};
      align-items: ${props.aLIT ? props.aLIT : 'center'};
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
    `}
  ${props =>
    props.isAndroid &&
    css`
      shadow-offset: {        
        width: ${scale(2)}px;,
        height: ${verticalScale(2)}px;,
      };
      shadow-opacity: 1.0;
      shadow-radius: ${3.48}px;
      elevation: ${scale(5)}px;
  `}
  ${props =>
    props.dynamicHeight &&
    css`
      height: ${Math.floor(props.height ? props.height : 0)}%;
    `}
    ${props =>
    props.dynamicFlex &&
    css`
      flex: ${props.flx ? props.flx : 0};
    `}
    ${props =>
    props.dynamicWidth &&
    css`
      width: ${props.width ? props.width : 0}%;
    `}
      ${props =>
    props.fixHeight &&
    css`
      height: ${Math.floor(props.height ? props.height : 0)}px;
    `}
`;

export const DynamicBorder = styled.View<ViewProps>`
  ${props =>
    props.dynamic &&
    css`
      width: ${scale(props.width ? props.width : heights.screenWidth)}px;
      margin-vertical: ${verticalScale(props.mV ? props.mV : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
      margin-start: ${scale(props.mS ? props.mS : 0)}px;
      margin-end: ${scale(props.mE ? props.mE : 0)}px;
      margin-bottom: ${scale(props.mB ? props.mB : 0)}px;
      border: ${scale(props.bW ? props.bW : 0)}px solid
        ${props.bC ? props.bC : props.theme.secondaryColor};
    `}
`;

export const CommonHeaderView = styled.View<ViewProps>`
  height: ${scale(60)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primaryBackgroundColor};
  padding-horizontal: ${scale(12)}px;
  margin-bottom: ${scale(4)}px;
  shadow-color: ${props => props.theme.primaryShadowColor};
  shadow-offset: {
    width: 0,
    height: ${scale(4)}px;
  };
  shadow-opacity: ${0};
  shadow-radius: ${1.9}px;  
`;

export const CommonButtonView = styled.View<CommonButtonViewProps>`
  shadow-color:  ${props => props.theme.primaryShadowColor};
  shadow-offset: {
    width: 0,
    height: ${scale(4)}px,
  };  
  shadow-radius: ${1.9}px;
  elevation: 0;
  ${props =>
    props.status &&
    props.buttonType &&
    css`
      shadow-opacity: ${props.status === 1 && props.buttonType === 'clear'
        ? 0.2
        : 0};
    `}
`;
