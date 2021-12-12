import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../../../styles/global.styles";
import { BuyButtonStyles } from "./buyButton.styles";

const { shadow } = GlobalStyles;
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
