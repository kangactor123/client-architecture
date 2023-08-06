import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeMode } from '@core/const/enum';
import theme from '@recoil/theme/atom';

export default function useIsDarkMode(): boolean {
  const themeMode = useRecoilValue(theme);
  const isDarkMode = useMemo(() => themeMode === ThemeMode.Dark, [themeMode]);
  return isDarkMode;
}
