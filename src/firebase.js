//make sure use /compat in firebase importing

import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyD3JjCg4aPV8PLGr5sgtCWzk8Za-saWLtg",
    authDomain: "e-clone-942ab.firebaseapp.com",
    databaseURL: "https://e-clone-942ab.firebaseapp.com",
    projectId: "e-clone-942ab",
    storageBucket: "e-clone-942ab.appspot.com",
    messagingSenderId: "309551898374",
    appId: "1:309551898374:web:87cc0c40f5913a98448887",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
