import React from "react";
import { gStyles, theme } from "@theme";
import { StyleSheet, Text, View } from "react-native";

export const TasawuffMain = () => {
  return (
    <View style={styles.main}>
      <Text>Tasawuff</Text>
    </View>
  );
};

export default TasawuffMain;

const styles = StyleSheet.create({
  main: {
    ...gStyles.mainContainer,
    paddingTop: theme.header.height,
  },
});
