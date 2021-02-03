// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAUNzjRdvYKX2vCud4edWe4BPd2p1Mor18",
    authDomain: "whats-app-clone-54a5c.firebaseapp.com",
    projectId: "whats-app-clone-54a5c",
    storageBucket: "whats-app-clone-54a5c.appspot.com",
    messagingSenderId: "807298460574",
    appId: "1:807298460574:web:11f9ab249ebb999f8c448f",
    measurementId: "G-N3TD1GCVDV"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;