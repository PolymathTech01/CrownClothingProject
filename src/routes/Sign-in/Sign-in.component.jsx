// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUp from '../../components/Sign-up/Sign-up.component';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
} from '../../Utils/Firebase/Firebase.utils';

const SignIn = () => {
  //   useEffect(() => {
  //     (async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     })();
  //   }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    return userDocRef;
  };
  //   const logGoogleRedirectUser = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log({ user });
  //   };

  return (
    <div>
      <h1>Sign page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignUp />
    </div>
  );
};

export default SignIn;
