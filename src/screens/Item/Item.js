import React from "react";
import { View } from "react-native";
import MenuTopBar from "../../components/MenuTopBar/MenuTopBar";
import SelectiveButtons from "../../components/Buttons/SML/SelectiveButtons";

//TODO make sure image can change diffrent size.
//TODO button indicator S M L
//TODO set menu bar for occation... remove it when you made super-class screen
//TODO BACK BUTTON NEEDED
const Item = () => {
  return (
    <View>
      <MenuTopBar />
      <View style={{}}>
        <SelectiveButtons />
      </View>

    </View>
  );
};
export default Item;
