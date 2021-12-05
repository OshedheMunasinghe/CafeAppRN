import { Button, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

// this is for demo to prepare how font and themes should look like
//TODO remove this when everything is finished after app.

const Demo = () => {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.primary }}>
      <Text style={{ fontSize: 24, textAlign: "center", fontFamily: "Gent-Bold" }}>Hello there!</Text>
      <Text style={{ fontSize: 24, textAlign: "center", fontFamily: "Mont-Light" }}>Hello there!</Text>
      <Text style={{ fontSize: 24, textAlign: "center", color: colors.text }}>Hello there!</Text>
      <Button title={"bajs"} color={colors.ownVariable} />
      <Button title={"bajs"} color={colors.button.color} />
    </View>
  );
};
export default (Demo);
