import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import navComponent from "./components/navigation/navComponent";
import LoginView from "./views/loginView";
import UserView from "./views/userView";
import HomeView from "./views/homeView";
import UserEmpty from "./components/user/userEmptyComponent";

function App() {
  return (
    <BrowserRouter>
      <navComponent />
      <Switch>
        <Route path="/" component={LoginView} exact />
        <Route path="/home" component={HomeView} />
        <Route path="/user" component={UserView} />
        <Route path="/deletedUser" component={UserEmpty} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
