import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ChoosenButtonsStyles } from "./choosenButtons.styles";

const { container, textContainer } = ChoosenButtonsStyles;
const ChosenCircleButton = ({ title }) => {
  return (
    <TouchableOpacity style={container}>
      <Text style={textContainer}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ChosenCircleButton;
