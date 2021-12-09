import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChipStyles } from "./chip.styles";
import { AppStyles } from "../../../styles/app.styles";

const { container, touchableContainer, textStyle } = ChipStyles;
const { shadow } = AppStyles;
const Chip = ({ text, width }) => {
  return (
    <TouchableOpacity style={[shadow, touchableContainer]}>
      <View style={[{
        width: width,
      }, container]}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Chip;
