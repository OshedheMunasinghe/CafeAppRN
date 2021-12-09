import { StyleSheet } from "react-native";

export const SpecialCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#212325",
    width: 352,
    height: 96,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 35,
  },
  headText: {
    fontFamily: "Gent-Bold",
    color: "#F8E7D7",
    fontSize: 24,
  },
  subText: {
    fontFamily: "Mont-Regular",
    color: "#9199A1",
    fontSize: 12,
    bottom: 4,
  },
  priceText: {
    fontFamily: "Mont-Bold",
    fontSize: 14,
    color: "white",
  },
  imageContainer: {
    right: 18,
  },
});
