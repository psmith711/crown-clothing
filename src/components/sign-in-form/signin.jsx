import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocument,
} from '../../utils/firebase';
import FormInput from '../form-input/forminput';
import Button from '../button/button';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      createUserDocument(user);
    } catch (e) {
      alert(e);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with Email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          label='Email'
          type='email'
          onChange={handleChange}
          value={email}
          name='email'
        />

        <FormInput
          required
          label='Password'
          type='password'
          onChange={handleChange}
          value={password}
          name='password'
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType='google'
            onClick={signInWithGoogle}>
            Google Signin
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
