import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Video from 'react-native-video';

const Splash = () => {
  return(
    <View style={{backgroundColor: 'white', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
     {/* * Video */}
<View>
</View>
   <Video
     source={require('../../../assets/video/cafevideo.mp4')}
     repeat={true}
     muted={true}
     style={{width: '100%', height: '100%'}}
   />
      <View>
        <TouchableOpacity style={{
          backgroundColor: '#d78b41',
          width: 250,
          borderRadius: 16,
          marginBottom: 100,
          height: 59,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#d5b89a'
        }}>
          <Text style={{fontFamily: "Mont-Regular", fontSize: 18 , color: 'black', textAlign: 'center' }}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Splash
