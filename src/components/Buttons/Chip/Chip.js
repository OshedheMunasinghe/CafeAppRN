import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Chip = () => {
  return(
    <TouchableOpacity>
      <View style={{backgroundColor: '#C49450', width: 45, height:36, justifyContent:'center', alignItems: 'center', borderRadius: 45}}>
        <Text style={{
          fontSize: 14,
          fontFamily: 'Mont-Regular',
          color: 'white',
        }}>All</Text>
      </View>
    </TouchableOpacity>

  )
}
export default Chip
