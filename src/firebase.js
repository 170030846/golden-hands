import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6ZDQqQ-1ElNfhc3stBL8qRBajYpQHGl0",
  authDomain: "golden-hands-d6986.firebaseapp.com",
  databaseURL: "https://golden-hands-d6986.firebaseio.com",
  projectId: "golden-hands-d6986",
  storageBucket: "golden-hands-d6986.appspot.com",
  messagingSenderId: "381909536740",
  appId: "1:381909536740:web:e9caddc02c03255229c1f1",
  measurementId: "G-5S9S4PPV04",
});

const auth = firebase.auth();

export { auth };
