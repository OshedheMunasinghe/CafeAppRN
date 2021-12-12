import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  backgroundScreens: {
    backgroundColor: "#F8E7D7",
    width: "100%",
    height: "100%",
  },
  safeAreaViewContainer: {
    width: "100%",
    height: "100%",
  },
  thankYouViewContainer: {
    backgroundColor: "#212325",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
