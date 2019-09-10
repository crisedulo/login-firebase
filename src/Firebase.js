import firebase from "firebase"
const config = {
    apiKey: "AIzaSyAKAbBmugKY1ZQl7cNuYbTzGbolHuaiJBI",
    authDomain: "login-firebase-6f8aa.firebaseapp.com",
    databaseURL: "https://login-firebase-6f8aa.firebaseio.com",
    projectId: "login-firebase-6f8aa",
    storageBucket: "",
    messagingSenderId: "396218971176",
    appId: "1:396218971176:web:e1d017eaa12b7f65cb711d"
  };
  const fire = firebase.initializeApp(config)
  export default fire 