/**
 * @format
 * @flow
 */
import React, {
  FC,
  useState,
  useEffect,
  ReactElement,
  useContext,
} from 'react';
import { Divider, Icon, Button, Slider } from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';
import * as C from 'src/constants';
import { scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';
import { PacmanIndicator, SkypeIndicator } from 'react-native-indicators';
import { ThemeContext } from 'styled-components';
import { isAndroid } from 'src/utils/functions';
const { DynamicText, DynamicView, OfflineView } = require('src/styles');

export const SectionTitle: FC<{ title: string; tag: number }> = ({
  title,
  tag,
}) => {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  //############################################################
  // NOTE: HELPER METHOD
  //############################################################
  return (
    <DynamicView
      dynamic
      dynamicMargin
      fd="column"
      at="flex-start"
      marginT={-15}
    >
      <DynamicText
        dynamic
        tA="left"
        mH={13}
        mT={tag === 1 ? 30 : 15}
        fontStyle={C.fontsName.H5_BOLD}
        tC={themeContext.secondaryTextColor}
      >
        {t(title)}
      </DynamicText>
      <Divider
        style={{
          backgroundColor: themeContext.borderColor1,
          width: C.heights.screenWidth,
          marginTop: scale(11),
        }}
      />
    </DynamicView>
  );
};

export function GradientButton(props: any) {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const themeContext = useContext(ThemeContext);
  // console.log('nextButton -> props', props);
  const {
    containerStyle,
    nextButtonStyle,
    titleStyle,
    buttonType = 'solid',
    status,
    gradientColor = [
      themeContext.gradientColor1,
      themeContext.gradientColor2,
      themeContext.gradientColor3,
      themeContext.gradientColor4,
    ],
    title,
    onPress,
    icon = (
      <Icon
        tvParallaxProperties={undefined}
        name="hearto"
        type="antdesign"
        size={scale(22)}
        color="white"
        style={{ marginLeft: scale(13), marginTop: isAndroid() ? 0 : -2 }}
      />
    ),
    loading = false,
    location = [0, 0.01, 0.6, 1.0],
    start = { x: 0.0, y: -0.4 },
    end = { x: 0.0, y: 1 },
    loadingProps = {
      color: themeContext.primaryBackgroundColor,
      size: 'large',
    },
  } = props;

  return (
    <DynamicView
      dynamicShadow
      dynamicMargin
      sO={0.3}
      sR={4.65}
      sC={themeContext.primaryShadowColor}
      sOFW={0}
      sOFH={4}
      eL={9}
      mT={25}
    >
      <Button
        iconRight
        loadingProps={loadingProps}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: gradientColor,
          start,
          end,
          location,
        }}
        containerStyle={[
          {
            borderRadius: scale(10),
            marginHorizontal: scale(20),
            alignSelf: 'center',
          },
          containerStyle,
        ]}
        type={buttonType}
        title={title}
        buttonStyle={[
          {
            borderRadius: scale(5),
            width: scale(C.heights.screenWidth / 2.2),
            justifyContent: 'center',
            alignItems: 'center',
          },
          nextButtonStyle,
        ]}
        onPress={() => onPress()}
        disabled={status === 0}
        titleStyle={[
          {
            fontSize: scale(16),
            color: themeContext.primaryTextColor,
            fontWeight: 'bold',
            fontFamily: C.font,
          },
          titleStyle,
        ]}
        // disabledTitleStyle={titleStyle}
        icon={icon}
        loading={loading}
      />
    </DynamicView>
  );
}

//############################################################
// NOTE: NO INTERNET CONNECTION COMPONENT
//############################################################

export default function NoNetworkComponent(): ReactElement {
  const [isConnected, setConnected] = useState<boolean>(true);
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  //############################################################
  //NOTE: LIFE CYCLE METHOD
  //############################################################
  useEffect(() => {
    let unsubscribe: any;
    async function initilize() {
      unsubscribe = NetInfo.addEventListener(handleConnectivityChange);
    }
    function unsubscribeNetInfo() {
      unsubscribe();
    }
    initilize();

    return () => unsubscribeNetInfo();
  }, [isConnected]);

  const handleConnectivityChange = (status: any) => {
    setConnected(status.isInternetReachable);
  };

  return !isConnected && isConnected !== null ? (
    <OfflineView>
      <DynamicText
        dynamic
        tC={themeContext.primaryTextColor}
        // onPress={() => {}}
        fontStyle={C.fontsName.H4_BOLD}
      >
        {t('NO_INTERNET')}
      </DynamicText>
    </OfflineView>
  ) : (
    <DynamicView />
  );
}
//############################################################
// NOTE: INDICATOR COMPONENT
//############################################################
interface NetworkIndicatorProps {
  show: boolean;
}
export const NetworkIndicator: React.FC<
  NetworkIndicatorProps
> = NetworkIndicatorProps => {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const { show } = NetworkIndicatorProps;
  const themeContext = useContext(ThemeContext);

  //############################################################
  //NOTE: LIFE CYCLE METHODS
  //############################################################
  return (
    <Modal isVisible={show} animationIn="pulse" animationOut="pulse">
      {isAndroid() ? (
        <SkypeIndicator color={themeContext.primaryColor} />
      ) : (
        <PacmanIndicator color={themeContext.primaryColor} />
      )}
    </Modal>
  );
};

