import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAz0PJtOMcVgTWWT9oDTy6S__UrBRmm_7U",
    authDomain: "contact-form-631e3.firebaseapp.com",
    databaseURL: "https://contact-form-631e3-default-rtdb.firebaseio.com",
    projectId: "contact-form-631e3",
    storageBucket: "contact-form-631e3.appspot.com",
    messagingSenderId: "143481189316",
    appId: "1:143481189316:web:2262b6cc65748426c4aa91"
});

var db = firebaseApp.firestore();

export { db };
