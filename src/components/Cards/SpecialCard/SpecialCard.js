import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SpecialCardStyles } from "./specialCardStyles";

const imageSize = 80;
const { container, textContainer, headText, subText, priceText, imageContainer } = SpecialCardStyles;
const SpecialCard = ({ headTitle, subTitle, price, images }) => {
  return (
    <TouchableOpacity style={container}>
      {/* TODO missing navigation*/}
      <View style={textContainer}>
        {/*  * HEAD TITLE*/}
        <Text style={headText}>{headTitle}</Text>
        {/*  * SUB TITLE*/}
        <Text style={subText}>{subTitle}</Text>
        {/*  * PRICE */}
        <Text style={priceText}>{price}</Text>
      </View>
      <View style={imageContainer}>
        <Image source={images} style={{ width: imageSize, height: imageSize }} />
      </View>
    </TouchableOpacity>
  );
};

export default SpecialCard;
