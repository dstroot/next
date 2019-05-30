import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDjADDXIRhlKVJyLjNsY8VL-WmbzhbPFQ4',
  authDomain: 'nextbypl.firebaseapp.com',
  databaseURL: 'https://nextbypl.firebaseio.com',
  projectId: 'nextbypl',
  storageBucket: 'nextbypl.appspot.com',
  messagingSenderId: '769109645864',
  appId: '1:769109645864:web:078e498747e42f99',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
