import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: 13,
    h5: { fontWeight: 600, fontSize: 20, fontFamily: "sans-serif" },
    h6: { fontWeight: 600, fontSize: 18, fontFamily: "sans-serif" },
    body1: { color: "black", fontFamily: "Open Sans", fontWeight: 500 },
    body2: { fontWeight: "bolder", fontFamily: "sans-serif", fontSize: 16 },
    subtitle1: { fontFamily: "Open Sans", fontWeight: 600 },
  },
});

export { theme };
