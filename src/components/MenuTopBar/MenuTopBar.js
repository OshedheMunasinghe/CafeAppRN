import React from "react";
import { View } from "react-native";
import Brandmarklogo from "../BrandmarkLogo/Brandmarklogo";
import { MenutopbarStyles } from "./menutopbar.styles";
import Icon from "react-native-vector-icons/Feather";
import { AppStyles } from "../../styles/app.styles";

const { container, iconContainer } = MenutopbarStyles;
const { shadow } = AppStyles;

const MenuTopBar = () => {
  return (
    <View style={container}>
      <Brandmarklogo />
      <Icon name="coffee" size={30} color="black" style={[iconContainer, shadow]} />
    </View>
  );
};
export default MenuTopBar;
