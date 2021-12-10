import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppStyles } from "../../../styles/app.styles";
import { BuyButtonStyles } from "./buyButton.styles";

const { shadow } = AppStyles;
const { container, buttonContainer, textContainer } = BuyButtonStyles;
//TODO MISSING NAVIGATION
//TODO missing logic when user has bough one drink.
const BuyButton = () => {
  return (
    <View style={container}>
      <TouchableOpacity style={[buttonContainer, shadow]}>
        <Text style={textContainer}>BUY ONE</Text>
      </TouchableOpacity>
    </View>

  );
};
export default BuyButton;
