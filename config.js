import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAEp9kXmE9QqgdJ9d0iajwRsmwyqgick98",
  authDomain: "barter-284ba.firebaseapp.com",
  databaseURL: "https://barter-284ba-default-rtdb.firebaseio.com",
  projectId: "barter-284ba",
  storageBucket: "barter-284ba.appspot.com",
  messagingSenderId: "578840382145",
  appId: "1:578840382145:web:16ffbb6a2e3073a3cc2240"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();