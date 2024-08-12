// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfbnrCCpStGJ8nX6TRu92s0-y_UXiF55A",
  authDomain: "netflix-gpt-94e9f.firebaseapp.com",
  projectId: "netflix-gpt-94e9f",
  storageBucket: "netflix-gpt-94e9f.appspot.com",
  messagingSenderId: "631728443878",
  appId: "1:631728443878:web:28541e588a6978681b4627",
  measurementId: "G-9PYFSTKG8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();