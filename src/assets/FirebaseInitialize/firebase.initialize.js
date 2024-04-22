import { initializeApp } from "firebase/app";

//Firebase config
const firebaseConfig = {
    /*  apiKey: import.meta.env.VITE_APIKEY,
     authDomain: import.meta.env.VITE_AUTHDOMAIN,
     projectId: import.meta.env.VITE_PROJECTID,
     storageBucket: import.meta.env.VITE_STORAGEBUCKET,
     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
     appId: import.meta.env.VITE_APPID, */
    apiKey: "AIzaSyBws3rFs0j6gMLEiyPRx7dAyC9YKxnOHWY",
    authDomain: "sain-courier-service.firebaseapp.com",
    projectId: "sain-courier-service",
    storageBucket: "sain-courier-service.appspot.com",
    messagingSenderId: "729729141361",
    appId: "1:729729141361:web:5453a92166caf182b529d0"
};

// Initialize Firebase
const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication