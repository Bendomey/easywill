import React, { Fragment, Suspense } from "react";
import Layout from "./component/layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Spinner } from "evergreen-ui";
import LoginComponent from "./pages/auth/login";
import RegisterComponent from "./pages/auth/register";

const loading = (props) => {
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    </Fragment>
  );
};

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={loading()}>
          <Switch>
            <Route
              name={"Login"}
              exact={true}
              render={(props) => <LoginComponent {...props} />}
              path={"/login"}
            />
              <Route
                  name={"Register"}
                  exact={true}
                  render={(props) => <RegisterComponent {...props} />}
                  path={"/register"}
              />
            <Route
              name={"Dasboard"}
              render={(props) => <Layout {...props} />}
              path={"/"}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
