import React from "react";
import { Button, TextField, Select } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
    <ThemeProvider theme={theme}>
      <h1>Olá mundo</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>

      <TextField />
    </ThemeProvider>
  );
}

export default App;
