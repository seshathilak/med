import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { HomeTabsStackScreens } from "./Navigation";
import StartupScreen from "../screens/StartupScreen";
import AuthScreen from "../screens/auth";

const RootNavigation = () => {

const isAuth = useSelector(state => state.Auth.isAuth);

  return (
    <NavigationContainer>
      {isAuth === 1 && <AuthScreen />}
      {isAuth === true &&  <StartupScreen />}
      {!isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};

export default RootNavigation;