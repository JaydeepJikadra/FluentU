/**
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService, { navigationRef } from 'src/lib/NavigationService';
import React, { useEffect } from 'react';
import LearnStack from 'src/routes/learn';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'styled-components/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { lightTheme } from 'src/constants/theme';
import 'src/i18n';

enableScreens();

export default function Root() {
  //############################################################
  //NOTE: LIFE CYCLE METHOD
  //############################################################
  useEffect(() => {
    NavigationService.isReady = false;
  }, []);

  return (
    <RootSiblingParent>
      <NavigationContainer
        ref={navigationRef}
        theme={lightTheme}
        onReady={() => {
          NavigationService.isReady = true;
        }}
      >
        <ThemeProvider theme={lightTheme}>
          <LearnStack />
        </ThemeProvider>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