//############################################################
// NOTE: Label With Value COMPONENT
//############################################################
interface LabelWithValueProps {
  label: string;
  value: string | number;
  labelFlex: number;
  valueFlex: number;
  labelFontStyle: string;
  valueFontStyle: string;
  marginBottom?: number;
  labelAlign?: string;
  valueAlign?: string;
  labelColor?: string;
  valueColor?: string;
}
export function LabelWithValue({
  label,
  value,
  labelFlex,
  valueFlex,
  valueFontStyle,
  labelFontStyle,
  marginBottom = 7,
  labelAlign = 'left',
  valueAlign = 'left',
  labelColor,
  valueColor,
}: LabelWithValueProps) {
  //############################################################
  //NOTE: LIFE CYCLE METHODS
  //############################################################
  return (
    <DynamicView dynamic jC="flex-start" mB={marginBottom}>
      <DynamicView dynamicFlex flx={labelFlex}>
        <DynamicText
          dynamic
          color={labelColor}
          fontStyle={labelFontStyle}
          lS={0.5}
          tA={labelAlign}
        >
          {label}
        </DynamicText>
      </DynamicView>
      <DynamicView dynamicFlex flx={valueFlex}>
        <DynamicText
          dynamic
          color={valueColor}
          fontStyle={valueFontStyle}
          lS={1}
          tA={valueAlign}
        >
          {value}
        </DynamicText>
      </DynamicView>
    </DynamicView>
  );
}

//############################################################
// NOTE: RENDER FOOTER
//############################################################
interface RenderFooterProps {
  loading: boolean;
}
export function RenderFooter({ loading }: RenderFooterProps) {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const themeContext = useContext(ThemeContext);

  //############################################################
  //NOTE: LIFE CYCLE METHOD
  //############################################################

  return (
    <ActivityIndicator
      size="large"
      color={themeContext.secondaryColor}
      hidesWhenStopped={loading}
    />
  );
}

//############################################################
// NOTE: CUSTOM LABEL COMPONENT
//############################################################
interface CustomLabelProps {
  label: string;
  value: string | number;
  labelFontStyle: string;
  valueFontStyle: string;
  marginBottom?: number;
  textAlign?: string;
  labelColor?: string;
  valueColor?: string;
}
export function CustomLabel({
  label,
  value,
  valueFontStyle,
  labelFontStyle,
  marginBottom = 7,
  textAlign = 'left',
  labelColor,
  valueColor,
}: CustomLabelProps) {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################

  return (
    <DynamicView dynamic jC="flex-start" mB={marginBottom}>
      <DynamicText
        dynamic
        color={labelColor}
        fontStyle={labelFontStyle}
        lS={0.5}
        tA={textAlign}
        pR={1}
        pL={1}
      >
        {label}
      </DynamicText>
      <DynamicText
        dynamic
        color={valueColor}
        fontStyle={valueFontStyle}
        lS={1}
        tA={textAlign}
        pR={1}
        pL={1}
      >
        {value}
      </DynamicText>
    </DynamicView>
  );
}

//############################################################
// NOTE: CARD WITH ICON COMPONENT
//############################################################
interface CardWithIconProps {
  label: string;
  icon_name: string;
  icon_color: string;
  icon_size: number;
  label_color: string;
  label_font_style: string;
  label_text_align: string;
}
export function CardWithIcon({
  label,
  icon_name,
  icon_color,
  icon_size,
  label_color,
  label_font_style,
  label_text_align,
}: CardWithIconProps) {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const themeContext = useContext(ThemeContext);

  //############################################################
  //NOTE: LIFE CYCLE METHOD VARIABLE
  //############################################################
  return (
    <DynamicView
      dynamic
      dynamicShadow
      dynamicMargin
      dynamicFlex
      fD="column"
      sC={themeContext.primaryShadowColor}
      bGC={themeContext.cardBackGroundColor}
      flx={0.5}
      mE={5}
      mT={10}
      mS={5}
      pH={5}
      pT={15}
      pB={15}
      bBLR={10}
      bBRR={10}
      bTLR={10}
      bTRR={10}
      sO={0.4}
      sR={2.65}
      sOFW={0}
      sOFH={2}
      eL={10}
    >
      <Icon
        tvParallaxProperties={undefined}
        type="feather"
        name={icon_name}
        color={icon_color}
        size={scale(icon_size)}
      />
      <DynamicText
        dynamic
        color={label_color}
        fontStyle={label_font_style}
        lS={0.5}
        tA={label_text_align}
        pR={1}
        pL={1}
        mT={2}
      >
        {label}
      </DynamicText>
    </DynamicView>
  );
}

//############################################################
// NOTE: HEADER COMPONENT
//############################################################
interface HeaderProps {
  currentValue: number;
  maxValue: number;
  minValue: number;
}
export function Header({ currentValue, maxValue, minValue }: HeaderProps) {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const themeContext = useContext(ThemeContext);

  //############################################################
  //NOTE: LIFE CYCLE METHOD VARIABLE
  //############################################################
  return (
    <DynamicView dynamic mH={20}>
      <DynamicView dynamicFlex flx={0.1}>
        <Icon
          tvParallaxProperties={undefined}
          type="font-awesome"
          name="close"
          color={themeContext.iconColor}
          size={scale(20)}
        />
      </DynamicView>
      <DynamicView dynamicFlex flx={0.9}>
        <Slider
          step={10}
          disabled={true}
          value={currentValue}
          maximumValue={maxValue}
          minimumValue={minValue}
          thumbTintColor="transparent"
          maximumTrackTintColor={themeContext.maxTintColor}
          minimumTrackTintColor={themeContext.minTintColor}
          trackStyle={{ backgroundColor: themeContext.primaryColor }}
          style={{ marginHorizontal: scale(15) }}
        />
      </DynamicView>
      <DynamicView dynamicFlex flx={0.1}>
        <Icon
          tvParallaxProperties={undefined}
          type="entypo"
          name="dots-three-horizontal"
          color={themeContext.iconColor}
          size={scale(20)}
        />
      </DynamicView>
    </DynamicView>
  );
}
