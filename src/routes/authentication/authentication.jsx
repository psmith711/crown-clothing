import './authentication.styles.scss';
import SignUpForm from '../../components/sign-up-form/signup.jsx';
import SignInForm from '../../components/sign-in-form/signin.jsx';

const Authentication = () => {
  return (
    <div className='sign-in-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
