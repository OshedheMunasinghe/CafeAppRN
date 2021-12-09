import React from "react";
import { ScrollView } from "react-native";
import ListofChips from "../../components/Lists/ListOfChips/ListofChips";

//TODO Scrollbar horizont: chips
//TODO Scrollbar whole view
//TODO Cards of Cuppochino
//TODO Cards speciall for you only 3 hardCoded
//TODO Brandmarkname
//TODO Icon where you store cart
//TODO Navigation THIS IS GOING TO BE COMPLICATED GOOD LUCK :)
//! TODO Don't forget shadows
//TODO TOAST on limited components "SORRY THIS IS LIMITED EDT" kolla Heatmap hur Toast fungerar!??

const Menu = () => {
  return (
    <ScrollView pagingEnabled={true}>
      <ListofChips />
    </ScrollView>
  );
};
export default Menu;
