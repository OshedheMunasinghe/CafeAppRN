import React from "react";
import { View } from "react-native";
import SelectiveCups from "../../components/SelectiveCups/SelectiveCups";
import ItemCard from "../../components/Cards/Item/itemCard";
import Description from "../../components/Description/description";
import BuyButton from "../../components/Buttons/Buy/buyButton";
import { GlobalStyles } from "../../styles/global.styles";


const { backgroundScreens } = GlobalStyles;
const Item = () => {
  return (
    <View style={backgroundScreens}>
      <SelectiveCups />
      <ItemCard />
      <Description />
      <BuyButton />
    </View>
  );
};
export default Item;
