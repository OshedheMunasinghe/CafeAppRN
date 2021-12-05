import { Button, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { GlobalStyles } from "../styles/global.styles";

// this is for demo to prepare how font and themes should look like
//TODO remove this when everything is finished after app.

const Demo = () => {
  const { colors } = useTheme();
  return (
    <View style={GlobalStyles.backgroundColor}>
      <Text style={colors.text}>Hello there!</Text>
      <Button title={"bajs"} color={colors.button.backgroundColor} />
      <Button title={"bajs"} color={colors.button.color} />
    </View>
  );
};
export default (Demo);
