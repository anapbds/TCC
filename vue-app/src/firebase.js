import { firebase } from '@firebase/app'
import "firebase/database";
import "firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyBCQ-xusg0Wl49wIbw6L1BQN-2RQBxUuHQ",
    authDomain: "gestao-tarefas-fd276.firebaseapp.com",
    databaseURL: "https://gestao-tarefas-fd276-default-rtdb.firebaseio.com",
    projectId: "gestao-tarefas-fd276",
    storageBucket: "gestao-tarefas-fd276.appspot.com",
    messagingSenderId: "560218250951",
    appId: "1:560218250951:web:2356dfeb93aa54613268e2"
  };
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database().ref("/tarefas");


  export default database;

