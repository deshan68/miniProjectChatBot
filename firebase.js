import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-32ZrLLnx_RREmw_XioMzicZ4kRZkkMc",
  authDomain: "chatbot-1e300.firebaseapp.com",
  projectId: "chatbot-1e300",
  storageBucket: "chatbot-1e300.appspot.com",
  messagingSenderId: "681716370625",
  appId: "1:681716370625:web:2a220ab359c81f388b5840",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, firebaseConfig };
