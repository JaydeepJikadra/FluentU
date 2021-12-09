/**
 * @format
 * @flow
 */
import React, { useContext } from 'react';
import { PermissionsAndroid } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-elements';
import { ThemeContext } from 'styled-components';
import { scale } from 'react-native-size-matters';
import Highlighter from 'react-native-highlight-words';
import * as C from 'src/constants';
import { QuestionsData } from 'src/types';
import { GradientButton } from 'src/components/Shared';
import AppImages from '../../assets/images/AppImages';
import { askPermission, isAndroid, showToast } from 'src/utils/functions';
const {
  DynamicView,
  DynamicText,
  DynamicImage,
  DynamicButton,
  DynamicBackgroundImage,
} = require('src/styles');

interface QuestionsProps {
  question: QuestionsData;
  setStartRecording: Function;
  moveToNextQuestion: Function;
  startRecording: boolean;
  partialResults: Array<string>;
}
export function Questions({
  question,
  setStartRecording,
  moveToNextQuestion,
  startRecording,
  partialResults,
}: QuestionsProps) {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  //############################################################
  //NOTE: RENDER METHODS
  //############################################################
  return (
    <>
      {!question.correct && (
        <DynamicView
          dynamic
          dynamicShadow
          dynamicMargin
          fixHeight
          height={80}
          dynamicPosition
          pOS="absolute"
          top={30}
          bot={0}
          fD="column"
          mE={10}
          mT={20}
          mS={10}
          pH={10}
          pT={10}
          pB={10}
          sO={0.4}
          sR={2.65}
          sOFW={0}
          sOFH={2}
          eL={10}
          bBLR={10}
          bBRR={10}
          bTLR={10}
          bTRR={10}
          sC={themeContext.primaryShadowColor}
          bGC={themeContext.secondaryTextColor}
          jC="center"
        >
          <DynamicText
            dynamic
            tA="left"
            fontStyle={C.fontsName.H5_MEDIUM}
            color={themeContext.primaryTextColor}
          >
            {question.question_spanish}
          </DynamicText>
          <DynamicText
            dynamic
            tA="left"
            opacity={0.5}
            mT={7}
            fontStyle={C.fontsName.H6_REGULAR}
            color={themeContext.primaryTextColor}
          >
            {question.question_english}
          </DynamicText>
        </DynamicView>
      )}
      <DynamicBackgroundImage
        dynamic
        dynamicAlign
        dynamicPosition
        pOS="absolute"
        width={C.heights.screenWidth}
        top={C.heights.screenHeight / 1.53}
        height={C.heights.screenHeight / 3}
        iRM="contain"
        source={question.correct ? AppImages.GREEN : AppImages.BLUE}
      >
        <DynamicView
          dynamic
          dynamicShadow
          dynamicMargin
          fixHeight
          height={
            question.correct
              ? C.heights.screenHeight / 6
              : startRecording
              ? C.heights.screenHeight / 6.5
              : C.heights.screenHeight / 5.8
          }
          fD="column"
          mE={10}
          mT={20}
          mS={10}
          pH={10}
          pT={10}
          pB={10}
          sO={0.4}
          sR={2.65}
          sOFW={0}
          sOFH={2}
          eL={10}
          bBLR={10}
          bBRR={10}
          bTLR={10}
          bTRR={10}
          sC={themeContext.primaryShadowColor}
          bGC={themeContext.cardBackGroundColor}
        >
          <Icon
            tvParallaxProperties={undefined}
            name="bookmark"
            type="feather"
            color={themeContext.iconColor}
            size={scale(18)}
            containerStyle={{ alignSelf: 'flex-end' }}
          />
          {question.correct && (
            <>
              <DynamicView
                dynamic
                dynamicMargin
                fixWidth
                fixHeight
                bGC={themeContext.successTextColor}
                width={45}
                height={45}
                bBLR={23}
                bBRR={23}
                bTLR={23}
                bTRR={23}
                mT={-60}
                jC="center"
                mV={5}
              >
                <DynamicText
                  dynamic
                  tA="left"
                  fontStyle={C.fontsName.H5_BOLD}
                  color={themeContext.primaryTextColor}
                >
                  {t('A_PLUS')}
                </DynamicText>
              </DynamicView>
              <DynamicText
                dynamic
                tA="left"
                mH={13}
                mT={10}
                fontStyle={C.fontsName.H5_BLACK}
                color={themeContext.successTextColor}
              >
                {t('WELL_DONE')}
              </DynamicText>
              <DynamicView
                dynamic
                dynamicMargin
                mT={10}
                pH={25}
                bGC={themeContext.successBackgroundColor}
                bBLR={10}
                bBRR={10}
                bTLR={10}
                bTRR={10}
                jC="center"
              >
                <DynamicText
                  dynamic
                  tA="left"
                  mT={5}
                  mB={5}
                  fontStyle={C.fontsName.H5_MEDIUM}
                  color={themeContext.successTextColor}
                >
                  {question.answer_spanish}
                </DynamicText>
              </DynamicView>
            </>
          )}
          {startRecording && !question.correct && (
            <DynamicView dynamic dynamicPosition top={-10} fD="column">
              <DynamicText
                dynamic
                tA="left"
                mH={13}
                mB={15}
                fontStyle={C.fontsName.H6_MEDIUM}
                color={themeContext.secondaryColor}
              >
                {t('SPEAK_NOW')}
              </DynamicText>

              <Highlighter
                highlightStyle={{
                  color: themeContext.highLightColor,
                }}
                searchWords={partialResults}
                textToHighlight={question.answer_spanish}
              />
            </DynamicView>
          )}
          {!startRecording && !question.correct && (
            <>
              <DynamicView dynamic dynamicMargin mS={15} mE={15} mT={-2}>
                <DynamicImage
                  dynamic
                  dynamicAlign
                  iRM="contain"
                  width={scale(17)}
                  height={scale(17)}
                  source={AppImages.SPEAKER}
                />
                <DynamicText
                  dynamic
                  tA="left"
                  mH={13}
                  fontStyle={C.fontsName.H5_MEDIUM}
                  color={themeContext.secondaryTextColor}
                >
                  {question.answer_spanish}
                </DynamicText>
              </DynamicView>
              <DynamicText
                dynamic
                mH={13}
                mB={20}
                mT={5}
                fontStyle={C.fontsName.H6_REGULAR}
                color={themeContext.secondaryColor}
              >
                {question.answer}
              </DynamicText>
              <DynamicButton
                onPress={() => {
                  if (isAndroid()) {
                    try {
                      askPermission(
                        t,
                        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                        t('PERMISSION_TITLE'),
                        t('PERMISSION_MESSAGE'),
                      ).then((flag: boolean) => {
                        if (flag) {
                          setStartRecording(true);
                        } else {
                          showToast({ message: t('VALID_PERMISSION') });
                        }
                      });
                      return;
                    } catch (e) {
                      // console.log('initialize -> e', e);
                    }
                  }
                  setStartRecording(true);
                }}
              >
                <DynamicImage
                  dynamic
                  dynamicAlign
                  iRM="contain"
                  width={scale(59)}
                  height={scale(59)}
                  source={AppImages.MIC}
                />
              </DynamicButton>
            </>
          )}
        </DynamicView>
        {startRecording && (
          <DynamicImage
            dynamic
            pOS="absolute"
            dynamicAlign
            iRM="contain"
            top={130}
            lef={30}
            width={scale(C.heights.screenWidth - 20)}
            height={scale(44)}
            source={AppImages.EQUALIZER}
          />
        )}
        {question.correct && (
          <GradientButton
            status={1}
            title={t('CONTINUE')}
            onPress={moveToNextQuestion}
            loading={false}
            icon={null}
            nextButtonStyle={{
              width: scale(165),
              height: scale(40),
              borderRadius: scale(25),
            }}
            containerStyle={{
              position: 'absolute',
              bottom: -30,
            }}
            gradientColor={[
              themeContext.secondaryTextColor,
              themeContext.secondaryTextColor,
              themeContext.secondaryTextColor,
              themeContext.secondaryTextColor,
            ]}
          />
        )}
      </DynamicBackgroundImage>
    </>
  );
}
