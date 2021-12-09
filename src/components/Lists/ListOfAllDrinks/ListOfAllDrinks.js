import React from "react";
import { ScrollView } from "react-native";
import DrinkCard from "../../Cards/DrinkCard/DrinkCard";

const ListOfAllDrinks = () => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={{marginTop: 32, marginLeft: 16}}>
      <DrinkCard headTitle={'Espresso Cuppochino'} subTitle={'Dark Roast'} price={'$68'}/>
      <DrinkCard headTitle={'Caffè Mocha Americano'} subTitle={'Decaf Pike'} price={'$48'} />
      <DrinkCard headTitle={'Espresso Latté'} subTitle={'Cream Milk'} price={'$29'} />
    </ScrollView>
  );
};
export default ListOfAllDrinks;
