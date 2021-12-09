/**
 * @format
 * @flow
 */
import React from 'react';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Feather';
import { StackNavigationOptions } from '@react-navigation/stack';
import { Badge } from 'react-native-elements';
import { scale } from 'react-native-size-matters';
import { isAndroid, isStringEmpty } from 'src/utils/functions';
import * as C from 'src/constants';
const { DynamicText, DynamicView } = require('src/styles/index');

const IonIconsHeaderButton = (props: any) => {
  const { iconSize, color } = props;
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={iconSize}
      color={color}
    />
  );
};
// Nav Shared Styles
export const defaultOptions: StackNavigationOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 3.84,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: scale(18),
    fontFamily: C.font,
    textAlign: 'center',
  },
  headerTitleContainerStyle: { justifyContent: 'center', flexDirection: 'row' },
  headerTitle: '',
  headerShown: false,
};

export function loginPageNavOptions(
  headerShown = true,
): StackNavigationOptions {
  return Object.assign(
    defaultOptions,
    {
      headerTitle: '',
      headerShown: false,
    },
    {
      headerRight: null,
      headerLeft: null,
      headerBackground: () => <DynamicView />,
      ...(isAndroid() && {
        headerShown: headerShown,
      }),
    },
  );
}
// Forget Password Navigation options
export function forgetPasswordNavOptions(
  leftIconColor: string,
  rightColor: string,
  titleColor: string,
  action?: Function,
  headerShown?: boolean,
  shadowHeight?: number,
  headerTitle?: string,
  rightTitle?: string,
  rightAction?: Function,
): StackNavigationOptions {
  return Object.assign(
    defaultOptions,
    {
      headerStyle: {
        shadowOffset: {
          height: shadowHeight,
        },
      },
      headerShown: headerShown,
    },
    {
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IonIconsHeaderButton}>
          <Item
            title=""
            style={{ marginStart: scale(10) }}
            iconName={'arrow-left'}
            onPress={() => action && action('back')}
            color={leftIconColor}
            iconSize={30}
          />
        </HeaderButtons>
      ),
      headerRight: () =>
        rightTitle && isStringEmpty(rightTitle.toString()) ? (
          <DynamicText
            dynamic
            onPress={() => {
              rightAction && rightAction();
            }}
            tA="left"
            pR={15}
            mE={10}
            pH={10}
            fontStyle={C.fontsName.H5_MEDIUM}
            tC={rightColor}
          >
            {rightTitle}
          </DynamicText>
        ) : (
          <></>
        ),
      headerTitle: (
        <DynamicText
          dynamic
          tA="left"
          fontStyle={C.fontsName.H5_MEDIUM}
          tC={titleColor}
        >
          {headerTitle}
        </DynamicText>
      ),
    },
  );
}

export function homePageNavOptions(
  leftIconName = 'bars',
  leftIconColor: string,
  rightColor: string,
  titleColor: string,
  badgeColor: string,
  action: Function,
  badge = 0,
  toggleNList: Function,
  headerTitle = '',
  displayRightComponent = true,
  displayLeftComponent = true,
  rightComponent: Element = <></>,
): StackNavigationOptions {
  return Object.assign(
    defaultOptions,
    {
      shadowColor: 'black',
      headerTitle: () => (
        <DynamicView>
          <DynamicText
            dynamic
            tA="left"
            fontStyle={C.fontsName.H5_PAGE_TITLE_SEMI_BOLD}
            color={titleColor}
          >
            {headerTitle}
          </DynamicText>
          {badge > 0 && (
            <Badge
              badgeStyle={{
                marginTop: scale(2),
                marginHorizontal: scale(5),
                ...(badge <= 99 && {
                  width: scale(isAndroid() ? 22 : 22),
                  height: scale(isAndroid() ? 22 : 22),
                  borderRadius: scale(isAndroid() ? 11 : 11),
                }),
                borderWidth: 1,
                borderColor: badgeColor,
                backgroundColor: badgeColor,
              }}
              value={badge}
              status="error"
            />
          )}
        </DynamicView>
      ),
      headerShown: true,
    },
    {
      headerLeft: () =>
        displayLeftComponent ? (
          <>
            <HeaderButtons HeaderButtonComponent={IonIconsHeaderButton}>
              <Item
                title=""
                iconName={leftIconName}
                onPress={() => action()}
                color={leftIconColor}
                iconSize={scale(25)}
              />
            </HeaderButtons>
          </>
        ) : (
          <DynamicView />
        ),
      headerRight: () =>
        displayRightComponent ? rightComponent : <DynamicView />,
    },
  );
}
export const imageOptions = { allowsEditing: true, aspect: [4, 3] };
