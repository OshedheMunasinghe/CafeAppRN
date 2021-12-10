import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ItemCardStyles } from "./itemCard.styles";
import { AppStyles } from "../../../styles/app.styles";

const {
  container,
  cardContainer,
  textContainer,
  headText,
  priceText,
  extraText,
  rateText,
  peopleRateText,
} = ItemCardStyles;
const { shadow } = AppStyles;
const ItemCard = () => {
  return (
    <View style={container}>
      <View style={[cardContainer, shadow]}>

        <View style={textContainer}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <Text style={headText}>Espresso Cappuccino</Text>
            <Text style={priceText}>$68</Text>
          </View>

          <Text style={extraText}>With Oat Milk</Text>
          <View style={{
                flexDirection: "row",
                alignItems: "center",
            marginTop: 8
              }} >
            <Icon name="star" size={20} color="#D4A056" />
            <Text style={rateText}>4.5</Text>
            <Text style={peopleRateText}>(6.5385)</Text>
          </View>
        </View>
        <View>

        </View>

      </View>

    </View>);
};
export default ItemCard;
