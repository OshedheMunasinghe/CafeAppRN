import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStyles } from "./src/styles/app.styles";
import { GlobalStyles } from "./src/styles/global.styles";
import { SafeAreaView, StatusBar } from "react-native";
import Menu from "./src/screens/Menu/Menu";
import Splash from "./src/screens/Splash/Splash";

const { safeAreaViewContainer } = AppStyles;

const App = () => {
  return (
    <NavigationContainer theme={GlobalStyles}>
      <StatusBar backgroundColor={"#d5c0ad"} barStyle={"dark-content"} />
      <SafeAreaView style={safeAreaViewContainer}>
        <Splash/>
      </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;
