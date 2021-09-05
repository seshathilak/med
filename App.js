import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import RootNavigation from "./navigation/RootNavigation";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
