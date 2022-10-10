// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithRedirect,
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
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
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
initializeApp(firebaseConfig);
// const analytics = getAnalytics(FirebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const firestore = getFirestore();
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);
  objectsToAdd.forEach((object) => {
    const documentReference = doc(collectionRef, object.title.toLowerCase()); // the key is the title
    batch.set(documentReference, object); // the value is the object itself
  });

  await batch.commit(); //it will begin the process
  // console.log('done'); // this will print out when its done
};
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(firestore, 'categories');
  const queryMethod = query(collectionRef);
  const querySnapshot = await getDocs(queryMethod);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(firestore, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
