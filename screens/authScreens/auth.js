import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { ActivityIndicator, StyleSheet } from "react-native";
import Login from "./login";
import Signup from "./signup";

export default function Auth() {
  const [state, setState] = useState(true);
  const handleState = () => setState((prevState) => !prevState);
  
  return (
    <View style={styles.screen}>
      {state ? <Login handleState={ () => handleState() } /> : <Signup handleState={ () => handleState() } />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
