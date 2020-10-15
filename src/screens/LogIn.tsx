import * as React from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-community/google-signin";
import { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView, View, Text } from "react-native";
import Button from "../components/utilities/Button";
import { Header } from "react-native/Libraries/NewAppScreen";

const LogIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("User info", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("canceled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("play services not available");
      } else {
        console.log("Err", error, error.code);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "1062183689255-jmo7ms1vjd02v80th9g6pnf3ep37ug6u.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false,
    });
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
      setUserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />

          <View>
            <View>
              <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={_signIn}
              />
            </View>
            <View>
              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && <Button onPress={signOut} text="LogOut"></Button>}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default LogIn;
