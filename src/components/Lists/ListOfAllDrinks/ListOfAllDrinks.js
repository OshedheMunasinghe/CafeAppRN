import React from "react";
import { ScrollView } from "react-native";
import DrinkCard from "../../Cards/DrinkCard/DrinkCard";
import { ListofalldrinksStyles } from "./listofalldrinks.styles";

const cuppochino = require("../../../../assets/images/coffees/cuppoccino.png");
const espresso = require("../../../../assets/images/coffees/brownChino.png");
const whiteEspresso = require("../../../../assets/images/coffees/whiteChino.png");

const { container } = ListofalldrinksStyles;
const ListOfAllDrinks = () => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={container}>
      <DrinkCard headTitle={"Espresso Cuppochino"} subTitle={"Dark Roast"} price={"$68"} images={cuppochino} />
      <DrinkCard headTitle={"Caffè Mocha Americano"} subTitle={"Decaf Pike"} price={"$48"} images={espresso} />
      <DrinkCard headTitle={"Espresso Latté"} subTitle={"Cream Milk"} price={"$29"} images={whiteEspresso} />
    </ScrollView>
  );
};
export default ListOfAllDrinks;
