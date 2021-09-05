import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { HomeTabsStackScreens } from "./Navigations";
import StartupScreen from "../screens/StartupScreen";
import AuthScreen from "../screens/auth";

const RootNavigation = () => {
 
  return (
    <NavigationContainer>
      {isAuth === 1 && <StartupScreen />}
      {isAuth === true && <HomeTabsStackScreens />}
      {!isAuth && <AuthScreen />}
    </NavigationContainer>
  );
};

export default RootNavigation;