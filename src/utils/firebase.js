import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
//firebase connection strings
const firebaseConfig = {
  apiKey: 'AIzaSyC_kAAHAMwCawfrm2UM0mfPXOsu8jIwo3U',
  authDomain: 'crown-clothing-db-3123e.firebaseapp.com',
  projectId: 'crown-clothing-db-3123e',
  storageBucket: 'crown-clothing-db-3123e.appspot.com',
  messagingSenderId: '205475893200',
  appId: '1:205475893200:web:85bdb6981ad211d50773d5',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//initialize authentication provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const db = getFirestore();

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createUserDocument = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signUserOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
