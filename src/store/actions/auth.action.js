import { Http } from "../../config/Http";
import { changeLoading } from "../actions/loading.action";
import { changeNotify } from "./notify.action";
export const actionTypes = {
  CHANGE: "CHANGE_AUTH",
  SUCCESS: "SUCCESS_AUTH",
};

export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload,
});

export const setUserToken = (token) => (dispatch) => {
  localStorage.setItem("access_token", token);
  dispatch(
    change({
      email: "",
      password: "",
    })
  );
  dispatch(success(true));
};

export const login = (credentials) => (dispatch) => {
  dispatch(
    changeLoading({
      open: true,
      msg: "Autenticando usuário...",
    })
  );

  return Http.post("oauth/token", {
    grant_type: "password",
    client_id: 2,
    client_secret: M82vB3fRRaWeBUCIRnD7oWxJe1xod59YWTBcgtDR,
    username: credentials.email,
    password: credentials.password,
  })
    .then((res) => {
      dispatch(changeLoading({ open: false }));

      if (typeof res !== "undefined") {
        if (res.data.access_token) {
          dispatch(setUserToken(res.data.access_token));
        }
      }
    })
    .catch((error) => {
      dispatch(changeLoading({ open: false }));

      if (typeof error.response !== "undefined") {
        if (error.response.status === 401 || error.response.status === 400) {
          dispatch(
            changeNotify({
              open: true,
              msg: "E-mail ou senha incorretos",
              class: "error",
            })
          );
        }
      } else {
        dispatch(
          changeNotify({
            open: true,
            msg: "Erro ao se conectar com o servidor",
            class: "error",
          })
        );
      }
    });
};
