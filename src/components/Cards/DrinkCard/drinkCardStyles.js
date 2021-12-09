import { StyleSheet } from "react-native";

export const DrinkCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#212325",
    width: 180,
    height: 281,
    borderRadius: 30,
    marginLeft: 23,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 18,
    marginTop: 13,
  },
  headerText: {
    fontFamily: "Gent-Bold",
    fontSize: 24,
    color: "#F8E7D7",
  },
  subText: {
    fontFamily: "Mont-Bold",
    fontSize: 12,
    color: "#9199A1",
  },
  priceText: {
    fontFamily: "Mont-Bold",
    fontSize: 18,
    color: "#C49450",
    marginTop: 4,
  },

});
