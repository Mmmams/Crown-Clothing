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
//for better understanding firstly write docs
  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = userRef.get();
    if(!userSnapshot.exists){
      const {displayName, email} = userAuth;
      const cratedAt = new Date();
    
      try{
        await userRef.set({
          displayName, 
          email,
          cratedAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error user creating', error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;