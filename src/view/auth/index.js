import React from "react";
import { change, login } from "../../store/actions/auth.action";
import { Typography, TextField, Button, withStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const RegisterButton = withStyles({
  root: {
    color: "#fff",
    backgroundColor: "#28a745",
    "&:hover": {
      backgroundColor: "#218838",
      color: "#fff",
    },
  },
})(Button);

function Auth() {
  const dispatch = useDispatch();
  const { credentials, success } = useSelector((state) => state.authReducer);
  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo.png" alt="car crm" height="48" />
              <Typography className="mt-3" variant="h6" component="h1">
                Plataforma para revenda de veículos
              </Typography>
            </div>
            <TextField
              className="mt-3"
              label="Email"
              type="email"
              autoComplete="email"
              value={credentials.email}
              onChange={(e) => dispatch(change({ email: e.target.value }))}
            />

            <TextField
              className="mt-3"
              label="Senha"
              type="password"
              value={credentials.password}
              onChange={(e) => dispatch(change({ password: e.target.value }))}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="mt-4 mb-4"
              onClick={() => dispatch(login(credentials))}
            >
              Entrar
            </Button>
            {success ? <Redirect to="/veiculos" /> : <Redirect to="/" />}

            <RegisterButton
              component={Link}
              variant="contained"
              fullWidth
              size="large"
              className="mt-2 mb-4"
              to="/registrar"
            >
              Cadastrar
            </RegisterButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
