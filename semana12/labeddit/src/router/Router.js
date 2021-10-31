import { Switch, Route } from "react-router-dom";
import React from "react";
import FeedScreen from "../screens/FeedScreen/FeedScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import PostScreen from "../screens/PostScreen/PostScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ErrorScreen from "../screens/ErrorScreen/ErrorScreen";

const Router = ({ setRightButtonText }) => {
  return (
    <Switch>
      <Route exact path="/">
        <FeedScreen />
      </Route>
      <Route exact path="/login">
        <LoginScreen setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/post/:id">
        <PostScreen />
      </Route>
      <Route exact path="/cadastro">
        <SignUpScreen setRightButtonText={setRightButtonText} />
      </Route>
      <Route>
        <ErrorScreen />
      </Route>
    </Switch>
  );
}

export default Router;
