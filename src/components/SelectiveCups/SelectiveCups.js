import React from "react";
import { Image, View } from "react-native";
import StandardCircleButton from "../Buttons/SML/Standard/StandardCircleButton";
import ChoosenCircleButton from "../Buttons/SML/Choosen/ChoosenCircleButton";
import { SelectiveCupsStyles } from "./selectiveCupsStyles";

const { container, boderContainer, buttonsContainer } = SelectiveCupsStyles;
// ? M 250 , S200 , L 300
const imageSize = 200;
const images = require("../../../assets/images/coffees/brownChino.png");
//TODO Logic when user has pressed button
// TODO when user pressed small make price -10 M: neutral L: +20

const SelectiveCups = () => {
  return (
    <View style={container}>
      <Image source={images} style={{ width: imageSize, height: imageSize }} />
      <View style={boderContainer} />
      <View style={buttonsContainer}>
        {/*TODO this need logic */}
        <StandardCircleButton title={"S"} />
        <ChoosenCircleButton title={"M"} />
        <StandardCircleButton title={"L"} />
      </View>

    </View>


  );
};
export default SelectiveCups;
