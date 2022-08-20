// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlik01VizJCOsDgn5-GfJy8j6bto_6k7U',
  authDomain: 'crown-clothing-db-411f1.firebaseapp.com',
  projectId: 'crown-clothing-db-411f1',
  storageBucket: 'crown-clothing-db-411f1.appspot.com',
  messagingSenderId: '872958688130',
  appId: '1:872958688130:web:4b103f79f3015d2e862d9b',
  measurementId: 'G-VJMF17MRJ3',
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const firestore = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(firestore, 'users', userAuth.uid);
  //   console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  //   console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
};
