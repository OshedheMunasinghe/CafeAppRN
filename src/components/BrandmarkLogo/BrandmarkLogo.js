import React from "react";
import { Text, View } from "react-native";
import { BrandmarkLogoStyles } from "./brandmarkLogo.styles";

const { textStyle, textEe, textCoff, container } = BrandmarkLogoStyles;

const BrandmarkLogo = () => {
  return (
    <View style={container}>
      <Text style={[textStyle, textCoff]}>Coff</Text>
      <Text style={[textStyle, textEe]}>ee</Text>
    </View>
  );
};
export default BrandmarkLogo;
