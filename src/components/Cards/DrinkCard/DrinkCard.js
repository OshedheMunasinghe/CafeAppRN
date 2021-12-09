import React from "react";
import { Text, View } from "react-native";
import { AppStyles } from "../../../styles/app.styles";

const {shadow} = AppStyles
const DrinkCard = ({headTitle, subTitle, price}) => {
  return (
    <View style={[{backgroundColor: '#212325', width: 180, height: 281, borderRadius: 30, marginLeft: 23}, shadow]}>

   {/* ! TODO SHALL IT MAKE IT TO COMPONENT? THIS CAN BE OVER KILL WITH LOGIC!*/}
   {/* * DRINK TEXT*/}
   <View style={{justifyContent: "flex-start", alignItems: "flex-start", marginLeft: 18, marginTop: 150}}>
     {/* * HEADER */}
     <Text style={{fontFamily: 'Gent-Bold', fontSize: 24, color: '#F8E7D7'}}>{headTitle}</Text>
     {/* * SUB TITLE*/}
     <Text style={{fontFamily: 'Mont-Bold', fontSize: 12, color: '#9199A1'}}>{subTitle}</Text>
     {/*  * PRICE */}
     {/* TODO denna här ska finnas en knapp och den ska vara flex box! lYCKA TILL :D HAHAHA*/}
     <View style={{marginTop: 4}}>
       <Text style={{fontFamily: 'Mont-Bold', fontSize: 18, color: '#C49450'}}>{price}</Text>
     </View>

   </View>


    {/*  TODO make button add, which icon are you going to use? it is not installed!*/}
    </View>
  );
};
export default DrinkCard;
