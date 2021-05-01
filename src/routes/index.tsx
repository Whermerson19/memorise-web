import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import List from "../pages/List";
import EspecificList from "../pages/EspecificList";
import CreateList from "../pages/CreateList";
import ViewCardsList from "../pages/ViewCardsList";
import StudyCardsPage from "../pages/StudyCardsPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/my-lists" exact component={List} isPrivate />

      <Route path="/create-list" exact component={CreateList} isPrivate />

      <Route path="/list/:list_id" exact component={EspecificList} isPrivate />
      <Route
        path="/cards/list/:list_id"
        exact
        component={ViewCardsList}
        isPrivate
      />
      <Route exact path="/study/list/:list_id" component={StudyCardsPage} isPrivate />
    </Switch>
  );
}
