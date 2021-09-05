import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Bubble from "../screens/Bubble";
import Profile from "../screens/Profile";
import Work from "../screens/Work";
import Connections from "../screens/Connections";

const HomeTabsStack = createBottomTabNavigator();
export const HomeTabsStackScreens = () => {
  return (
    <HomeTabsStack.Navigator>
      <HomeTabsStack.Screen name="Home" component={Home} />
      <HomeTabsStack.Screen name="Connections" component={Connections} />
      <HomeTabsStack.Screen name="Bubble" component={Bubble} />
      <HomeTabsStack.Screen name="Profile" component={Profile} />
      <HomeTabsStack.Screen name="Work" component={Work} />
    </HomeTabsStack.Navigator>
  );
};
