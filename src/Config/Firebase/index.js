import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyAmGO6vfZwBT87IsKI5gXMSVVvYs-z3dkY",
  authDomain: "facebookclone-1b007.firebaseapp.com",
  projectId: "facebookclone-1b007",
  storageBucket: "facebookclone-1b007.appspot.com",
  messagingSenderId: "44256701467",
  appId: "1:44256701467:web:7415addf7eb6ddbe8c1cbe",
  measurementId: "G-QVTHQHLZV7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase
