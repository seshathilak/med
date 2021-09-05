import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Bubble from "../screens/Bubble";
import Profile from "../screens/Profile";
import Work from "../screens/Work";
import Connections from "../screens/Connections";

const HomeTabsStack = createBottomTabNavigator();
export const HomeTabsStackScreens = () => {
  return (
    <HomeTabsStack.Navigator>
      <HomeTabsStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={32} />,
        }}
      />
      <HomeTabsStack.Screen
        name="Connections"
        component={Connections}
        options={{
          tabBarIcon: () => <Ionicons name="git-network-outline" size={32} />,
        }}
      />
      <HomeTabsStack.Screen
        name="Bubble"
        component={Bubble}
        options={{
          tabBarIcon: () => <Ionicons name="heart-circle-outline" size={32} />,
        }}
      />
      <HomeTabsStack.Screen
        name="Work"
        component={Work}
        options={{
          tabBarIcon: () => <Ionicons name="apps-outline" size={32} />,
        }}
      />
      <HomeTabsStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Ionicons name="person-outline" size={32} />,
        }}
      />
    </HomeTabsStack.Navigator>
  );
};
