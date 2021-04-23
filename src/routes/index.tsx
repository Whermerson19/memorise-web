import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import List from "../pages/List";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/my-lists" exact component={List} isPrivate />
    </Switch>
  );
}
