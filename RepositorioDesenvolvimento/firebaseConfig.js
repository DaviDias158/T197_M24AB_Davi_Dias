import firebase from 'firebase';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHwPBy0M9pE8IHXjCGaT_5F31L8B9M0fk",
  authDomain: "appadvogaciaver2.firebaseapp.com",
  projectId: "appadvogaciaver2",
  storageBucket: "appadvogaciaver2.firebasestorage.app",
  messagingSenderId: "308547425738",
  appId: "1:308547425738:web:c675a1a6577ed83a286b33",
  measurementId: "G-T8W7VDNQ16"
};

if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export { db };
