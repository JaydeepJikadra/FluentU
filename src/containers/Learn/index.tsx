/**
 * @format
 * @flow
 */
import React, { useState } from 'react';
import * as C from 'src/constants';
import NoNetworkComponent, { Header } from 'src/components/Shared';
import { Player } from 'src/components/Player';
import { replaceSpecialChar } from 'src/utils/functions';
import { QuestionsData, VideoState } from 'src/types';
import { Questions } from 'src/components/Questions';
import Recorder from 'src/components/Recorder';
import Videos from '../../../assets/videos';
import AppImages from '../../../assets/images/AppImages';
const { SafeAreaView, DynamicBackgroundImage } = require('src/styles');

export default function LearnContainer() {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################
  const [startRecording, setStartRecording] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(-5);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionsData>();
  const [partialResults, setPartialResults] = useState<Array<string>>(['']);
  const [data, setData] = useState<Array<QuestionsData>>([
    {
      id: 0,
      question_english: 'Good Morning, how are you?',
      question_spanish: '¿Buenos días cómo estás?',
      answer: 'Hi, good thanks!',
      answer_spanish: 'Hola, bien gracias!',
      pauseDuration: 9.0,
      correct: false,
      viewed: false,
    },
    {
      id: 1,
      question_english: 'What can i get for you?',
      question_spanish: '¿Qué puedo traerte?',
      answer: 'A cappuccino, please',
      answer_spanish: 'Capuchino, por favor',
      pauseDuration: 11.86,
      correct: false,
      viewed: false,
    },
    {
      id: 2,
      question_english: 'Anything else?',
      question_spanish: '¿Algo más?',
      answer: `No, that's it`,
      answer_spanish: 'No, es todo.',
      pauseDuration: 15.86,
      correct: false,
      viewed: false,
    },
    {
      id: 3,
      question_english: 'How much is it?',
      question_spanish: '¿Cuánto cuesta?',
      answer: `How much is it?`,
      answer_spanish: `¿Cuánto cuesta?`,
      pauseDuration: 24,
      correct: false,
      viewed: false,
    },
    {
      id: 4,
      question_english: 'Here you go.',
      question_spanish: 'Aqui tienes.',
      answer: `Here you go.`,
      answer_spanish: `Aquí tienes.`,
      pauseDuration: 26.96,
      correct: false,
      viewed: false,
    },
    {
      id: 5,
      question_english: 'see you later!',
      question_spanish: '¡hasta luego!',
      answer: `see you later!`,
      answer_spanish: `Hasta luego!`,
      pauseDuration: 29,
      correct: false,
      viewed: false,
    },
  ]);
  const [state, setState] = useState<VideoState>({
    fullscreen: true,
    play: true,
    currentTime: 0,
    duration: 0,
    showControls: false,
  });

  //############################################################
  //NOTE: HELPER METHOD
  //############################################################
  const checkResults = (results: Array<string>) => {
    const temp = results.join().split(' ');
    setPartialResults(results.join().split(' '));
    console.log(
      '🚀 ~ file: index.tsx ~ line 104 ~ checkResults ~ setPartialResults',
      results,
      temp,
      replaceSpecialChar(currentQuestion!.answer_spanish!).split(' '),
      replaceSpecialChar(currentQuestion!.answer_spanish!)
        .split(' ')
        .every(ai => temp.includes(ai)),
    );
    if (
      replaceSpecialChar(currentQuestion!.answer_spanish!)
        .split(' ')
        .every(ai => temp.includes(ai))
    ) {
      data[currentQuestion!.id].correct = true;
      data[currentQuestion!.id].viewed = true;
      setData(data);
      setStartRecording(false);
      setCurrentStep(currentQuestion!.id * 10 + 10);
    }
  };

  function handlePlayPause() {
    // If playing, pause and show controls immediately.
    if (state.play) {
      setState({ ...state, play: false, showControls: true });
      return;
    }
    setState({ ...state, play: true });
    setTimeout(() => setState(s => ({ ...s, showControls: false })), 2000);
  }

  function onLoadEnd(currentTime: number, duration: number) {
    setState(s => ({
      ...s,
      duration: duration,
      currentTime: currentTime,
    }));
  }

  function findNextQuestion() {
    return data.find((element: QuestionsData) => !element.viewed);
  }
  function moveToNextQuestion() {
    handlePlayPause();
    setPartialResults([]);
    const found = findNextQuestion();
    setCurrentQuestion(found);
  }
  function onProgress(currentTime: number) {
    const found = findNextQuestion();
    if (!currentQuestion) {
      setCurrentQuestion(found);
    }
    if (found && state.currentTime > found.pauseDuration) {
      setState(s => ({
        ...s,
        play: false,
      }));
      return;
    }
    setState(s => ({
      ...s,
      currentTime: currentTime,
    }));
  }

  function onEnd() {
    setState({ ...state, play: false });
  }

  //############################################################
  //NOTE: RETURN METHOD
  //############################################################
  return (
    <SafeAreaView>
      <NoNetworkComponent />
      <DynamicBackgroundImage
        dynamic
        dynamicAlign
        iRM="contain"
        width={C.heights.screenWidth}
        height={C.heights.screenHeight}
        source={AppImages.BACKGROUND}
      >
        <Header minValue={0} maxValue={50} currentValue={currentStep} />
        {currentQuestion && state.currentTime > currentQuestion.pauseDuration && (
          <>
            <Questions
              question={currentQuestion}
              setStartRecording={setStartRecording}
              startRecording={startRecording}
              partialResults={partialResults}
              moveToNextQuestion={moveToNextQuestion}
            />
          </>
        )}
        <Player
          link={Videos.LEARN_DEMO}
          onLoadEnd={onLoadEnd}
          onProgress={onProgress}
          onEnd={onEnd}
          paused={state.play}
        />
        {startRecording && <Recorder checkResults={checkResults} />}
      </DynamicBackgroundImage>
    </SafeAreaView>
  );
}
