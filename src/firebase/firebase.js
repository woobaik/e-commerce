import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: `${REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "react-shop-a7415.firebaseapp.com",
  databaseURL: "https://react-shop-a7415.firebaseio.com",
  projectId: "react-shop-a7415",
  storageBucket: "",
  messagingSenderId: "472548950771",
  appId: "1:472548950771:web:d96b979450f3e9da2c6d86",
  measurementId: "G-8L3777F9HN"
}
firebase.initializeApp(firebaseConfig)
const provider = new firebase.auth.GoogleAuthProvider()
