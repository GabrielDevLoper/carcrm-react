import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

// Otimizando os componentes
const Login = lazy(() => import("./pages/Login"));

function Routes() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center mt-5 pt-5">
            <CircularProgress />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
