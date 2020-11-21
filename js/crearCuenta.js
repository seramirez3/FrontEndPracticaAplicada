
var firebaseConfig = {
  apiKey: "AIzaSyB950S0p1XjoIQhvawtG13TVzuBExosmgk",
  authDomain: "postair-2020-2.firebaseapp.com",
  databaseURL: "https://postair-2020-2.firebaseio.com",
  projectId: "postair-2020-2",
  storageBucket: "postair-2020-2.appspot.com",
  messagingSenderId: "992361330265",
  appId: "1:992361330265:web:031a3997270f2ede612348",
  measurementId: "G-P5CSCLRV3J"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var auth = firebase.auth();

function signUp() {
  
  var email = document.getElementById("createEmail");
  var password = document.getElementById("createPassword");

  auth.createUserWithEmailAndPassword(email.value, password.value).then(response => {

    Swal.fire({
      icon: 'success',
      title: 'Felicidades',
      text: 'Tu cuentra se ha creado correctamente'
    })
    
  }, function (error) {

    Swal.fire({
      icon: 'error',
      title: 'Validar',
      text: 'No se ha podido crear la cuenta'
    })
  }
  );

//   db.collection("users").add({
//     Name: name,
//     LasName: last,
//     Email: email,
//     Password: password
// })
// .then(function(docRef) {
//      Swal.fire({
//       icon: 'success',
//       title: 'Felicidades',
//       text: 'Tu cuentra se ha creado correctamente'
//     })
// })
// .catch(function(error) {
//   Swal.fire({
//         icon: 'error',
//         title: 'Validar',
//         text: 'No se ha podido crear la cuenta'
//       })
// });

  
}