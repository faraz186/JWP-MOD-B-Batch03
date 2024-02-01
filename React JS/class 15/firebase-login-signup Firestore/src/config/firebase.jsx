import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUG_F83Y7Tcq-qZu11JJXASyHO_lmOX1k",
  authDomain: "webapp-41621.firebaseapp.com",
  projectId: "webapp-41621",
  storageBucket: "webapp-41621.appspot.com",
  messagingSenderId: "234676886926",
  appId: "1:234676886926:web:0c17f12f7f663dd3ed18df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {auth,db}