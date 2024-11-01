import { ImageRequireSource } from "react-native";
type Keys = "top-left" | "top-right" | "bottom-right" | "bottom-left" | "home-bg";

export const images: Record<Keys, ImageRequireSource> = {
  "top-left": require("./corner-top-left.png"),
  "top-right": require("./corner-top-right.png"),
  "bottom-right": require("./corner-bottom-right.png"),
  "bottom-left": require("./corner-bottom-left.png"),
  "home-bg": require("./home-bg.jpg"),
};
