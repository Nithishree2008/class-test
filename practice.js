
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAUF667J41NbK_dGOXPvfmYIf8jRj_wJUQ",
    authDomain: "class-test-845c0.firebaseapp.com",
    databaseURL: "https://class-test-845c0-default-rtdb.firebaseio.com",
    projectId: "class-test-845c0",
    storageBucket: "class-test-845c0.appspot.com",
    messagingSenderId: "223150260358",
    appId: "1:223150260358:web:9092622eef6f1024451107"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {

    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    
  }