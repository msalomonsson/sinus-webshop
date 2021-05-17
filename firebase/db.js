import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnwbrWsvPxBkl1n8xzXUUgn4V1Y4eox4c",
  authDomain: "webshop-e12be.firebaseapp.com",
  projectId: "webshop-e12be",
  storageBucket: "webshop-e12be.appspot.com",
  messagingSenderId: "839292745592",
  appId: "1:839292745592:web:3c311ceea184603ad6ba8d",
};

const db = firebase.initializeApp(firebaseConfig);

export default db;
