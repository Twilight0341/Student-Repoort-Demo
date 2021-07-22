import React from "react";
import "./index.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Report from "./TS/ScreenPage";
import QuestionAmount from "./TS/questionAmount";

export default class Router extends React.Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Report} />
          <Route exact path="/amount" component={QuestionAmount} />
        </Switch>
      </BrowserRouter>
    );
  }
}
