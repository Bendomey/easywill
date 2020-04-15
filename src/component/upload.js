import firebase from "firebase";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDykB0Np1x8X_63bTiyuxWPshDdVWNS6Ac",
    authDomain: "samansiwill.firebaseapp.com",
    databaseURL: "https://samansiwill.firebaseio.com",
    projectId: "samansiwill",
    storageBucket: "samansiwill.appspot.com",
    messagingSenderId: "162899479930",
    appId: "1:162899479930:web:f6b5d2e3898fa2c54b9ac3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();

export {
    storage, firebase as default
}
