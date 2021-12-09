import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: "#F8E7D7",
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
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
});
