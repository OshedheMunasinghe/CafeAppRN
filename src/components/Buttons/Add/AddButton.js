import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { AddButtonStyles } from "./addButtonStyles";
import Icon from "react-native-vector-icons/Feather";
import { CoffeeContext } from "../../../Context/CoffeProvider";

const { container, touchContainer, plusContainer } = AddButtonStyles;

let price = 0;
let item = 0;
export const AddButton = () => {
  let value = useContext(CoffeeContext);

  const addItem = () => {
    value = 1 + value;
    console.info("item added: " + item);
    console.info("value: " + value);
  };


  return (
    <View style={container}>
      <TouchableOpacity style={touchContainer} onPress={() => {
        addItem();

      }}>
        <Icon name="plus" size={30} color="black" style={[plusContainer]} />
      </TouchableOpacity>
    </View>
  );
};
export default AddButton;
