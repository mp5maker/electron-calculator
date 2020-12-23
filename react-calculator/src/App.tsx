import * as React from "react";
import { Route, Router } from "react-router-dom";
import { history } from "src/utilities/history";
import * as Routes from "src/constants/routes";

import { Home } from "src/pages/home";

export const App = () => {
  return (
    <Router history={history}>
      <Route
        exact={true}
        path={Routes.Home.path}
        component={Home} />
    </Router>
  );
};

export default App;
