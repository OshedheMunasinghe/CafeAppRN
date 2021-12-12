import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../../../styles/global.styles";
import AddButton from "../../Buttons/Add/AddButton";
import { DrinkCardStyles } from "./drinkCardStyles";
import { useNavigation } from "@react-navigation/native";

const { shadow } = GlobalStyles;
const { textContainer, container, imageContainer, headerText, subText, priceText } = DrinkCardStyles;
const imageSize = 120;
const DrinkCard = ({ headTitle, subTitle, price, images, onPress }) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={[container, shadow]} onPress={() => {
        navigation.navigate("Item");
      }}>
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
        <AddButton />
      </TouchableOpacity>
    );
  }
;
export default DrinkCard;
