import React from "react";
import { Text, View } from "react-native";
import { DescriptionStyles } from "./description.styles";

const {container, headerText, paragraph} = DescriptionStyles
const Description = () => {
  return (
    <View style={container}>
      <Text style={headerText}>Description</Text>

      <Text style={paragraph}>Traditional cappuccino has even distribution of espresso, steamed milk, and foamed milk. A latte has way
        more steamed milk and a light layer of foam.
      </Text>
    </View>
  );
};
export default Description;
