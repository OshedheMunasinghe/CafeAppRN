import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AddbuttonStyles } from "./addbutton.styles";

const { container, touchContainer, plusContainer, plusTextContainer } = AddbuttonStyles;

function PlusButton() {
  return (
    <View style={plusContainer}>
      <Text style={plusTextContainer}>+</Text>
    </View>
  );
}

export const AddButton = () => {
  return (
    <View style={container}>
      <TouchableOpacity style={touchContainer}>
        <PlusButton />
      </TouchableOpacity>
    </View>
  );
};
export default AddButton;
