import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCZXHASGJhCbSH4QCp4SXnmql0kY4Q4kt8",
    authDomain: "we16201-7f01f.firebaseapp.com",
    projectId: "we16201-7f01f",
    storageBucket: "we16201-7f01f.appspot.com",
    messagingSenderId: "124067276844",
    appId: "1:124067276844:web:9d05c4689be94cef870989",
    measurementId: "G-FEZRLBD7LG"
  };
// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
