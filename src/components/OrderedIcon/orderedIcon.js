import React from "react";
import { Image, View } from "react-native";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import { OrderedIconStyles } from "./orderedIcon.styles";

const imageSize = 100;
const { container, iconContainer, iconClearContainer } = OrderedIconStyles;
const OrderedIcon = ({ images }) => {
  return (
    <View style={container}>
      <Image source={images}
             style={{ width: imageSize, height: imageSize }} />
      <View style={iconContainer}>
        <View style={iconClearContainer}>
          <IconMaterial name="clear" size={10} color="white" />
        </View>
      </View>
    </View>

  );
};
export default OrderedIcon;
