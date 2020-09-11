import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCnGiMED3oCTr8r3J4tCtzZvRIgYS5WWus',
  authDomain: 'probando-react-native.firebaseapp.com',
  databaseURL: 'https://probando-react-native.firebaseio.com',
  projectId: 'probando-react-native',
  storageBucket: 'probando-react-native.appspot.com',
  messagingSenderId: '277925202508',
  appId: '1:277925202508:web:28c86cb944d496344202e9',
  measurementId: 'G-3WP62Z05T7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
