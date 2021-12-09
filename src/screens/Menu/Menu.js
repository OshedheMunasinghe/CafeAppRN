import React from "react";
import { ScrollView, View } from "react-native";
import ListOfChips from "../../components/Lists/ListOfChips/ListofChips";
import MenuTopBar from "../../components/MenuTopBar/MenuTopBar";
import ListOfAllDrinks from "../../components/Lists/ListOfAllDrinks/ListOfAllDrinks";
import SpecialView from "../../components/Special/SpecialView";

//TODO BUGG SCROLLVIEW MAYBE CHANGE TO FLAT ASS LIST?
//TODO Navigation THIS IS GOING TO BE COMPLICATED GOOD LUCK :)
const Menu = () => {
  return (
    <View>
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
