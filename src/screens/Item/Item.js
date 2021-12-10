import React from "react";
import { View } from "react-native";
import MenuTopBar from "../../components/MenuTopBar/MenuTopBar";
import SelectiveCups from "../../components/SelectiveCups/SelectiveCups";
import ItemCard from "../../components/Cards/Item/itemCard";
import Description from "../../components/Description/description";
import BuyButton from "../../components/Buttons/Buy/buyButton";

//TODO make sure image can change diffrent size.
//TODO button indicator S M L
//TODO set menu bar for occation... remove it when you made super-class screen
//TODO BACK BUTTON NEEDED
const Item = () => {
  return (
    <View>
      {/* ! MENU TOP BAR SHOULDNT BE HERE! IT SHOULD BE IN SUPER - SCREEN CLASS*/}
      <MenuTopBar />
      <SelectiveCups />
      <ItemCard />
      <Description />
      <BuyButton />
    </View>
  );
};
export default Item;
