import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA6Kxed97nGSvras9_PLRbeUzzBW9jmGwU",
  authDomain: "botao-zuadento.firebaseapp.com",
  databaseURL: "https://botao-zuadento-default-rtdb.firebaseio.com",
  projectId: "botao-zuadento",
  storageBucket: "botao-zuadento.appspot.com",
  messagingSenderId: "204633949307",
  appId: "1:204633949307:web:49d0fb023d76bed920cede"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();