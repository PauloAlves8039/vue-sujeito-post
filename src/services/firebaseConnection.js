import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/firebase';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyBQVqq89OLrozlHz-0fIHqb0TR2UTtAIEI",
  authDomain: "sujeitopost-d64e5.firebaseapp.com",
  projectId: "sujeitopost-d64e5",
  storageBucket: "sujeitopost-d64e5.appspot.com",
  messagingSenderId: "859883856583",
  appId: "1:859883856583:web:60dd698ed54ab3628794e2",
  measurementId: "G-0KFTHSSZGC",
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;