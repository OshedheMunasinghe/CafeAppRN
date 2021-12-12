import { StatusBar, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../styles/global.styles";
import BoxView from "../../components/Cards/BoxCard/BoxView";
import { ThankYouStyles } from "./thankYouStyles";

const { thankYouViewContainer } = GlobalStyles;
const { text } = ThankYouStyles;

const statusBackgrClr = "#37393b";
const barStyleType = "light-content";

function TextOutro() {
  return (
    <Text
      style={text}>
      Wanna play again? {"\n"}
      Restart the app</Text>
  );
}


const ThankYou = () => {
  return (
    <View style={[thankYouViewContainer]}>
      <StatusBar backgroundColor={statusBackgrClr} barStyle={barStyleType} />
      <BoxView />
      <TextOutro />
    </View>
  );
};
export default ThankYou;
