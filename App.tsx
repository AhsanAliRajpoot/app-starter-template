/* eslint-disable react-native/no-inline-styles */
import "react-native-gesture-handler";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { registerRootComponent } from "expo";
import { colors } from "@theme";
import { App } from "@";

SplashScreen.preventAutoHideAsync();

export default function RootApp() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  const [isAuthLoaded, setIsAuthLoaded] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "Visby-Heavy": require("./src/assets/fonts/VisbyHeavy.otf"),
          "Visby-ExtraBold": require("./src/assets/fonts/VisbyExtrabold.otf"),
          "Visby-Bold": require("./src/assets/fonts/VisbyBold.otf"),
          "Visby-Medium": require("./src/assets/fonts/VisbyMedium.otf"),
          "Visby-Regular": require("./src/assets/fonts/VisbyRegular.otf"),
          "Visby-Semibold": require("./src/assets/fonts/VisbySemibold.otf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
        setIsAuthLoaded(() => true); //remove this from here and call appropriately
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (isAppReady && isAuthLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady, isAuthLoaded]);

  if (!isAppReady) {
    return null;
  } else {
    return (
      <RootSiblingParent>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={colors.primary}
            style={Platform.OS === "android" ? "light" : "dark"}
          />
          <NavigationContainer theme={DefaultTheme}>
            <App />
          </NavigationContainer>
        </View>
      </RootSiblingParent>
    );
  }
}

registerRootComponent(RootApp);
