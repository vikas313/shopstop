import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA-UzRS_C69dwRbhSmhP7oAtIHrBUv0Vuk",
  authDomain: "vikas-c5454.firebaseapp.com",
  databaseURL: "https://vikas-c5454-default-rtdb.firebaseio.com",
  projectId: "vikas-c5454",
  storageBucket: "vikas-c5454.appspot.com",
  messagingSenderId: "545808401450",
  appId: "1:545808401450:web:59ec8ee14bd5740606ef53",
  measurementId: "G-KM6VGGW74Q"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)