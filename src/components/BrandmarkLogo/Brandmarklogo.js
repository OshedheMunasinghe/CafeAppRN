import React from "react";
import { Text, View } from "react-native";
import { BrandmarklogoStyles } from "./brandmarklogo.styles";

const { textStyle, textEe, textCoff, conatiner } = BrandmarklogoStyles;

const Brandmarklogo = () => {
  return (
    <View style={conatiner}>
      <Text style={[textStyle, textCoff]}>Coff</Text>
      <Text style={[textStyle, textEe]}>ee</Text>
    </View>
  );
};
export default Brandmarklogo;
