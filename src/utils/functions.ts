/**
 * @format
 * @flow
 */
import {
  Dimensions,
  Platform,
  Linking,
  Alert,
  NativeModules,
  Appearance,
  PermissionsAndroid,
} from 'react-native';
import 'moment-timezone';
import moment from 'moment';
import Toast from 'react-native-root-toast';
import NetInfo from '@react-native-community/netinfo';
import * as C from 'src/constants';

import { lightTheme, darkTheme } from 'src/constants/theme';

NetInfo.configure({
  reachabilityUrl: 'https://www.google.co/',
  reachabilityTest: async response => response.status === 200,
  reachabilityLongTimeout: 60 * 1000, // 60s
  reachabilityShortTimeout: 5 * 1000, // 5s
  reachabilityRequestTimeout: 15 * 1000, // 15s
});
export function convertArrayToString(data: []) {
  return data !== null && data !== undefined ? data.join(', ') : '';
}
export function isArrayNotBlank<T>(data: T[]) {
  return !!(data !== null && data !== undefined && data.length !== 0);
}
export function isEmpty(obj: object) {
  return Object.getOwnPropertyNames(obj).length === 0;
}

export function isStringEmpty(text: string) {
  return text !== undefined && text !== null && text !== '';
}
export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

export function isAndroid() {
  return Platform.OS === 'android';
}
export function isIos() {
  return Platform.OS === 'ios';
}
export function openURL(Url: string) {
  Linking.openURL(Url);
}

export function modelView(
  navigation: any,
  screenName: string,
  props: object = {},
) {
  navigation.navigate(screenName, props);
}
export function pushView(
  navigation: any,
  screenName: string,
  props: object = {},
) {
  navigation.push(screenName, props);
}
export function replaceView(
  navigation: any,
  screenName: string,
  props: object = {},
) {
  navigation.replace(screenName, props);
}
export function datePickerDate() {
  const configureDates = {
    initialDate: moment().format('YYYY-MM-DD'),
    minDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    maxDate: moment().format('YYYY-MM-DD'),
  };
  return configureDates;
}

export function filterPickerDate() {
  return [
    {
      initialDate: moment().subtract('30', 'days').format('YYYY-MM'),
    },
    {
      initialDate: moment().format('YYYY-MM'),
    },
  ];
}

export function findInMap(map: Map<string, string>, val: string) {
  for (const v of map.values()) {
    if (v === val) {
      return true;
    }
  }
  return false;
}
export function findObjValueInMap(
  map: Map<string, string>,
  val: string,
  key: string,
) {
  for (const v of map.values()) {
    // console.log('findObjValueInMap -> v', v);
    if (JSON.parse(v)[key] === val) {
      return true;
    }
  }
  return false;
}
export function dateWithDay(date: string) {
  return `${moment(date).format('LL')}(${moment(date).format('dd')})`;
}
export function generateCurrentYearMonth() {
  const yearWithMonths = [];
  for (let index = 1; index < 13; index++) {
    yearWithMonths.push(
      `${moment().year()}/` +
        `${index.toString().length === 1 ? `0${index.toString()}` : index}`,
    );
  }
  return yearWithMonths;
}
export function generateCurrentYearMonthName() {
  const yearWithMonths = [];
  for (let index = 1; index < 13; index++) {
    yearWithMonths.push({
      id: index,
      title: moment(
        `${moment().year()}/` +
          `${index.toString().length === 1 ? `0${index.toString()}` : index}`,
        'YYYY-MM-DD',
      ).format('MMMM'),
      month:
        `${moment().year()}/` +
        `${index.toString().length === 1 ? `0${index.toString()}` : index}`,
    });
  }
  return yearWithMonths;
}
export function isPastDate(date: string, format = 'YYYY-MM-DD') {
  return moment().format('YYYY-MM-DD') > moment(date).format(format);
}

export function WeekDaysName() {
  const days: Array<{ id: number; title: string }> = [];
  moment.weekdaysMin().map((item, index) => {
    days.push({ id: index, title: item });
  });
  return days;
}

type ToastParams = {
  message: string;
  duration?: number;
  position?: string;
};

export function showToast(obj: ToastParams) {
  Toast.show(obj.message, {
    duration: Toast.durations.LONG,
    position: obj.position
      ? obj.position === 'Center'
        ? Toast.positions.CENTER
        : obj.position === 'Top'
        ? Toast.positions.TOP
        : Toast.positions.BOTTOM
      : Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    textStyle: { fontSize: 14, fontFamily: C.font },
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    },
  });
}
export async function checkInternetConnection() {
  const { isConnected } = await NetInfo.fetch();
  // console.log(
  //   'TCL: checkInternetConnection -> isInternetReachable',
  //   isConnected,
  // );
  return isConnected;
}

export function getDynamicTime(timeZone = 'Asia/Tokyo', format = 'HH:mm') {
  const currentDate = formatDate('', '');
  return moment(currentDate).tz(timeZone).format(format);
}

export function formatDate(date: string, formatString: string) {
  return date !== ''
    ? moment(date).format(formatString)
    : moment().format(formatString);
}

export function dateWithDayName(date: string, langCode: string) {
  let newDate;
  switch (langCode) {
    case 'jp':
      newDate = date
        ? `${moment(date).locale('ja').format('LL (dd)')}`
        : `${moment().locale('ja').format('LL (dd)')}`;
      break;

    case 'en':
      newDate = date
        ? `${moment(date).locale('en').format('YYYY-MM-DD (ddd)')}`
        : `${moment().locale('en').format('YYYY-MM-DD (ddd)')}`;
      break;

    default:
      break;
  }
  return newDate;
}
export function redirectToLogin(
  title: string,
  message: string,
  logOut: Function,
) {
  setTimeout(() => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'OK',
          onPress: () => logOut(),
        },
      ],
      { cancelable: false },
    );
  }, 1000);
}
export function firstAndLast(month: string) {
  const length = moment(month, 'YYYY-MM').daysInMonth();
  const begin = moment(month, 'YYYY-MM').format('YYYY-MM-01');
  const end = moment(month, 'YYYY-MM').format('YYYY-MM-') + length;
  return { startD: begin, endD: end };
}

export function showAlert(title: string, body: string) {
  Alert.alert(
    title,
    body,
    [{ text: 'Cancel', onPress: () => console.log('OK Pressed') }],
    {
      cancelable: true,
    },
  );
}
export function dynamicAlert(
  title: string,
  body: string,
  rPress: Function,
  lPress: () => void,
  rText: string,
  lText: string,
  cancelable = true,
  isDestructive = false,
) {
  Alert.alert(
    title,
    body,
    [
      { text: lText, onPress: () => lPress() },
      {
        text: rText,
        onPress: () => rPress(),
        style: isDestructive ? 'destructive' : 'default',
      },
    ],
    {
      cancelable: cancelable,
    },
  );
}

export function determineThePreviousFlow(
  CB: Function,
  firstDateOfWeek: string,
) {
  const previousWeekStartDate = moment(firstDateOfWeek, 'DD-MM-YYYY')
    .subtract(1, 'days')
    .toDate();
  const previousWeekEndDate = moment(firstDateOfWeek, 'DD-MM-YYYY')
    .subtract(7, 'days')
    .toDate();
  CB(previousWeekEndDate, previousWeekStartDate);
}

export function determineNextActionFlow(CB: Function, lastDateOfWeek: string) {
  const nextWeekStartDate = moment(lastDateOfWeek, 'DD-MM-YYYY')
    .add(1, 'days')
    .toDate();
  const nextWeekEndDate = moment(lastDateOfWeek, 'DD-MM-YYYY')
    .add(7, 'days')
    .toDate();
  CB(nextWeekStartDate, nextWeekEndDate);
}
export function firstDayOfTheWeek(
  currentYear: number,
  currentMonth: number,
  cNumber: number,
) {
  return moment()
    .year(currentYear)
    .month(currentMonth)
    .week(cNumber)
    .day(1)
    .format('DD');
}

export function weekOfMonth(date: string) {
  return moment(date).week() - moment(date).startOf('month').week() + 1;
}

export function weekNumberFromDate(date: string) {
  return moment(date).isoWeek() - moment(date).startOf('month').week();
}

// will check dates as per month and year
export function currentWeekDates(month: string, year: string, date = '01') {
  const rDate = formatDate(`${year}-${month}-${date}`, 'YYYY-MM-DD');
  // console.log('currentWeekDates -> rDate', rDate, `${date}-${month}-${year}`);
  const startOfWeek = moment(rDate).startOf('week');
  const endOfWeek = moment(rDate).endOf('week');

  const days = [];
  let day = startOfWeek;
  while (day <= endOfWeek) {
    days.push(day.toDate());
    day = day.clone().add(1, 'd');
  }
  // console.log('currentWeekDates -> days', days);
  return days;
}

export function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

export function timeInterval(
  translation: Function,
  startTime = '19',
  endTime = '24',
  flag = 1,
) {
  const times = flag === 1 ? [translation('ALL_DAY_OK')] : [];
  startTime = moment(`${startTime}`, 'hh:mm a').format('LT');
  times.push(`${startTime}${flag === 1 ? '~' : ''}`);
  while (
    moment(`${startTime}`, 'hh:mm').format('hh:mm') <
    moment(endTime, 'hh:mm').format('hh:mm')
  ) {
    // will increment time by interval

    startTime = moment(`${startTime}`, 'hh:mm a')
      .add('30', 'minutes')
      .format('LT');

    if (startTime !== '00:00') {
      times.push(`${startTime}${flag === 1 ? '~' : ''}`);
    }
    // console.log('timeInterval', times);
  }
  return times;
}

export function diffBetweenTimes(endTime: string, startTime: string) {
  const startT = moment(`${startTime}`, 'hh:mm a');
  const endT = moment(`${endTime}`, 'hh:mm a');

  return endT === startT ? 0.1 : moment(endT).diff(startT, 'minutes') / 60;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat().format(price);
}

export function determineMonths(firstDate: string, lastDate: string) {
  if (formatDate(firstDate, 'MM') === formatDate(lastDate, 'MM')) {
    return `${formatDate(firstDate, 'YYYY年 MMM')}`;
  } else if (formatDate(firstDate, 'MM') !== formatDate(lastDate, 'MM')) {
    return formatDate(firstDate, 'YYYY') === formatDate(lastDate, 'YYYY')
      ? `${formatDate(firstDate, 'YYYY年 MMM')}/${formatDate(lastDate, 'MMM')}`
      : `${formatDate(firstDate, 'YYYY年 MMM')}/${formatDate(
          lastDate,
          'YYYY年 MMM',
        )}`;
  }
}

export function determineProperDate(date = '') {
  try {
    if (
      weekNumberFromDate(formatDate(date, 'YYYY-MM-DD')) === 0 &&
      moment().format('dddd') !== 'Monday'
    ) {
      //&& moment().format('DD') === '01'
      // reduce one day from current date
      const lastMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');
      const lastDay = moment(lastMonth).endOf('month').format('YYYY-MM-DD');
      if (
        weekNumberFromDate(formatDate(lastDay, 'YYYY-MM-DD')) === 4 ||
        weekNumberFromDate(formatDate(lastDay, 'YYYY-MM-DD')) === 5
      ) {
        // it's belong to last week of previous month
        return formatDate(lastDay, 'YYYY-MM-DD');
      }
    } else {
      return formatDate('', 'YYYY-MM-DD');
    }
  } catch (error) {}
}

export function getDatesBetween(startDate: Date, endDate: Date) {
  const dates = [];
  // Strip hours minutes seconds etc.
  let currentDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
  );
  while (currentDate <= endDate) {
    dates.push(currentDate);

    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1, // Will increase month if over range
    );
  }
  return dates;
}

export function setAppIconBadge(count = '0') {
  const { BadgeManager } = NativeModules;
  if (!isAndroid()) {
    BadgeManager.setBadge(+count);
  } else {
    BadgeManager.setBadge(+count);
  }
}

export function formatPhoneText(value: string) {
  value = value.replace(/-/g, '');
  if (value.length > 3 && value.length <= 7)
    value = value.slice(0, 3) + '-' + value.slice(3);
  else if (value.length > 7)
    value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
  return value;
}

export function checkJapaneseText(text: string, t: Function): boolean {
  const ranges = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
    '\u00a9',
    '[\u2000-\u3300]',
    '\ud83c[\ud000-\udfff]',
    '\ud83d[\ud000-\udfff]',
    '\ud83e[\ud000-\udfff]',
  ];
  const patt = new RegExp(ranges.join('|'));
  if (
    wanakana.isJapanese(text) ||
    C.REGEX_JAPANESE.test(text) ||
    patt.test(text)
  ) {
    showToast({
      message: t('PEASE_USE_ENGLISH_ONLY'),
      position: 'Center',
      duration: Toast.durations.SHORT,
    });
    return true;
  } else {
    return false;
  }
}

export function arrayObjectsToString(
  arrayData: Array<{ [key: string]: any }>,
  keyName: string,
  seprator = '\n',
) {
  return Array.prototype.map
    .call(arrayData, function (item) {
      return item[keyName];
    })
    .join(seprator);
}

export function validateDOB(
  selectedYear: string,
  selectedMonth: string,
  selectedDay: string,
) {
  if (Number.parseInt(selectedDay) < 1) {
    /*handle wrong day here and return false*/
    return false;
  }
  if (
    Number.parseInt(selectedMonth) < 1 ||
    Number.parseInt(selectedMonth) > 12
  ) {
    /*handle wrong month here and return false*/
    return false;
  }
  if (
    Number.parseInt(selectedYear) < 1900 ||
    Number.parseInt(selectedYear) > new Date().getFullYear()
  ) {
    /*handle wrong year here and return false*/
    return false;
  }

  const lastDayOfMonth = new Date(
    +selectedYear,
    parseInt(selectedMonth) + 1,
    -1,
  ).getDate();
  if (+selectedDay > +lastDayOfMonth) {
    {
      /*handle wrong year here and return false*/
      return false;
    }
  }
  return true;
}

export function getCurrentTheme() {
  return Appearance.getColorScheme() === 'light' ? lightTheme : darkTheme;
}

export function removeHTMLTag(htmlString: string) {
  return htmlString.replace(/<[^>]+>/g, '');
}

export function isCloseToBottom(nativeEvent: any) {
  const paddingToBottom = 20;
  return (
    nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
    nativeEvent.contentSize.height - paddingToBottom
  );
}

export async function askPermission(
  t: Function,
  permissionType: any,
  title: string,
  message: string,
): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      const granted = await PermissionsAndroid.request(permissionType, {
        title: title,
        message: message,
        buttonNeutral: t('BUTTON_NEUTRAL'),
        buttonNegative: t('BUTTON_NEGATIVE'),
        buttonPositive: t('BUTTON_POSITIVE'),
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        resolve(true);
        return true;
      } else {
        reject(false);
        return false;
      }
    } catch (err) {
      reject(false);
      return false;
    }
  });
}
