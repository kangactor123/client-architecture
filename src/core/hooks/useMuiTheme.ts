import { useTheme } from '@emotion/react';
import { createTheme } from '@mui/material';

// mui 의 다크/라이트모드 및 테마를 정의하는데 사용
export default function useMuiTheme() {
  const theme = useTheme();
  // const isDarkMode = useIsDarkMode();

  return createTheme({
    ...theme,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
    },
  });
}
