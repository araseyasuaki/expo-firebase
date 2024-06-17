import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import { Stack } from 'expo-router';
import 'react-native-reanimated';

const Signin = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    const arase = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("ログアウトエラー:", error);
      }
    };
    arase();
  },[])
  return (
    // <View>
    //   {user ? (
    //     <View>
    //       <Text>ようこそ！</Text>
    //       <SignoutBtn/>
    //       <Stack>
    //         <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    //       </Stack>
    //     </View>
    //   ) : (
    //     <SigninBtn />
    //   )}
    // </View>
    <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
          </Stack>
  );
};

export default Signin;


function SigninBtn() {
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("ログインエラー:", error);
    }
  }
  return(
    <Button title='サインイン' onPress={login}/>
  )
}

function SignoutBtn() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("ログアウトエラー:", error);
    }
  }
  return (
    <Button title='サインアウト' onPress={logout} />
  )
}








