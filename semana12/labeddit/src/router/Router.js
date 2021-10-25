import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import FeedScreen from "../screens/FeedScreen/FeedScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import PostScreen from "../screens/PostScreen/PostScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ErrorScreen from "../screens/ErrorScreen/ErrorScreen";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <FeedScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/post/:id">
          <PostScreen />
        </Route>
        <Route exact path="/cadastro">
          <SignUpScreen />
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
