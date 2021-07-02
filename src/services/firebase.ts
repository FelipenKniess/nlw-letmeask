import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database'

// var firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATA_BASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID

//   };
var firebaseConfig = {
  apiKey: "AIzaSyAcMQScmuUn8TVddebVgR8ZAKuRhg3RPJI",
  authDomain: "letmeask-7345b.firebaseapp.com",
  databaseURL: "https://letmeask-7345b-default-rtdb.firebaseio.com",
  projectId: "letmeask-7345b",
  storageBucket: "letmeask-7345b.appspot.com",
  messagingSenderId: "310660224008",
  appId: "1:310660224008:web:9e2c764ef020954eb8edbd"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase }