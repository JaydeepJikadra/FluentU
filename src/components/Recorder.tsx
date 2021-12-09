/**
 * @format
 * @flow
 */
import React, { useEffect, useState } from 'react';
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import { RecorderState } from 'src/types';
const { DynamicView } = require('src/styles');

interface QuestionsProps {
  checkResults: Function;
}

export default function Recorder({ checkResults }: QuestionsProps) {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################

  const [stateData, setStateData] = useState<RecorderState>({
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
  });

  //############################################################
  //NOTE: HELPER METHODS
  //############################################################
  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    // this.setState({
    //   started: '√',
    // });
  };

  const onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    console.log('onSpeechRecognized: ', e);
    // this.setState({
    //   recognized: '√',
    // });
  };

  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
    // this.setState({
    //   end: '√',
    // });
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    // this.setState({
    //   error: JSON.stringify(e.error),
    // });
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e);
    if (e && 'value' in e) setStateData({ ...stateData, results: e.value });
  };

  const onSpeechPartialResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechPartialResults: ', e);
    setStateData({ ...stateData, partialResults: e.value });
    checkResults(e.value);
  };

  const onSpeechVolumeChanged = (e: any) => {
    // console.log('onSpeechVolumeChanged: ', e);
    setStateData({ ...stateData, pitch: e.value });
  };

  const startRecognizing = async () => {
    setStateData({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
    try {
      await Voice.start('es-ES');
    } catch (e) {
      console.log(
        '🚀 ~ file: Recorder.tsx ~ line 90 ~ startRecognizing ~ e',
        e,
      );
    }
  };

  const destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }

    setStateData({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };
  //############################################################
  //NOTE: LIFE CYCLE METHODS
  //############################################################
  useEffect(() => {
    function setupListener() {
      Voice.onSpeechStart = onSpeechStart;
      Voice.onSpeechRecognized = onSpeechRecognized;
      Voice.onSpeechEnd = onSpeechEnd;
      Voice.onSpeechError = onSpeechError;
      Voice.onSpeechResults = onSpeechResults;
      Voice.onSpeechPartialResults = onSpeechPartialResults;
      Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    }
    setupListener();
    setTimeout(() => {
      startRecognizing();
    }, 100);
    return () => {
      destroyRecognizer();
    };
  }, []);

  //############################################################
  //NOTE:RENDER METHOD
  //############################################################
  return <DynamicView />;
}
