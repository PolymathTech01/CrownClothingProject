import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../Utils/Firebase/Firebase.utils';
import FormInput from '../form-input/Form-input.component';
import Button from '../Buttons/Button.component';
import './Sign-in.styles.scss';
const defaultFromFields = {
  email: '',
  password: '',
};
const SignIn = () => {
  const [formFields, setFromFields] = useState(defaultFromFields);
  const { email, password } = formFields;

  console.log('form fields', formFields);
  const resestFromFields = () => {
    setFromFields(defaultFromFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log('response from sign in', response);
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
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
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
        <div className='buttons-container'>
          <Button type='submit' onClick={handleSubmit}>
            Sign In
          </Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
