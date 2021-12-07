/**
 * @format
 * @flow
 */
/* eslint-disable */
import styled, {css} from 'styled-components/native';
import {scale} from 'react-native-size-matters';
import {InputProps} from "src/types"

export const Input = styled.TextInput<InputProps>`
  padding: ${scale(8)}px;
  margin: ${scale(8)}px;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-radius: ${scale(3)}px;
  ${props =>
    props.dynamicBorderColor &&
    css`
      border: 2px solid ${props.borderColor};
    `}
`;

export const DyInput = styled.TextInput<InputProps>`
  ${props =>
    props.dynamic &&
    css`
      margin-vertical: ${scale(props.mV ? props.mV : 0)}px;
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      padding-horizontal: ${scale(props.pH ? props.pH : 0)}px;
      padding-vertical: ${scale(props.pV ? props.pV : 0)}px;
      margin-bottom: ${scale(props.mB ? props.mB : 0)}px;
      border-radius: ${scale(props.bR ? props.bR : 0)}px;
      border: ${props.bW ? props.bW : 0}px solid
        ${props.bC ? props.bC : props.theme.secondaryColor};
      border-bottom-left-radius: ${scale(
        props.bBLR ? props.bBLR : 0,
      )}px;
      border-bottom-right-radius: ${scale(
        props.bBRR ? props.bBRR : 0,
      )}px;
      height: ${scale(props.height ? props.height : 0)}px;
      background-color: ${props.bGC ? props.bGC : 'transparent'};
    `}
`;
