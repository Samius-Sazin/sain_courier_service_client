import { initializeApp } from "firebase/app";

//Firebase config
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_REACT_API_KEY,
    authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_ID,
};

// Initialize Firebase
const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication