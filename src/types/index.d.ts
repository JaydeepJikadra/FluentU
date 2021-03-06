//############################################################
//NOTE: STYLED INTERFACE
//############################################################
interface CommonProps {
  readonly dynamic: boolean;
  readonly color: string;
  readonly borderColor: string;
  readonly bT: number; // border-top-width
  readonly bW: number; // border-width
  readonly pV: number; // padding-vertical
  readonly pH: number; // padding-horizontal
  readonly pR: number; // padding-right
  readonly pB: number; // padding-bottom
  readonly pL: number; // padding-left
  readonly pT: number; // padding-top
  readonly mH: number; // margin-horizontal
  readonly mV: number; // margin-vertical
  readonly mT: number; // margin-top
  readonly mR: number; // margin-right
  readonly mB: number; // margin-bottom
  readonly mS: number; // margin-start
  readonly mE: number; // margin-end
  readonly bR: number; // border-radius
  readonly bC: string; // border-color
  readonly bGC: string; // background-color
  readonly bRC: string; // border-right-color
  readonly bRT: number; // border-right-width
  readonly bBW: number; // border-bottom-width
  readonly bTW: number; // border-top-width
  readonly bRW: number; // border-right-width
  readonly bLW: number; // border-left-width
  readonly height: number;
  readonly width: number;
  readonly pOS: string; // position
  readonly top: number;
  readonly bot: number;
  readonly rht: number; // right
  readonly lef: number; // left
  readonly fD: string; // flex-direction
  readonly jC: string; // justify-content
  readonly aLIT: string; // align-items
  readonly aLS: string; // align-self
  readonly bBLR: number; // border-bottom-left-radius
  readonly bBRR: number; // border-bottom-right-radius
  readonly sO: number; // shadowOpacity
  readonly sC: number; // shadowColor
  readonly sR: number; // shadowRadius
  readonly sOFW: number; // shadowOffsetWidth
  readonly sOFH: number; // shadowOffsetHeight
  readonly eL: number; // elevation
  readonly dynamicFlex: boolean;
  readonly dynamicShadow: boolean;
  readonly dynamicBorderWidth: boolean;
  readonly dynamicWidth: boolean;
  readonly flx: number; // flex
}
export interface ButtonProps extends CommonProps {
  readonly noBorder: boolean;
  readonly opacity: number;
}
export interface ImageProps extends CommonProps {
  readonly dynamicPosition: boolean;
  readonly dynamicAlign: boolean;
  readonly trans: string;
  readonly iRM: string;
}
export interface InputProps extends CommonProps {
  readonly dynamicBorderColor: boolean;
  readonly iRM: string;
}
export interface TextProps extends CommonProps {
  readonly dynamicText: boolean;
  readonly dynamicAlign: boolean;
  readonly fS: number; // font-size
  readonly fW: number; // font-weight
  readonly fF: string; // font-family
  readonly fontStyle: string; // font-style
  readonly tA: string; // text-align
  readonly tDL: string; // text-decoration-line
  readonly aS: string; // align-self
  readonly opacity: number;
  readonly lS: number; // letter-spacing
  readonly lH: number; // letter-spacing
}
export interface ViewProps extends CommonProps {
  readonly dynamicMargin: boolean;
  readonly dynamicPosition: boolean;
  readonly noMargin: boolean;
  readonly flexible: boolean;
  readonly centerAlign: boolean;
  readonly displayBottom: boolean;
  readonly dynamicBorderColor: boolean;
  readonly dynamicPadding: boolean;
  readonly displayColumnWise: boolean;
  readonly workListFilter: boolean;
  readonly dynamicJustify: boolean;
  readonly dynamicHeight: boolean;
  readonly fixHeight: boolean;
  readonly fixWidth: boolean;
  readonly dynamicAlign: boolean;
  readonly margin: number; // margin
  readonly opacity: number;
  readonly withWhiteBackground: number;
  readonly bTLR: number; // border-top-left-radius
  readonly bTRR: number; // border-top-right-radius

  readonly hOffSet: number;
  readonly vOffSet: number;
  readonly blur: number;
  readonly sC: any;
  readonly isAndroid: boolean;
  readonly dynamicWidth: boolean;
}

export interface CommonButtonViewProps extends CommonProps, ViewProps {
  status: number;
  buttonType: string;
  tF?: Array<object>; //transform
}

//############################################################
//NOTE: VIDEO QUESTIONS DATA
//############################################################
export interface QuestionsData {
  id: number;
  question_english: string;
  question_spanish: string;
  answer: string;
  answer_spanish: string;
  pauseDuration: number;
  correct: boolean;
  viewed: boolean;
}
//############################################################
//NOTE: VIDEO STATE DATA
//############################################################
interface VideoState {
  fullscreen: boolean;
  play: boolean;
  currentTime: number;
  duration: number;
  showControls: boolean;
}

//############################################################
//NOTE: VIDEO ON PROGRESS DATA
//############################################################
interface VideoOnProgress {
  currentTime: number;
  playableDuration: number;
  seekableDuration: number;
}

//############################################################
//NOTE: VIDEO ON LOAD DATA
//############################################################
interface VideoOnLoad {
  duration: number;
  currentTime: number;
}

//############################################################
//NOTE: RECORDER STATE DATA
//############################################################
interface RecorderState {
  recognized: string;
  pitch: string;
  error: string;
  end: string;
  started: string;
  results: Array;
  partialResults: Array;
}
