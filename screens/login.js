import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function Login({ handleState }) {
  return (
    <View style={styles.screen}>
      <Button title="Create an account" onPress={handleState} />
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
