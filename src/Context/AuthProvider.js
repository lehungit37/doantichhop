import React, { useContext, useEffect } from "react";
import {  useState } from "react/cjs/react.development";
import firebase, { auth } from "../Firebase/config";
export const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const db = firebase.firestore();

  //register
  const signUp = async (email, password, value) => {
    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const data = {
          uid: user.uid,
          displayName: value.displayName,
          password: value.password,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL
            ? user.photoURL
            : " https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
          email: user.email,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
          type: "email-password",
          role: "user"
        };

        db.collection("KhachHang")
          .doc(user.uid)
          .set(data)
          .then(() => {
            alert("Register success");
          })
          .catch(() => {
            alert("Register Fail");
          });
      });
  };

  const signIn = async (email, password) => {
    return await auth
      .signInWithEmailAndPassword(email, password)
      // .then(() => {
      //   alert("Login Success");
      // })
      // .catch(() => {
      //   alert("Login fail");
      // });
  };
  const signOut = async () => {
    return await auth.signOut();
  };

  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  //login with facebook
  const loginFacebook = async () => {
    return await auth.signInWithPopup(fbProvider).then((result) => {
      const { additionalUserInfo, user } = result;
      console.log({additionalUserInfo, user});
      const data = {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
          ? user.photoURL
          : " https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
        phoneNumber: user.phoneNumber,
        email: user.email,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
        role: "user",
        type: "facebook"

      };
      if (additionalUserInfo.isNewUser) {
        db.collection("KhachHang")
          .doc(user.uid)
          .set(data)
          .then(() => {
            alert("Login success");
          })
          .catch(() => alert("Login Fail"));
      }
    });
  };

  //login with google
  const loginGoogle = async () => {
    return await firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result);
        const { additionalUserInfo, user } = result;
        const data = {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
            ? user.photoURL
            : " https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
          phoneNumber: user.phoneNumber,
          email: user.email,
          createAt: firebase.firestore.FieldValue.serverTimestamp(),
          role: "user",
          type: "google"
        };
        if (additionalUserInfo.isNewUser) {
          db.collection("KhachHang").doc(user.uid).set(data);
        }
        alert("Login success");
      })
      .catch(() => alert("Login Fail"));
  };

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    loginFacebook,
    loginGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
