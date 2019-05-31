import firebase from 'firebase';
// change lines below with your own Firebase snippets!
var config = {
  apiKey: 'AIzaSyDjADDXIRhlKVJyLjNsY8VL-WmbzhbPFQ4',
  authDomain: 'nextbypl.firebaseapp.com',
  databaseURL: 'https://nextbypl.firebaseio.com',
  projectId: 'nextbypl',
  storageBucket: 'nextbypl.appspot.com',
  messagingSenderId: '769109645864',
  appId: '1:769109645864:web:078e498747e42f99',
};
const fire = firebase.initializeApp(config);
export default fire;
