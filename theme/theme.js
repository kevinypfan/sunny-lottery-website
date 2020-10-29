import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffe401",
    },
    secondary: {
      main: "#FFFF00",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "FFFF99",
    },
  },
});

export default theme;
