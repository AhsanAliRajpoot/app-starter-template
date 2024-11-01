import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { gStyles, theme } from "@theme";

export const QuranMain = () => {
  return (
    <View style={styles.main}>
      <Text>Quran</Text>
    </View>
  );
};

export default QuranMain;

const styles = StyleSheet.create({
  main: {
    ...gStyles.mainContainer,
    paddingTop: theme.header.height,
  },
});
