import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function startupScreen() {
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 50 }}> Median Logo </Text>

      <ActivityIndicator size="large" />
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
