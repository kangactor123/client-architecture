import React, { PropsWithChildren, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import MuiThemeProvider from './MuiThemeProvider';
import theme from '@recoil/theme/atom';
import { ThemeMode } from '@core/const/enum';
import { darkMode, emotionTheme, lightMode } from '../theme';

/**
 * 파일을 분리한 이유
 * useMuiTheme 에서 useTheme 을 통해 emotion theme 을 주입받는데,
 * EmotionThemeProvider 에서 theme 을 주입받기 전에 useTheme 이 먼저 실행되어서
 * theme 이 빈 객체인 상황이 발생함.
 * 그래서 MuiThemeProvider 과 EmotionThemeProvider 파일을 분리했음.
 */
const ThemeProvider: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const themeMode = useRecoilValue(theme);
  const eTheme = useMemo(() => {
    const isDarkMode = themeMode === ThemeMode.Dark;
    return {
      ...emotionTheme,
      ...(isDarkMode ? darkMode : lightMode),
    };
  }, [themeMode]);

  return (
    <EmotionThemeProvider theme={eTheme}>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </EmotionThemeProvider>
  );
};
export default ThemeProvider;
