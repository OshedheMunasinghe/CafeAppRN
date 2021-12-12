import React from "react";
import { ScrollView, Text, View } from "react-native";
import ListOfChips from "../../components/Lists/ListOfChips/ListofChips";
import MenuTopBar from "../../components/MenuTopBar/MenuTopBar";
import ListOfAllDrinks from "../../components/Lists/ListOfAllDrinks/ListOfAllDrinks";
import SpecialView from "../../components/Special/SpecialView";
import { GlobalStyles } from "../../styles/global.styles";

const { backgroundScreens } = GlobalStyles;
const Menu = () => {


  return (
    <View style={backgroundScreens}>
      <MenuTopBar />
      <ScrollView pagingEnabled={true}>
        <ListOfChips />
        <ListOfAllDrinks />
        <SpecialView />
      </ScrollView>
    </View>
  );
};
export default Menu;
