import React from "react";
import { ScrollView, View } from "react-native";
import ListofChips from "../../components/Lists/ListOfChips/ListofChips";
import Brandmarklogo from "../../components/BrandmarkLogo/Brandmarklogo";
import MenuTopBar from "../../components/MenuTopBar/MenuTopBar";

//TODO Scrollbar whole view
//TODO Cards of Cuppochino
//TODO Cards speciall for you only 3 hardCoded
//TODO Icon where you store cart
//TODO Navigation THIS IS GOING TO BE COMPLICATED GOOD LUCK :)
//! TODO Don't forget shadows
//TODO TOAST on limited components "SORRY THIS IS LIMITED EDT" kolla Heatmap hur Toast fungerar!??
// TODO priority logic later when icon has put cart
const Menu = () => {
  return (
    <View>
     <MenuTopBar/>
      <ScrollView pagingEnabled={true}>
        <ListofChips />
      </ScrollView>
    </View>
  );
};
export default Menu;
