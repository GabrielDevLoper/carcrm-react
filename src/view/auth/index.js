import React from "react";
import { change, login } from "../../store/actions/auth.action";
import { Typography, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
