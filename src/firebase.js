
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPjGK35d_8TkAPGzIm9iTCL0mDcDQtKsM",
  authDomain: "curd-operation-dd35f.firebaseapp.com",
  projectId: "curd-operation-dd35f",
  storageBucket: "curd-operation-dd35f.appspot.com",
  messagingSenderId: "1087944742984",
  appId: "1:1087944742984:web:2f27ef466835d938b8a07d",
  measurementId: "G-Y82KE2EV0P"
};

const app = initializeApp(firebaseConfig);
// export const db=getFirestore(app)
export const db =getFirestore(app)