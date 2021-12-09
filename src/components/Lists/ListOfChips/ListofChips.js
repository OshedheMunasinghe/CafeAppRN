import React from "react";
import { ScrollView } from "react-native";
import Chip from "../../Buttons/Chip/Chip";
import { ListofchipsStyles } from "./listofchips.styles";

const { container } = ListofchipsStyles;
//TODO: All must be auto select how to do that in logic?
const ListOfChips = () => {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={container}>
      <Chip text={"All"} width={59} />
      <Chip text={"Cappuccino"} width={110} />
      <Chip text={"StarBucks"} width={100} />
      <Chip text={"Nescafé"} width={100} />
    </ScrollView>
  );

};
export default ListOfChips;
