import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Button, TextField, Select } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdPayment } from "react-icons/md";

import Routes from "./routes";

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
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
