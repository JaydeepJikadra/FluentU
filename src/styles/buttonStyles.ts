/**
 * @format
 * @flow
 */
/* eslint-disable */
import styled, { css } from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import { ButtonProps } from 'src/types';

export const FooterButton = styled.TouchableOpacity<ButtonProps>`
  border: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.secondaryColor};
  border: 2px solid ${props => props.theme.secondaryColor};
  border-radius: ${scale(3)}px;
  ${props =>
    props.dynamic &&
    css`
      padding-vertical: ${scale(props.pV ? props.pV : 0)}px;
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      margin-vertical: ${scale(props.mV ? props.mV : 0)}px;
      border-color: ${props.borderColor
        ? props.borderColor
        : props.theme.secondaryColor};
      background-color: ${props.color
        ? props.color
        : props.theme.secondaryColor};
    `}
  ${props =>
    props.noBorder &&
    css`
      border: 0px;
      border-radius: 0px;
      padding: 0;
      margin: 1px;
    `}
`;

export const DynamicButton = styled.TouchableOpacity<ButtonProps>`
  ${props =>
    props.dynamic &&
    css`
      text-align: center;
      color: ${props.color ? props.color : props.theme.secondaryColor};
      padding-vertical: ${scale(props.pV ? props.pV : 0)}px;
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      margin-vertical: ${scale(props.mV ? props.mV : 0)}px;
      border-radius: ${scale(props.bR ? props.bR : 0)}px;
      background-color: ${props.bGC ? props.bGC : 'transparent'};
      border-right-color: ${props.bRC ? props.bRC : 'transparent'};
      border-top-width: ${scale(props.bT ? props.bT : 0)}px;
      border-right-width: ${scale(props.bRT ? props.bRT : 0)}px;
    `}
  ${props =>
    props.dynamicWidth &&
    css`
      width: ${scale(props.width ? props.width : 0)}px;
    `}
  ${props =>
    props.dynamicFlex &&
    css`
      flex: ${props.flx ? props.flx : 0};
    `}
`;

export const WithoutFeedBackButton = styled.TouchableWithoutFeedback<ButtonProps>`
  ${props =>
    props.dynamic &&
    css`
      text-align: center;
      color: ${props.color ? props.color : props.theme.secondaryColor};
      padding-vertical: ${scale(props.pV ? props.pV : 0)}px;
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      margin-vertical: ${scale(props.mV ? props.mV : 0)}px;
      border-radius: ${scale(props.bR ? props.bR : 0)}px;
      background-color: ${props.bGC ? props.bGC : props.theme.secondaryColor};
      border-right-color: ${props.bRC ? props.bRC : props.theme.secondaryColor};
      border-top-width: ${scale(props.bT ? props.bT : 0)}px;
      border-right-width: ${scale(props.bRT ? props.bRT : 0)}px;
      width: ${scale(props.width ? props.width : 0)}px;
    `}
`;

export const ProfilePictureButton = styled.TouchableOpacity<ButtonProps>`
  elevation: 5;
  ${props =>
    props.dynamic &&
    css`
      width: ${scale(props.width ? props.width : 0)}px;
      height: ${scale(props.height ? props.height : 0)}px;
      borderRadius:  ${scale(props.bR ? props.bR : 0)}px;
      border-width: ${scale(props.bT ? props.bT : 0)}px;
      background-color: ${props.bGC ? props.bGC : props.theme.secondaryColor};
      shadow-color: ${props.bGC ? props.bGC : props.theme.secondaryColor};
      shadow-offset: {
        width: 0,
        height: ${scale(2)}px,
      };  
      shadow-opacity: ${scale(props.sO ? props.sO : 0)};
      shadow-radius: ${scale(props.sR ? props.sR : 0)}px;
      color: ${props.color ? props.color : props.theme.secondaryColor};
      border-color: ${
        props.borderColor ? props.borderColor : props.theme.secondaryColor
      };
      margin-bottom: ${scale(props.mB ? props.mB : 0)}px;
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
    `}
`;
