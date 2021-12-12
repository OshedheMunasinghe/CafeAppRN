import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AddButtonStyles } from "./addButtonStyles";
import Icon from "react-native-vector-icons/Feather";

const { container, touchContainer, plusContainer } = AddButtonStyles;

export const AddButton = () => {
  return (
    <View style={container}>
      <TouchableOpacity style={touchContainer} onPress={() => console.warn('Added to cart, but no logic behind it (context)')}>
        <Icon name="plus" size={30} color="black" style={[plusContainer]} />
      </TouchableOpacity>
    </View>
  );
};
export default AddButton;
