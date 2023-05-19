import React from 'react';
import { Link } from 'react-router-dom';
import { SignupCard, SignupPageStyles } from './signup.styled';

const Signup = () => {
  return (
    <SignupPageStyles>
      <SignupCard>
       <div className='Leftsection'>
        <div><h1>Sinup Form</h1></div>
        <form>
         <div className='Formgroups'>
          <span>UserID</span>
          <input type='email' placeholder='Ex:-gtech21@gmail.com' />
         </div>
         <div className='Formgroups'>
          <span>Password</span>
          <input type='password' placeholder='Must be atlist 8-characters long' />
         </div>
         <div className='Formgroups'>
          <input type='submit' value="Sign Up"/>
         </div>
         <div className='Formgroups'>
          <p><b>NOTE:</b> Only for users who dont have active account, if already have an account you can click next to Login</p>
         </div>
         <div className='Formgroups'>
          <Link to='/signin' className="Button">Next</Link>
         </div>
        </form>
       </div>

       <div className='Rightsection'>
        <div className='Title'><h1>Alternative ways to singin</h1></div>
        <div className='Alternatives'><p>SignIn with Google</p></div>
        <div className='Alternatives'><p>SignIn with TWitter</p></div>
        <div className='Alternatives'><p>SignIn with Facebook</p></div>
        <div className='Copyright'>
         <p>Copyright&copy;2023Gtechonoligies.com</p>
        </div>
       </div>
      </SignupCard>
    </SignupPageStyles>
  );
}

export default Signup;
