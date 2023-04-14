import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCyTmogu2R_Tc0FMaWjPAg2NVBtILTTiR0",
    authDomain: "disney-clone-a8cbd.firebaseapp.com",
    projectId: "disney-clone-a8cbd",
    storageBucket: "disney-clone-a8cbd.appspot.com",
    messagingSenderId: "193074768184",
    appId: "1:193074768184:web:b69588a966db5a05c839cd",
    measurementId: "G-PD21B1D4XK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;