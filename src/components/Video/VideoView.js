import React from "react";
import { View } from "react-native";
import Video from "react-native-video";
import { VideoStyles } from "./video.styles";

const { container, video } = VideoStyles;
const videoClip = require("../../../assets/video/cafevideo.mp4");
const VideoView = () => {
  return (
    <View style={container}>
      <Video
        source={videoClip}
        muted={true}
        repeat={true}
        style={video}
      />
    </View>
  );
};
export default VideoView;
