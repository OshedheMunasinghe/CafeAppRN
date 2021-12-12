import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StandardCircleButtonStyles } from "./standardCircleButton.styles";

const { container, textContainer } = StandardCircleButtonStyles;
const StandardCircleButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={container} onPress={onPress}>
        <Text style={textContainer}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default StandardCircleButton;
