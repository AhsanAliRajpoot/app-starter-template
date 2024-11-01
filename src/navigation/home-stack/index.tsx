import React from "react";
import { colors, theme } from "@theme";
import { HomeMain } from "@screens";
import { HomeStackParamsList } from "@navigation-types";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { ToastUtility } from "@utility";

const Stack = createStackNavigator<HomeStackParamsList>();

export const HomeStack = () => {
  const underDevOnPress = () => {
    ToastUtility.show("Under development");
  };

  const headerRight = () => {
    return (
      <Pressable onPress={underDevOnPress}>
        <MaterialCommunityIcons name="chat-question" size={24} color={colors.black} />
      </Pressable>
    );
  };

  const headerLeft = () => {
    return (
      <Pressable onPress={underDevOnPress}>
        <Entypo name="menu" size={24} color={colors.black} />
      </Pressable>
    );
  };
  const options: StackNavigationOptions = {
    headerShown: true,
    headerTransparent: false,
    headerTintColor: colors.black,
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#FFEAB3",
      borderWidth: 0,
      shadowOpacity: 0,
    },
    headerRight,
    headerLeft,
    headerLeftContainerStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: theme.spacing.xl,
      // borderWidth: 1,
    },
    headerRightContainerStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: theme.spacing.xl,
      // borderWidth: 1,
    },
  };
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="HomeMain"
        component={HomeMain}
        options={{
          title: "Quran",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
