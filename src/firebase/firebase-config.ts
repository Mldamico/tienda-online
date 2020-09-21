import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD0Omz9o0EvRwY2JcB5pNPJVoyZwhPy9M8',
  authDomain: 'tienda-online-6716c.firebaseapp.com',
  databaseURL: 'https://tienda-online-6716c.firebaseio.com',
  projectId: 'tienda-online-6716c',
  storageBucket: 'tienda-online-6716c.appspot.com',
  messagingSenderId: '89166692068',
  appId: '1:89166692068:web:9b10eb2ea0369deed336f1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
