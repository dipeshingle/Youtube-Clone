import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwEzD7Broawu_oEnpdJuxvbcD9x0-iQI8",
  authDomain: "not-fe0a9.firebaseapp.com",
  projectId: "not-fe0a9",
  storageBucket: "not-fe0a9.appspot.com",
  messagingSenderId: "204753310316",
  appId: "1:204753310316:web:89b63a0dda721a08ac3e49",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
