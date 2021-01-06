import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

// Otimizando os componentes, para eles serem renderizados
const Auth = lazy(() => import("./view/auth"));
const Register = lazy(() => import("./view/register"));
const Vehicles = lazy(() => import("./view/vehicles"));

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
          <Route path="/login" component={Auth} />
          <Route exact path="/" component={Auth} />
          <Route path="/registrar" component={Register} />
          <Route exact path="/veiculos" component={Vehicles} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
