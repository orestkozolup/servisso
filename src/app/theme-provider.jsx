"use client";

import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00798C",
      light: "#EFF1F3",
      contrastText: "#FFFFFF",
    },
  },
});

export const ThemeProvider = ({ children }) => (
  <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
);
