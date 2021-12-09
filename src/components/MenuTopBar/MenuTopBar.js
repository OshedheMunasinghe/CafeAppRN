import React from "react";
import { View } from "react-native";
import Brandmarklogo from "../BrandmarkLogo/Brandmarklogo";
import { MenutopbarStyles } from "./menutopbar.styles";

const { container } = MenutopbarStyles;
const MenuTopBar = () => {
  return (
    <View style={container}>
      <Brandmarklogo />
    </View>
  );
};
export default MenuTopBar;
