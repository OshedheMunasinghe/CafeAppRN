import React from "react";
import Demo from "./src/screens/Demo";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalStyles } from "./src/styles/global.styles";
import { SafeAreaView, StatusBar } from "react-native";
import { AppStyles } from "./src/styles/app.styles";

const { safeAreaViewContainer } = AppStyles;
const App = () => {
  return (
    <NavigationContainer theme={GlobalStyles}>
      <StatusBar backgroundColor={"#d5c0ad"} barStyle={"dark-content"} />
      <SafeAreaView style={safeAreaViewContainer}>
        <Demo />
      </SafeAreaView>

    </NavigationContainer>
  );
};


export default App;
