import React from "react";
import Demo from "./src/screens/Demo";
import { NavigationContainer } from "@react-navigation/native";

//TODO don't forget to change color statusbar (time, wifi icon) #212325
//TODO move this theme to own style?
const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(10,10,215)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    ownVariable: "#4bed17",
    button: {
      fontFamily: "Mont-Regular",
      color: "#5614c9",
      background: "#d5c7ed",
    },
  },
};
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Demo />
    </NavigationContainer>
  );
};


export default App;
