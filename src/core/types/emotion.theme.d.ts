import '@emotion/react';

declare module '@emotion/react' {
  // interaction 이 동일한 테마의 버튼일 경우 정의하지 않기 위해 optional
  export type ButtonTheme = {
    backgroundColor: string;
    textColor: string;
    hover?: {
      backgroundColor: string;
      textColor?: string;
    };
    pressed?: {
      backgroundColor: string;
      textColor?: string;
    };
    disabled?: {
      backgroundColor: string;
      textColor?: string;
    };
  };

  // 공통 테마 정의
  export interface Theme extends ModeTheme {
    root: {
      //
    };
  }

  // 모드별 테마 정의 (Dark/Light)
  export interface ModeTheme {
    text: {
      titleColor: string;
      labelTextColor: string;
    };
    button: {
      backgroundColor: string;
    };
  }
}
