import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../../../styles/global.styles";
import AddButton from "../../Buttons/Add/AddButton";
import { DrinkCardStyles } from "./drinkCardStyles";

const { shadow } = GlobalStyles;
const { textContainer, container, imageContainer, headerText, subText, priceText } = DrinkCardStyles;
const imageSize = 120;
const DrinkCard = ({ headTitle, subTitle, price, images }) => {
    return (
//TODO MISSING NAVIGATION TO ITEM_VIEW
      <TouchableOpacity style={[container, shadow]}>
        {/*   * DRINK IMAGE */}
        <View style={imageContainer}>
          <Image source={images} style={{ width: imageSize, height: imageSize }} />
        </View>

        {/* * DRINKS*/}
        <View style={textContainer}>
          {/* * HEADER */}
          <Text style={headerText}>{headTitle}</Text>
          {/* * SUB TITLE*/}
          <Text style={subText}>{subTitle}</Text>
          {/*  * PRICE */}
          <Text style={priceText}>{price}</Text>
        </View>
        {/*TODO fix the logic with AddButton*/}
        <AddButton />
      </TouchableOpacity>
    );
  }
;
export default DrinkCard;
