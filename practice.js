 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDtzq9dzR9Kt02YPD05z_jg5DasmnhoI_M",
    authDomain: "kwitter-aea7e.firebaseapp.com",
    databaseURL: "https://kwitter-aea7e-default-rtdb.firebaseio.com",
    projectId: "kwitter-aea7e",
    storageBucket: "kwitter-aea7e.appspot.com",
    messagingSenderId: "309614524005",
    appId: "1:309614524005:web:ce8e09c21f5ffc5170788c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name= document.getElementById("userName").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"Adding User"
      });
  }