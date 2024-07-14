
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyAdlCie4nHeopNQtleLKD9JQ8Gf_4DsFuA",
  authDomain: "airbnbclon-f8a2b.firebaseapp.com",
  projectId: "airbnbclon-f8a2b",
  storageBucket: "airbnbclon-f8a2b.appspot.com",
  messagingSenderId: "121135529356",
  appId: "1:121135529356:web:b1bff4db55183f3b55eaa9"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth (); 