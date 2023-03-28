import { useEffect, useState } from "react";
import {} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useRoute from "../router";
import db from "../firebase/config";

const auth = getAuth(db);

const Main = () => {
  const [user, setUser] = useState(null);

  const state = useSelector((state) => state);
  console.log("user", state);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  const routing = useRoute(user);

  useEffect(() => {}, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
export default Main;
