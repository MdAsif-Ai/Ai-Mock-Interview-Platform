// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbKYd0iOWD1CpCf-Gm05iCJecbVjKL3Oo",
  authDomain: "hiremind-acf3c.firebaseapp.com",
  projectId: "hiremind-acf3c",
  storageBucket: "hiremind-acf3c.firebasestorage.app",
  messagingSenderId: "278333027184",
  appId: "1:278333027184:web:00bbbf2879802ee49b15b5",
  measurementId: "G-SF901DVBFT",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
