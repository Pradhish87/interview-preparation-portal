import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyAQ6L_h7BKZ_rpbD35CBAs8sJrnDuBOs_M",
  authDomain: "interview-preparation-po-d4221.firebaseapp.com",
  projectId: "interview-preparation-po-d4221",
  storageBucket: "interview-preparation-po-d4221.firebasestorage.app",
  messagingSenderId: "121344062050",
  appId: "1:121344062050:web:1853540caff074380e573b",
  measurementId: "G-W9V9SW304Y"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);