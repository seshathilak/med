import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function Signup({ handleState }) {
  return (
    <View style={styles.screen}>
      <Button title="Already have an Account " onPress={ () => handleState() } />
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
