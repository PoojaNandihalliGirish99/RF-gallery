  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBYzTB8RqlPwloHUkuozyZ5vDzLHMhkOfY",
    authDomain: "rf-gallery.firebaseapp.com",
    projectId: "rf-gallery",
    storageBucket: "rf-gallery.appspot.com",
    messagingSenderId: "288703060460",
    appId: "1:288703060460:web:4ba064a1f44a86418808c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projStorage = firebase.storage();
  const projFirestore = firebase.firestore();

  export {projStorage, projFirestore};