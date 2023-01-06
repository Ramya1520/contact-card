
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTXLiu8aL376pAYZ6lfHufpTCxR7k-Pa0",
  authDomain: "contact-manager-6752d.firebaseapp.com",
  projectId: "contact-manager-6752d",
  storageBucket: "contact-manager-6752d.appspot.com",
  messagingSenderId: "1066861790116",
  appId: "1:1066861790116:web:edef90dbd896c12d3cb731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)