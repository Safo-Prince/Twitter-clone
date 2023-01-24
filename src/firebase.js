// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiRm4MpcsEfSP0nmG7a3v7WhPOTBS0jj0",
  authDomain: "twitterclone-92c7d.firebaseapp.com",
  projectId: "twitterclone-92c7d",
  storageBucket: "twitterclone-92c7d.appspot.com",
  messagingSenderId: "945215107768",
  appId: "1:945215107768:web:52a6d9464cf79864c9fa4d",
  measurementId: "G-HRVNR22SX9",
};

const app = initializeApp(firebaseConfig);
export default getFirestore();
