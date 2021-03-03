import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAlc1ffp9YQcoTx8n0y6L23Y5EK6b1Zl_E",
    authDomain: "crwn-clothing-ab60b.firebaseapp.com",
    projectId: "crwn-clothing-ab60b",
    storageBucket: "crwn-clothing-ab60b.appspot.com",
    messagingSenderId: "39735950804",
    appId: "1:39735950804:web:be190b1354e305c7fbea41",
    measurementId: "G-1B01PBG33Y"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestire = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;