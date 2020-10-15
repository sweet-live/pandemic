import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import * as Font from "expo-font";
import { AppContainer } from "./navigation/index";
import Splash from "./screens/Splash";
import LogIn from "./screens/LogIn";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    loadFonts();
    signIn();
  }, []);
  const signIn = async () => {
    GoogleSignin.configure({
      webClientId:
        "1062183689255-jmo7ms1vjd02v80th9g6pnf3ep37ug6u.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false,
    });
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    try {
      const userInfo = await GoogleSignin.signInSilently();

      if (userInfo) {
        console.log(userInfo);
        setAuth(true);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };
  const loadFonts = async () => {
    await Font.loadAsync({
      Montserrat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    });
    setTimeout(() => {
      setFontLoaded(true);
    }, 2000);
  };
  return fontLoaded && auth ? <AppContainer /> : <Splash />;
}
