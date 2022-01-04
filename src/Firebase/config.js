import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAj2oIm6nQoESjby-01Ji0-tj6hDeZt_mk",
  authDomain: "clothesshop-ac035.firebaseapp.com",
  databaseURL: "https://clothesshop-ac035-default-rtdb.firebaseio.com",
  projectId: "clothesshop-ac035",
  storageBucket: "clothesshop-ac035.appspot.com",
  messagingSenderId: "417506445023",
  appId: "1:417506445023:web:8bba234a2a6127bb3dcb6a",
  measurementId: "G-2ZZ6Q8NQBK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
export default firebase;
