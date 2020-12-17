import { ReactReduxContext } from "react-redux";

export const actionTypes = {
  CHANGE: "CHANGE_LOADING",
};

export const changeLoading = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});
