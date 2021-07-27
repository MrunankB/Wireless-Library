import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC6DkIp3gkDDQnWx6HYeR4uObfaSPXW_S0",
    authDomain: "wireless-lib-1ddb8.firebaseapp.com",
    projectId: "wireless-lib-1ddb8",
    storageBucket: "wireless-lib-1ddb8.appspot.com",
    messagingSenderId: "465886145982",
    appId: "1:465886145982:web:b356dc4c55902f786bddef"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();