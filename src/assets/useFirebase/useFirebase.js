/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../FirebaseInitialize/firebase.initialize";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    
    firebaseAuthentication();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    return {
        signInUsingGoogle,
        logOut,
        user,
        setUser,
        error,
        setError,
    }
}

export default useFirebase;