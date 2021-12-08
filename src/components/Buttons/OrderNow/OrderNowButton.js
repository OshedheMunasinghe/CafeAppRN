import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { OrdernowbuttonStyles } from "./ordernowbutton.styles";

const { buttonContainer, textContainer } = OrdernowbuttonStyles;
const OrderNowButton = () => {
  return (
    <View>
      <TouchableOpacity style={buttonContainer}>
        <Text style={textContainer}>ORDER NOW</Text>
      </TouchableOpacity>
    </View>
  );
};
export default OrderNowButton;
