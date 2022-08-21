import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../Utils/Firebase/Firebase.utils';
import FormInput from '../form-input/Form-input.component';
import Button from '../Buttons/Button.component';
import './Sign-up.styles.scss';
const defaultFromFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUp = () => {
  const [formFields, setFromFields] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log('form fields', formFields);
  const resestFromFields = () => {
    setFromFields(defaultFromFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName }); // if displayName isnt in the user object it will be added
      resestFromFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }
      console.error('error creating user', error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...formFields, [name]: value });
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <FormInput
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
