import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBRjEMCtcWaJ6GnS-F-q-kC6uRo05jz-1g",
  authDomain: "modesens-auth.firebaseapp.com",
  projectId: "modesens-auth",
  storageBucket: "modesens-auth.appspot.com",
  messagingSenderId: "295984824196",
  appId: "1:295984824196:web:3c12eac38123ed12a867d1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signup=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

export const logOut=()=>{
    signOut(auth)
}

export const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
export const useAuth=()=>{
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const userDetails=onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
        })
        return userDetails;
    },[])
    return currentUser;
}


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const fireAuth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();