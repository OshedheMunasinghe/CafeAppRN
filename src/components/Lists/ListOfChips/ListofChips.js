import React from "react";
import { ScrollView } from "react-native";
import Chip from "../../Buttons/Chip/Chip";

const ListOfChips = () =>{
  return(
    <ScrollView horizontal={true} pagingEnabled={true}>
      <Chip text={'hello'} width={59}/>
      <Chip text={'Cappuccino'} width={110}/>
      <Chip text={'StarBucks'} width={100}/>
    </ScrollView>
  )

}
export default ListOfChips
