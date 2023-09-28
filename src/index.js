import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkHNJRMd8UVfd7ziFrQq5LUAVlm_wLb1M",
  authDomain: "cart-b6529.firebaseapp.com",
  projectId: "cart-b6529",
  storageBucket: "cart-b6529.appspot.com",
  messagingSenderId: "796904810485",
  appId: "1:796904810485:web:28b3ede3d53d5203a922bc",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
