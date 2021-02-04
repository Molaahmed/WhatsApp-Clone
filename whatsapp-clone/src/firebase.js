// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVKxggZvHLfXw_OoeABzXXXA0XgT3hz9I",
  authDomain: "whats-app-clone-db65b.firebaseapp.com",
  databaseURL: "https://whats-app-clone-db65b-default-rtdb.firebaseio.com",
  projectId: "whats-app-clone-db65b",
  storageBucket: "whats-app-clone-db65b.appspot.com",
  messagingSenderId: "893200936444",
  appId: "1:893200936444:web:9c3d78c462fa60ad291679"
};
const firebaseApp =  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

//console.log(firebase.firestore.setLogLevel('debug'));
// export {auth, provider };
//export default db;

export default db;