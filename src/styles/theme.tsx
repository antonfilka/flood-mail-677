import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    white: "#ffffff",
    primary: "#003dda",
    green: "#648332",
    red: "#833232",
    lightGray: "#f1f1f1",
    darkGray: "#595959",
    bg: "#151414",
    bgTransparent: "rgba(0, 0, 0, 0.2)",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    p: "0.3em",
    h6: "0.5em",
    h5: "0.8em",
    h4: "1em",
    h3: "1.5em",
    h2: "2em",
    h1: "2.5em",
  },
  borderRadius: {
    default: "5px",
  },
};
