import { Image, Text, View } from "react-native";
import React from "react";
import { BoxViewStyles } from "./boxView.styles";

const { container, textContainer, textHeader, image, imageContainer } = BoxViewStyles;

function TextP() {
  return (<Text style={textContainer}>
    This app is made in demo version for education only. {"\n"}
    Please contact the owner for more information.</Text>);
}

function Images() {
  const imageSrc = require("../../../../assets/images/me.png");
  return (
    <View style={imageContainer}>
      <Image
        style={image}
        source={imageSrc}
      />
    </View>
  );
}

function TextHeader() {
  return (<Text style={textHeader}>Thank you</Text>);
}

const BoxView = () => {
  return (
    <View style={container}>
      <TextP />
      <Images />
      <TextHeader />
    </View>
  );
};
export default BoxView;
