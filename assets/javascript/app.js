// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var firebaseConfig = {
    apiKey: "AIzaSyDZPRYZ_BjlxUkumZCJ1PKfQup-hVpde0w",
    authDomain: "project-1-1920f.firebaseapp.com",
    databaseURL: "https://project-1-1920f.firebaseio.com",
    projectId: "project-1-1920f",
    storageBucket: "project-1-1920f.appspot.com",
    messagingSenderId: "602046626251",
    appId: "1:602046626251:web:181c48435faca396"
  };
  
  
  // Assign the reference to the database to a variable named 'database'
  // var database = ...
  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database();