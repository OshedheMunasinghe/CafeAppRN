import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalStyles } from "./src/styles/global.styles";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import Splash from "./src/screens/Splash/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { safeAreaViewContainer } = GlobalStyles;
const headerShownBool = false;
const Stack = createNativeStackNavigator();


function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: 'black'}}>Congratualtion, you are in Home Screen :) </Text>
    </View>
  );
}



const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#d5c0ad"} barStyle={"dark-content"} />
      <SafeAreaView style={safeAreaViewContainer}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: headerShownBool }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: headerShownBool }} />
        </Stack.Navigator>

      </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;
