import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Chip from "../../components/Buttons/Chip/Chip";

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
    <View>
     {/* <ScrollView pagingEnabled={true}>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      <View style={{backgroundColor: 'black', width: 100, height: 100, borderRadius: 8, marginBottom: 8}}/>
      </ScrollView>*/}

    {/* * CHIPS */}
{/*      TODO en komponent lista med chips här*/}
{/*      TODO varje chips ska ha en props text där man kan ändra text och kanske anropa databas? */}
      <ScrollView horizontal={true} pagingEnabled={true}>
        <Chip/>
        <Chip/>
      </ScrollView>



    </View>
  );
};
export default Menu;
