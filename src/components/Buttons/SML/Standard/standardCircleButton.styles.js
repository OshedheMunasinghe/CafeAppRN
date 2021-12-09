import { StyleSheet } from "react-native";

export const StandardCircleButtonStyles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#EADBCC",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 64,
    borderWidth: 1,
    borderColor: "#B9AEA3",
  },
  textContainer: {
    fontFamily: "Mono-Regular",
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});
