import React, { Fragment, Suspense } from "react";
import Layout from "./component/layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Spinner } from "evergreen-ui";

function loading() {
  return (
    <Fragment>
      <div>
        <Spinner />
      </div>
    </Fragment>
  );
}

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={loading()}>
          <Switch>
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
