import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAlc1ffp9YQcoTx8n0y6L23Y5EK6b1Zl_E",
  authDomain: "crwn-clothing-ab60b.firebaseapp.com",
  projectId: "crwn-clothing-ab60b",
  storageBucket: "crwn-clothing-ab60b.appspot.com",
  messagingSenderId: "39735950804",
  appId: "1:39735950804:web:be190b1354e305c7fbea41",
  measurementId: "G-1B01PBG33Y",
};
//for better understanding firstly write docs
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error user creating", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objToAdd) => {
  // функция для автоматического внесения информации о товарах в firebase(используется один раз, так как нам не надо добовлять ееё при кажом рендере)
  console.log(objToAdd);
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objToAdd.forEach((elem) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, elem);
  });

  return await batch.commit(); // return promise, when  .commit will succeeds it is return a null value
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
