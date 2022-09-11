import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  // createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../Utils/Firebase/Firebase.utils';
import FormInput from '../Form-input/Form-input.component';
import Button, { BUTTON_TYPES_CLASSES } from '../Buttons/Button.component';
import {
  SignUpContainer,
  Heading,
  ButtonsContainer,
} from './Sign-in.styles.jsx';
// import { UserContext } from '../../contexts/user.context';s
const defaultFromFields = {
  email: '',
  password: '',
};
const SignIn = () => {
  const [formFields, setFromFields] = useState(defaultFromFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);

  const resestFromFields = () => {
    setFromFields(defaultFromFields);
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      resestFromFields();
    } catch (error) {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        alert('Invalid Email or Password');
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
      <Heading>Already have an account?</Heading>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type='submit' onClick={handleSubmit}>
            Sign In
          </Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignIn;
