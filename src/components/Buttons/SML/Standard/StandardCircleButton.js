import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StandardCircleButtonStyles } from "./standardCircleButton.styles";

const { container, textContainer } = StandardCircleButtonStyles;
const StandardCircleButton = ({ title }) => {
  return (
    <TouchableOpacity style={container}>
      <Text style={textContainer}>{title}</Text>
    </TouchableOpacity>
  );
};
export default StandardCircleButton;
