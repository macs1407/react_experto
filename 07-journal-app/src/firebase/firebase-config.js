import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAssq--7tUvqMvbA8yZHzKDpouXYzUvtM4",
    authDomain: "react-app-curso-c435c.firebaseapp.com",
    databaseURL: "https://react-app-curso-c435c.firebaseio.com",
    projectId: "react-app-curso-c435c",
    storageBucket: "react-app-curso-c435c.appspot.com",
    messagingSenderId: "1052855451350",
    appId: "1:1052855451350:web:344ea099b6021d8b909377"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}