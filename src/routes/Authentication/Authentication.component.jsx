import SignUp from '../../components/Sign-up/Sign-up.component';
import SignIn from '../../components/Sign-in-Form/Sign-in.component';
import './Authentication.styles.scss';
const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;

// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// import {
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
//   // signInWithGoogleRedirect,
// } from '../../Utils/Firebase/Firebase.utils';

//   useEffect(() => {
//     (async () => {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     })();
//   }, []);
// const logGoogleUser = async () => {
//   const { user } = await signInWithGooglePopup();
//   const userDocRef = await createUserDocumentFromAuth(user);
//   return userDocRef;
// };
//   const logGoogleRedirectUser = async () => {
//     const { user } = await signInWithGoogleRedirect();
//     console.log({ user });
//   };
/* <button onClick={logGoogleUser}>Sign In with Google Popup</button> 
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */
