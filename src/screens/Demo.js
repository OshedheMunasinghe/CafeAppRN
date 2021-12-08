import { Button, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { Component, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { GlobalStyles } from "../styles/global.styles";
import LottieView from "lottie-react-native";

// this is for demo to prepare how font and themes should look like
//TODO remove this when everything is finished after app.

// todo TRY NAVIGATION IF THAT IS WORKING TOO! AND THEN GO AND WORK!

class Demo extends Component {


  constructor(props) {
    super(props);
    this.state = {
      play_btn: false,
    };
  }
  // const { colors } = useTheme(); // ! THIS IS THE PROBLEM



  render() {
    // const { colors } = useTheme();
    const playCoffee = () => {
      console.log("playing coffee animation");
      this.play_btn.play();
      setTimeout(() => {
        console.log("pausing...");
        callResumeCoffee();
      }, 2500);

    };

    const callResumeCoffee = () => {
      console.log("playing outro");
      this.play_btn.play(75, 0);
    };


   return(
     <View style={GlobalStyles.backgroundColor}>
       {/*<Text style={colors.text}>Hello there!</Text>*/}
       {/*<Button title={"play music"} color={colors.button.backgroundColor} />*/}
       {/*<Button title={"reset music"} color={colors.button.color} />*/}

       {/*  * making lottie button animation */}
       <View>
         <TouchableWithoutFeedback onPress={playCoffee}>
           <LottieView
             ref={
               animation => this.play_btn = animation
             }
             style={{ width: 100, height: 100 }}
             source={require("../../assets/lottie/21451-coffee-and-love.json")}
             loop={false} />
         </TouchableWithoutFeedback>
       </View>
     </View>
   )
  }
}

export default (Demo);
