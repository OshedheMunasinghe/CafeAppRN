import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChipStyles } from "./chip.styles";
import { AppStyles } from "../../../styles/app.styles";

const { container, touchableContainer, textStyle } = ChipStyles;
const { shadow } = AppStyles;

const regChipBackgrColor = "#D9CABC";
const regChipTextColor = "black";
const selectedChipBackgrColor = "#C49450";
const selectedChipTextColor = "white";

const Chip = ({ text, width }) => {
  const [pressed, setPressed] = useState(false);
  const [backgrClr, setBackgrClr] = useState(regChipBackgrColor);
  const [textColor, setTextColor] = useState(regChipTextColor);

  // When button is pressed
  const selectedButton = () => {
    setPressed(true);
    setTextColor(selectedChipTextColor);
    setBackgrClr(selectedChipBackgrColor);
  };

  // Deselecting button pressed
  const deselectButton = () => {
    setPressed(false);
    setBackgrClr(regChipBackgrColor);
    setTextColor(regChipTextColor);
  };

  return (
    <View>
      {!pressed ?
        // * SELECTED BUTTON
        <TouchableOpacity style={[touchableContainer]} onPress={() => selectedButton()}>
          <View style={[{
            width: width,
            backgroundColor: backgrClr,
          },
            container,
            shadow,
          ]}>
            <Text style={[textStyle, { color: textColor }]}>{text}</Text>
          </View>
        </TouchableOpacity> :
        // * DESELECTED
        <TouchableOpacity style={[touchableContainer]} onPress={() => deselectButton()}>
          <View style={[{
            width: width,
            backgroundColor: backgrClr,
          },
            container,
            shadow,
          ]}>
            <Text style={[textStyle, { color: textColor }]}>{text}</Text>
          </View>
        </TouchableOpacity>

      }
    </View>
  );
};
export default Chip;
