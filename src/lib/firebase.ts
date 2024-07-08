import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMCSG6vjzcSTkJi8bcRakg6m2pJYSq6L0",
  authDomain: "tech-tips-3b1c5.firebaseapp.com",
  projectId: "tech-tips-3b1c5",
  storageBucket: "tech-tips-3b1c5.appspot.com",
  messagingSenderId: "913502740553",
  appId: "1:913502740553:web:bda89709ef71c4b79adf98",
  measurementId: "G-B7KYLT754E",
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
