import React from "react";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { changeNotify } from "../../../store/actions/notify.action";

const useStyles = makeStyles({
  success: {
    backgroundColor: "#76ff03",
  },

  error: {
    backgroundColor: "#ff1744",
  },
});

function Notify() {
  const dispatch = useDispatch();
  const notify = useSelector((state) => state.notifyReducer);
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: notify.vertical,
        horizontal: notify.horizontal,
      }}
      open={notify.open}
      autoHideDuration={notify.time}
      onClose={() => dispatch(changeNotify({ open: false }))}
    >
      <SnackbarContent
        className={classes[notify.class] + " d-flex justify-content-center"}
        message={
          <span className="d-flex align-items-center">{notify.msg}</span>
        }
      ></SnackbarContent>
    </Snackbar>
  );
}

export default Notify;
