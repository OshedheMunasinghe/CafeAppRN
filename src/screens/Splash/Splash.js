import React from "react";
import { View } from "react-native";
import Video from "react-native-video";
import OrderNowButton from "../../components/Buttons/OrderNow/OrderNowButton";
import { SplashStyles } from "./splash.styles";

const { container, video } = SplashStyles;
const videoType = require("../../../assets/video/cafevideo.mp4");
const Splash = () => {
  return (
    <View style={container}>
      <Video
        source={videoType}
        repeat={true}
        muted={true}
        style={video}
      />
      <OrderNowButton/>
    </View>
  );
};
export default Splash;
