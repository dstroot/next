import firebase from 'firebase/app';
// TODO why does the test fail here? It needed to import firestore to store in the database
import 'firebase/firestore';
// change lines below with your own Firebase snippets!
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const FirebaseConfig = firebase.initializeApp(config);
export default FirebaseConfig;
