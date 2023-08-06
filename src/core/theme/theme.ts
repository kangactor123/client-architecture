import { ModeTheme, Theme } from '@emotion/react';

// 라이트, 다크 모드의 공통 프로퍼티 정의
export const emotionTheme: Pick<Theme, 'root'> = {
  root: {},
};

// Light 모드 프로퍼티 정의
export const lightMode: ModeTheme = {
  text: {
    titleColor: '',
    labelTextColor: '',
  },
  button: {
    backgroundColor: 'black',
  },
};

// Dart 모드 프로퍼티 정의
export const darkMode: ModeTheme = {
  text: {
    titleColor: '',
    labelTextColor: '',
  },
  button: {
    backgroundColor: 'red',
  },
};
