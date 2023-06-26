"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const metadata = {
  title: "Servisso Cars",
  description: "Generated by create next app",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#00798C",
      light: "#EFF1F3",
      contrastText: "#FFFFFF",
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          height: "100vh",
          margin: 0,
          fontFamily: '"Inter", sans-serif',
        }}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
