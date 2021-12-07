/**
 * @format
 * @flow
 */
/* eslint-disable */
import React from 'react';
import styled, { css } from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
import { ImageProps } from 'src/types';

export const DynamicImage = styled.Image<ImageProps>`
  ${props =>
    props.dynamic &&
    css`
      width: ${scale(props.width ? props.width : 20)}px;
      height: ${verticalScale(props.height ? props.height : 20)}px;
      border-radius: ${scale(props.bR ? props.bR : 0)}px;
      resize-mode: ${props.iRM ? props.iRM : 'contain'};
      margin-horizontal: ${scale(props.mH ? props.mH : 0)}px;
      margin-vertical: ${verticalScale(props.mV ? props.mV : 0)}px;
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
      margin-bottom: ${scale(props.mB ? props.mB : 0)}px;
      margin-start: ${scale(props.mS ? props.mS : 0)}px;
      position: ${props.pOS ? props.pOS : 'relative'};
      top: ${scale(props.top ? props.top : 0)}px;
      bottom: ${scale(props.bot ? props.bot : 0)}px;
      right: ${scale(props.rht ? props.rht : 0)}px;
      left: ${scale(props.lef ? props.lef : 0)}px;
      transform: ${props.trans ? `rotate(${props.trans})` : `rotate(0deg)`};
    `}
  ${props =>
    props.dynamicAlign &&
    css`
      align-self: ${props.aLS ? props.aLS : 'center'};
    `}
`;

export const DynamicBackgroundImage = styled.ImageBackground<ImageProps>`
  ${props =>
    props.dynamic &&
    css`
      width: ${props.width ? props.width : 0}px;
      height: ${props.height ? props.height : 0}px;
      border-radius: ${props.bR ? props.bR : 0}px;
      resize-mode: ${props.iRM ? props.iRM : 'cover'};
      margin-horizontal: ${props.mH ? props.mH : 0}px;
      margin-vertical: ${props.mV ? props.mV : 0}px;
      margin-top: ${scale(props.mT ? props.mT : 0)}px;
      margin-start: ${scale(props.mS ? props.mS : 0)}px;
    `},
`;
