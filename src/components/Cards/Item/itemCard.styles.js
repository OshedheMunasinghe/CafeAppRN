import { StyleSheet } from "react-native";

export const ItemCardStyles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "#212325",
    width: 347,
    height: 129,
    borderRadius: 30,
    top: 27,
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 18,
  },
  headText: {
    fontFamily: "Gent-Bold",
    fontSize: 24,
    textAlign: "left",
    color: "#F8E7D7",
  },
  priceText: {
    fontSize: 20,
    fontFamily: "Mont-Bold",
    color: "#D4A056",
    right: 18,
  },
  extraText: {
    fontFamily: "Mont-Regular",
    color: "#9199A1",
    fontSize: 14,
    marginTop: 8,
  },
  rateText: {
    color: "#F8E7D7",
    fontFamily: "Mont-Bold",
    left: 8,
  },
  peopleRateText: {
    fontFamily: "Mont-Regular",
    color: "#9199A1",
    left: 18,
  },
  headPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratePeopleRateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});
