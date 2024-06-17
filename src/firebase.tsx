import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC9WgjkdL3prAPfuOVhlJ42Pb62XXMJvqE",
  authDomain: "webapp1-b1c83.firebaseapp.com",
  projectId: "webapp1-b1c83",
  storageBucket: "webapp1-b1c83.appspot.com",
  messagingSenderId: "914673193210",
  appId: "1:914673193210:web:59af1a11f11aed679df943"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyC9WgjkdL3prAPfuOVhlJ42Pb62XXMJvqE",
//   authDomain: "webapp1-b1c83.firebaseapp.com",
//   projectId: "webapp1-b1c83",
//   storageBucket: "webapp1-b1c83.appspot.com",
//   messagingSenderId: "914673193210",
//   appId: "1:914673193210:web:59af1a11f11aed679df943"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

// async function signInWithGoogle() {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const token = await result.user.getIdToken();

//     // トークンをAsyncStorageに保存
//     await AsyncStorage.setItem('userToken', token);

//     console.log('User signed in and token saved:', token);
//   } catch (error) {
//     console.error('Error signing in with Google:', error);
//   }
// }

// async function getStoredUserToken() {
//   try {
//     const token = await AsyncStorage.getItem('userToken');
//     if (token !== null) {
//       console.log('User token retrieved:', token);
//       // ここでトークンを使って認証を行うロジックを追加
//     } else {
//       console.log('No user token found.');
//     }
//   } catch (error) {
//     console.error('Error retrieving user token:', error);
//   }
// }

// // アプリの初期化時に呼び出す
// getStoredUserToken();

// async function signOut() {
//   try {
//     await auth.signOut();
//     // AsyncStorageからトークンを削除
//     await AsyncStorage.removeItem('userToken');
//     console.log('User signed out and token removed');
//   } catch (error) {
//     console.error('Error signing out:', error);
//   }
// }

// export { auth, provider, signInWithGoogle, signOut, getStoredUserToken };

