import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

import Routes from "./routes";

import { Loading, Notify } from "./view/components";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4400",
    },
  },

  props: {
    MuiTextField: {
      variant: "outlined",
      fullWidth: true,
    },

    MuiSelect: {
      variant: "outlined",
      fullWidth: true,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Loading />
        <Notify />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
