import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { OrdernowbuttonStyles } from "./ordernowbutton.styles";
import { GlobalStyles } from "../../../styles/global.styles";
import { useNavigation } from "@react-navigation/native";

const { buttonContainer, textContainer } = OrdernowbuttonStyles;
const { shadow } = GlobalStyles;
const OrderNowButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={[buttonContainer, shadow]} onPress={() => navigation.navigate("Menu")}>
        <Text style={textContainer}>ORDER NOW</Text>
      </TouchableOpacity>
    </View>
  );
};
export default OrderNowButton;
