import firebase from "firebase/app";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCM-GzfMY4Z8xj8lpBf12WmtRc5RIUU5UA",
    authDomain: "bonekurir-5f1f2.firebaseapp.com",
    projectId: "bonekurir-5f1f2",
    storageBucket: "bonekurir-5f1f2.appspot.com",
    messagingSenderId: "379865990799",
    appId: "1:379865990799:web:17f31f455a9bb90acc52fa",
    measurementId: "G-Z2QWLBE0T7"
};

// firebase.initializeApp(firebaseConfig);


let Firebase : any;

if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;