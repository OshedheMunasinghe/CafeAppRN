import { Button, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { GlobalStyles } from "../styles/global.styles";
import LottieView from "lottie-react-native";
import Sound from "react-native-sound";

// this is for demo to prepare how font and themes should look like
//TODO remove this when everything is finished after app.


const Demo = () => {
  const { colors } = useTheme();

  // const buttonPress = new Sound(require("../../assets/music-ui/navigation_selection-complete-celebration.wav"), error => console.log(error + "något har gått galet"));
  const buttonPress = new Sound(require("../../assets/music-ui/notify.mp3"), error => console.log(error + "något har gått galet"));
  const playButtonPress = () => {
    buttonPress.play();
  };
  const resetButtonPress = () => {
    buttonPress.stop();
  };

  return (
    <View style={GlobalStyles.backgroundColor}>
      <Text style={colors.text}>Hello there!</Text>
      <Button title={"play music"} color={colors.button.backgroundColor} onPress={playButtonPress} />
      <Button title={"reset music"} color={colors.button.color} onPress={resetButtonPress} />
      <LottieView style={{ width: 500 }} source={require("../../assets/lottie/manLottie.json")} autoPlay={true} />
      <LottieView style={{ width: 100, height: 100 }} source={require("../../assets/lottie/21451-coffee-and-love.json")}
                  autoPlay={true} />
      <LottieView style={{ width: 100, height: 100 }} source={require("../../assets/lottie/icons8-react-native.json")}
                  autoPlay={true} />

    </View>
  );
};
export default (Demo);
