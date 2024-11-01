import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { gStyles, theme } from "@theme";

export const HadithMain = () => {
  return (
    <View style={styles.main}>
      <Text>Hadith</Text>
    </View>
  );
};

export default HadithMain;

const styles = StyleSheet.create({
  main: {
    ...gStyles.mainContainer,
    paddingTop: theme.header.height,
  },
});
