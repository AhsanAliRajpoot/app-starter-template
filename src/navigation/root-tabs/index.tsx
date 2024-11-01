import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

import { colors } from "@theme";
import { QuranMain, HadithMain, TafseerMain, TasawuffMain } from "@screens";
import { HomeStack } from "../home-stack";

import type { RootTabsParamsList } from "@navigation-types";

const Tab = createBottomTabNavigator<RootTabsParamsList>();

interface OwnProps {}

const MainTabs: React.FC<OwnProps> = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: styles.labelStyle,
        tabBarInactiveTintColor: colors.titleText,
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: true,
        unmountOnBlur: true,
      })}
      initialRouteName="HomeStack"
    >
      {/* TODO - see if need to convert to stack. */}
      <Tab.Screen
        name="QuranStack"
        component={QuranMain}
        options={{
          title: "Quran",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="book-open"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HadithStack"
        component={HadithMain}
        options={{
          title: "Hadith",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="book"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />

      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />

      <Tab.Screen
        name="TafseerStack"
        component={TafseerMain}
        options={{
          title: "Tafseer",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="book-open"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TasawuffStack"
        component={TasawuffMain}
        options={{
          title: "Tasawuff",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="book"
              color={focused ? colors.primary : colors.titleText}
              size={focused ? 24 : 16}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { MainTabs as RootTabs };

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: "Visby-Bold",
    fontSize: 12,
    color: colors.titleText,
  },
});
