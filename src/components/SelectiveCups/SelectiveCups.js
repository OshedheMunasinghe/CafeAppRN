import React, { useState } from "react";
import { Image, View } from "react-native";
import StandardCircleButton from "../Buttons/SML/Standard/StandardCircleButton";
import { SelectiveCupsStyles } from "./selectiveCupsStyles";
import ChosenCircleButton from "../Buttons/SML/Choosen/ChosenCircleButton";
import BuyButton from "../Buttons/Buy/buyButton";

const { container, boderContainer, buttonsContainer } = SelectiveCupsStyles;
let imageSize = 250;
const images = require("../../../assets/images/coffees/brownChino.png");
// TODO when user pressed small make price -10 M: neutral L: +20

const SelectiveCups = () => {
  const [smallCupPressed, setSmallCupPressed] = useState(false);
  const [mediumCupPressed, setMediumCupPressed] = useState(true);
  const [largeCupPressed, setLageCupPressed] = useState(false)

  const smallCup = () => {
    console.log(" small cup clicked");
    setSmallCupPressed(true);
    imageSize = 200;
    setMediumCupPressed(false)
    setLageCupPressed(false)
  };

  const mediumCup = () => {
    console.log("medium cup clicked");
    imageSize = 250;
    setMediumCupPressed(true);
    setSmallCupPressed(false)
    setLageCupPressed(false)
  };

  const largeCup = () => {
    console.log("big cup clicked");
    imageSize = 300
    setLageCupPressed(true)
    setMediumCupPressed(false)
    setSmallCupPressed(false)
  };



  return (
    <View style={container}>
      <Image source={images} style={{ width: imageSize, height: imageSize }} />
      <View style={boderContainer} />
      <View style={buttonsContainer}>
        {/* * SMALL CUP */}
        {!smallCupPressed ? <StandardCircleButton title={"S"} onPress={() => smallCup()} />
          :
          <ChosenCircleButton title={"S"} />
         }

        {/* * MEDIUM CUP */}

        {!mediumCupPressed ? <StandardCircleButton title={"M"} onPress={() => mediumCup()} />
          :
          <ChosenCircleButton title={"M"} />
        }
        {/* * LARGE CUP */}
        {!largeCupPressed ? <StandardCircleButton title={"L"} onPress={() => largeCup()} />
          :
          <ChosenCircleButton title={"L"} />
        }
        {/*<StandardCircleButton title={"L"} onPress={() => largeCup()} />*/}
      </View>
    </View>


  );
};
export default SelectiveCups;
