import React from "react";
import { colors } from "@theme";
import { HomeMain } from "@screens";
import { HomeStackParamsList } from "@navigation-types";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

const Stack = createStackNavigator<HomeStackParamsList>();

export const HomeStack = () => {
  const options: StackNavigationOptions = {
    headerShown: false,
    headerTransparent: true,
    headerTintColor: colors.titleText,
    headerTitleAlign: "center",
    headerRightContainerStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      borderWidth: 0,
    },
  };
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="HomeMain" component={HomeMain} />
    </Stack.Navigator>
  );
};

export default HomeStack;
