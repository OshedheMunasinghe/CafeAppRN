import React from "react";
import { Image, View } from "react-native";
import IconMaterial from "react-native-vector-icons/MaterialIcons";

{/* TODO: ARE YOU GOING TO MAKE IT ONE COMP? IS IT GOING TO BE HARDCORDED?*/
}
{/*TODO: CLOSE BUTTON NEEDS LOGIC TO REMOVE OR IS IT GOING TO BE HARDCODED?*/
}

const imageSize = 100;
const OrderedIcon = ({ images }) => {
  return (
    <View style={{ marginTop: 18 }}>
      <Image source={images}
             style={{ width: imageSize, height: imageSize }} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{
          backgroundColor: "#D4A056",
          width: 28,
          height: 28,
          borderRadius: 28 / 2,
          opacity: 0.8,
          justifyContent: "center",
          alignItems: "center",
          bottom: 110,
        }}>
          <IconMaterial name="clear" size={10} color="white" />
        </View>
      </View>
    </View>

  );
};
export default OrderedIcon;
