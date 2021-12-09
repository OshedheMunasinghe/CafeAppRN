import React from "react";
import { View } from "react-native";
import StandardCircleButton from "./Standard/StandardCircleButton";
import ChoosenCircleButton from "./Choosen/ChoosenCircleButton";
import { SelectiveButtonsStyles } from "./selectiveButtons.styles";

const { container, boderContainer, buttonsContainer } = SelectiveButtonsStyles;
//TODO Logic when user has pressed button
const SelectiveButtons = () => {
  return (
    <View style={container}>
      <View style={boderContainer} />
      <View style={buttonsContainer}>
        <StandardCircleButton title={"S"} />
        <ChoosenCircleButton title={"M"} />
        <StandardCircleButton title={"L"} />
      </View>
    </View>


  );
};
export default SelectiveButtons;
