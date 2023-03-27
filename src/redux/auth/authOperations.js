import db from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { authSlice } from "./authReducer";

const auth = getAuth(db);

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      //   console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
// export const authSignOutUser = () => async (dispatch, getState) => {
//   try {
//   } catch (error) {
//     console.log(error.message);
//   }
// };
