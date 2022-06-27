import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import Button from '../../components/button/button.jsx';
import './authentication.styles.scss';

import {
  auth,
  signInWithGooglePopup,
  createUserDocument,
  signInWithGoogleRedirect,
} from '../../utils/firebase.js';

import SignUpForm from '../../components/sign-up-form/signup.jsx';
import SignInForm from '../../components/sign-in-form/signin.jsx';

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocReference = await createUserDocument(user);
  };

  return (
    <div className='sign-in-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
