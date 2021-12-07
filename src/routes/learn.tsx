/**
 * @format
 * @flow
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Learn from 'src/containers/Learn';
import { defaultOptions } from 'src/routes/navigationTheme';
import { screenTitle } from 'src/constants';

export type LearnStackParamList = {
  Learn: undefined;
};

const Stack = createStackNavigator();

export function LearnStack() {
  return (
    <Stack.Navigator
      initialRouteName={screenTitle.LEARN}
      screenOptions={{ ...defaultOptions }}
    >
      <Stack.Screen name={screenTitle.LEARN} component={Learn} />
    </Stack.Navigator>
  );
}

export default LearnStack;
