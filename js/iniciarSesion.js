
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

var auth = firebase.auth();
var db = firebase.firestore();

function signIn() {

  var email = document.getElementById("emailfirebase");
  var password = document.getElementById("passwordfirebase");

  auth.signInWithEmailAndPassword(email.value, password.value).then(function (response) {
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
      text: 'Nos da un gusto tenerte en posrtAir'
    })

  }, function (error) {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Aun no ha creado una cuenta de correo, por favor comuniquese con el administrador'
    })

  });

  // var result = db.collection("users").where("Email", "==", email).get().then(function (querySnapshot) {
  //   querySnapshot.forEach(function (doc) {
  //     var info = doc.data();
  //     if (email == info["Email"] && password == info["Password"]) {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Bienvenido',
  //         text: 'Nos da un gusto tenerte en posrtAir'
  //       })
  //     }
  //   });
  // })
}
