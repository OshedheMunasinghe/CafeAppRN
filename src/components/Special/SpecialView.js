import React from "react";
import { Text, View } from "react-native";
import SpecialCard from "../Cards/SpecialCard/SpecialCard";
import { SpecialViewStyles } from "./specialview.styles";

const blueCup = require("../../../assets/images/coffees/blueChino.png");
const { container, textStyle } = SpecialViewStyles;
const SpecialView = () => {
  return (
    <View style={container}>
      <Text style={textStyle}>Special for you</Text>
      <SpecialCard headTitle={"Luwak Coffee"} subTitle={"Premium flavor"} price={"$48"} images={blueCup} />
      <SpecialCard headTitle={"Santa Latte"} subTitle={"Espresso House Edt"} price={"$32"} images={blueCup} />
    </View>
  );
};
export default SpecialView;
