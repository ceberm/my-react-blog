import firebase from 'firebase/app'
import 'firebase/storage';

// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyA0Gc3MV85WuVe7BNTa0oavjlD-tyVQCkM",
   authDomain: "react-native-project-bdcf8.firebaseapp.com",
   databaseURL: "https://react-native-project-bdcf8.firebaseio.com",
   projectId: "react-native-project-bdcf8",
   storageBucket: "react-native-project-bdcf8.appspot.com",
   messagingSenderId: "1068611748709",
   appId: "1:1068611748709:web:4b2340b6283f55b5f0578c",
   measurementId: "G-RGJVZHV1N5"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const storage = firebase.storage();

 export{
   storage, firebase as default
 }
