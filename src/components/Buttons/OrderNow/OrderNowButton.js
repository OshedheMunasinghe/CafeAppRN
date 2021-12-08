import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { OrdernowbuttonStyles } from "./ordernowbutton.styles";
import { AppStyles } from "../../../styles/app.styles";

const { buttonContainer, textContainer } = OrdernowbuttonStyles;
const {shadow} = AppStyles
const OrderNowButton = () => {
  return (
    <View>
      <TouchableOpacity style={[buttonContainer, shadow]}>
        <Text style={textContainer}>ORDER NOW</Text>
      </TouchableOpacity>
    </View>
  );
};
export default OrderNowButton;
