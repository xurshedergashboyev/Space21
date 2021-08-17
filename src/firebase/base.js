import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

export const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDBA6cNRrC1hkZp-JQFVMJnsvp2utGZBZ4",
    authDomain: "space-21-72f2b.firebaseapp.com",
    projectId: "space-21-72f2b",
    storageBucket: "space-21-72f2b.appspot.com",
    messagingSenderId: "756664504471",
    appId: "1:756664504471:web:792ddce25c8c3b13a399d2",
    measurementId: "G-3ZY1BVMCZN"
});

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();


export default firebase;