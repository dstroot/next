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

//reference messages collection
var messagesRef = firebase.database().ref('formSubmition');

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(event) {
  event.preventDefault();

  /*

  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // save message
  saveMessage(name, email, phone, message);
}

// Funciton to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
  */

  console.log(123);
}
