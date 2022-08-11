import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import Home from "./src/screens/Home";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" animated={true} translucent />
      <Home />
    </ThemeProvider>
  );
}
