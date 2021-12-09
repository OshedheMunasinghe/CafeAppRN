import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChipStyles } from "./chip.styles";
import { AppStyles } from "../../../styles/app.styles";

const { container, touchableContainer, textStyle } = ChipStyles;
const { shadow } = AppStyles;
const Chip = ({ text, width }) => {
  const [pressed, setPressed] = useState(true);
  const [lightPress, setLightPress] = useState("#D9CABC");
  const [textColor, setTextColor] = useState("#000");

  // Challange to make it 2 in one
  const [enlightButton, setEnlightButton] = useState({ color: "#000", backgroundColor: "#D9CABC" });
  const buttonHandler = () => {
    console.log("Button Pressed: " + text);
    // setLightPress("#C49450");
    // setTextColor("#fff");
    // setTouchChip(false)
    // setEnlightButton({color: "#FFF", backgroundColor: "#C49450" });
    setPressed(false)
  };
  return (
    <View>

        <TouchableOpacity style={[touchableContainer]} onPress={buttonHandler}>
          {/*    * ORGINAL */}
          {/*    <View style={[{
            width: width,
            backgroundColor: lightPress,
          },
            container,
            shadow,
          ]}>*/}

          <View style={[
            {
              width: width,
              backgroundColor: pressed ? 'black' : 'white',
            },
            container,
            shadow,
            // enlightButton,
          ]}>

            <Text style={[textStyle, { color: pressed ? 'white' : 'black' }]}>{text}</Text>
          </View>
        </TouchableOpacity>

    </View>
    /*<TouchableOpacity style={[touchableContainer]}>
      <View style={[{
        width: width,
        backgroundColor: "#C49450",
      },
        container,
        shadow,
      ]}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>*/
  );
};
export default Chip;
