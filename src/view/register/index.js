import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { change, register } from "../../store/actions/register.action";

function Register() {
  const dispatch = useDispatch();
  const { user, error, success } = useSelector(
    (state) => state.registerReducer
  );
  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo.png" alt="Logo" height="48" />
              <Typography component="h1" variant="h6" className="mt-3">
                Crie sua conta, teste grátis!
              </Typography>
            </div>
            <TextField
              error={error.name && true}
              margin="normal"
              label="Nome"
              value={user.name}
              onChange={(e) => {
                dispatch(change({ name: e.target.value }));
                if (error.name && delete error.name);
              }}
            />
            {error.name && <span className="text-danger">{error.name[0]}</span>}

            <TextField
              error={error.email && true}
              margin="normal"
              label="E-mail"
              type="email"
              autoComplete="email"
              value={user.email}
              onChange={(e) => {
                dispatch(change({ email: e.target.value }));
                if (error.email && delete error.email);
              }}
            />
            {error.email && (
              <span className="text-danger">{error.email[0]}</span>
            )}

            <TextField
              error={error.name && true}
              margin="normal"
              label="Senha"
              type="password"
              value={user.password}
              onChange={(e) => {
                dispatch(change({ password: e.target.value }));
                if (error.password && delete error.password);
              }}
            />
            {error.password && (
              <span className="text-danger">{error.password[0]}</span>
            )}

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="larg"
              className="mt-4 mb-4"
              onClick={() => dispatch(register(user))}
            >
              Cadastrar
            </Button>
            <div className="text-center">
              <Link to="/login" className="mt-4 text-danger">
                Fazer Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
