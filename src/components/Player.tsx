/**
 * @format
 * @flow
 */
import React from 'react';
import Video from 'react-native-video';
import { VideoOnProgress, VideoOnLoad } from 'src/types';
import * as C from 'src/constants';

interface Props {
  link: string;
  onLoadEnd: Function;
  onProgress: Function;
  onEnd: Function;
  paused: boolean;
}
export function Player({ link, onLoadEnd, onProgress, onEnd, paused }: Props) {
  //############################################################
  //NOTE: DEFINE VARIABLE
  //############################################################

  //############################################################
  //NOTE: HELPER METHODS
  //############################################################

  //############################################################
  //NOTE: RETURN METHOD
  //############################################################
  return (
    <Video
      controls={false}
      source={link}
      style={{
        width: C.heights.screenWidth,
        height: C.heights.screenHeight,
      }}
      resizeMode="cover"
      onLoad={(data: VideoOnLoad) =>
        onLoadEnd(data.currentTime!, data.duration)
      }
      onProgress={(data: VideoOnProgress) => onProgress(data.currentTime!)}
      onEnd={onEnd}
      paused={!paused}
    />
  );
}
