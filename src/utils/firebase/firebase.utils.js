import {initializeApp} from "firebase/app"
import {getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, getDoc,setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBgWdTENuqdwDKMVweucR4wbaT8-AYVpLA",
    authDomain: "mark-clothing-db.firebaseapp.com",
    projectId: "mark-clothing-db",
    storageBucket: "mark-clothing-db.appspot.com",
    messagingSenderId: "496108346835",
    appId: "1:496108346835:web:7ef2e549dd0ce5cb30a326"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = ()=> signInWithPopup(auth ,googleProvider);
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation)=> {
  if(!userAuth) return;
const userDocRef = doc(db,"users",userAuth.uid)

const userSnapshot = await getDoc(userDocRef);

if(!userSnapshot.exists()) {
  const {displayName, email} = userAuth;
  const createdAt = new Date();

try {
  await setDoc(userDocRef, {
    displayName, email, createdAt,...additionalInformation
    });
  } catch(error) {
console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password)=> {  
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth ,email, password);
};