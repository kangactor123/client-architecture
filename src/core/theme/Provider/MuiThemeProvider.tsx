import React, { PropsWithChildren } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import useMuiTheme from '@core/hooks/useMuiTheme';

const MuiThemeProvider: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const muiModeTheme = useMuiTheme();
  return <MUIThemeProvider theme={muiModeTheme}>{children}</MUIThemeProvider>;
};

export default MuiThemeProvider;
