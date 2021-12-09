import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStyles } from "./src/styles/app.styles";
import { GlobalStyles } from "./src/styles/global.styles";
import { SafeAreaView, StatusBar } from "react-native";
import Item from "./src/screens/Item/Item";

const { safeAreaViewContainer } = AppStyles;

const App = () => {
  return (
    <NavigationContainer theme={GlobalStyles}>
      <StatusBar backgroundColor={"#d5c0ad"} barStyle={"dark-content"} />
      <SafeAreaView style={safeAreaViewContainer}>
        <Item />
      </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;
