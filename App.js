import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import useRoute from "./src/router";
import { store } from "./src/redux/store";
import db from "./src/firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(db);

export default function App() {
  const [user, setUser] = useState(null);

  console.log(user);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  const routing = useRoute(user);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
