import { StyleSheet } from "react-native";

export const AddbuttonStyles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 18,
    bottom: 28,
  },
  touchContainer: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: "#D4A056",
    justifyContent: "center",
    alignItems: "center",

  },
//  * PLUS BUTTON STYLE
  plusContainer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 6,
  },
  plusTextContainer: {
    color: "black",
    fontFamily: "Mont-Bold",
    fontSize: 32,
    opacity: 0.8,
  },
});
