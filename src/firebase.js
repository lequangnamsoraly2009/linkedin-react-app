import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAv2hyg1uOz45KkoEEyiqQeAsDEmk6Xobg",
    authDomain: "linkedin-clone-soraly.firebaseapp.com",
    projectId: "linkedin-clone-soraly",
    storageBucket: "linkedin-clone-soraly.appspot.com",
    messagingSenderId: "146634758683",
    appId: "1:146634758683:web:54a5e182e6e971aba9f6be"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;