import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { NavigatorScreenParams } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

//--------------------------------------
export type HomeStackParamsList = {
  HomeMain: undefined;
};
export type HomeStackScreenProps<T extends keyof HomeStackParamsList> = StackScreenProps<
  HomeStackParamsList,
  T
>;
//--------------------------------------
export type RootTabsParamsList = {
  QuranStack: undefined;
  HadithStack: undefined;
  HomeStack: NavigatorScreenParams<HomeStackParamsList>;
  TafseerStack: undefined;
  TasawuffStack: undefined;
  // ProfileSettingsStack: NavigatorScreenParams<SettingsStackParamsList>;
};
export type RootsTabsScreenProps<T extends keyof RootTabsParamsList> = BottomTabScreenProps<
  RootTabsParamsList,
  T
>;
//--------------------------------------
