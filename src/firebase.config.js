import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrqvaSxHsJO49Tiq8RAx4AzquFr93OxpE",
  authDomain: "react-recipe-yt-697dd.firebaseapp.com",
  projectId: "react-recipe-yt-697dd",
  storageBucket: "react-recipe-yt-697dd.appspot.com",
  messagingSenderId: "961746994463",
  appId: "1:961746994463:web:b38d5810c79f0e48fe9c2a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);