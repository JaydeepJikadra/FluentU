/**
 * @format
 * @flow
 */
import React, { useEffect, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as C from 'src/constants';
import { ThemeContext } from 'styled-components';
import NoNetworkComponent from 'src/components/Shared';
import { showToast } from 'src/utils/functions';
const { DynamicView, DynamicText, SafeAreaView } = require('src/styles');

export default function LearnContainer() {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  //############################################################
  //NOTE: LIFE CYCLE METHOD
  //############################################################

  useEffect(() => {
    showToast({ message: 'Hello' });
    async function initialize() {
      try {
      } catch (e) {
        // console.log('initialize -> e', e);
      }
    }
    initialize();
  }, []);

  //############################################################
  //NOTE: LIFE CYCLE METHOD
  //############################################################
  return (
    <SafeAreaView>
      <NoNetworkComponent />
      <DynamicView
        dynamic
        dynamicMargin
        dynamicFlex
        flx={1}
        jC="center"
        fD="column"
        bGC={themeContext.primaryBackgroundColor}
      >
        <ActivityIndicator
          size="large"
          color={themeContext.secondaryTextColor}
        />
        <DynamicText
          dynamic
          tA="center"
          color={themeContext.secondaryTextColor}
          fontStyle={C.fontsName.BODY}
        >
          {t('LOADING_DATA')}
        </DynamicText>
      </DynamicView>
    </SafeAreaView>
  );
}
