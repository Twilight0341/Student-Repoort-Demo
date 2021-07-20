import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Report from "./TS/ScreenPage";

export default class Router extends React.Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="" component={Report} />
        </Switch>
      </BrowserRouter>
    );
  }
}
