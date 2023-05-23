import React from 'react';
import { SignupCard, SignupPageStyles } from './signup.styled';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SignupInContext } from '../../context/firebaseauth';

const Signup = () => {
  const[signinsection, setSigninSection] = useState(false);
  const{ googleAuthentication } = useContext(SignupInContext);

  const schema = yup.object().shape({
    username: yup.string().required("Username/Email is required"),
    password: yup.string().min(8).max(16).required("Password is required"),
  });

  // connect form with resolver
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  // handle form data function
  // Signup method
  const onCreateUser = (data) => {
    console.log(data)
  };
  // Signin user
  const onSignInUser = (data) => {
    console.log(data)
  };


  return (
    <SignupPageStyles>
      <SignupCard>
        {/* Signup template */}
       {!signinsection ? <div className='Leftsection'>
        <div><h1>Signup</h1></div>
        <form onSubmit={handleSubmit(onCreateUser)}>
         <div className='Formgroups'>
          <span>UserID</span>
          <input type='email' placeholder='Ex:-gtech21@gmail.com' {...register("username")}/>
          <p className='Error'>{errors.username?.message}</p>
         </div>
         <div className='Formgroups'>
          <span>Password</span>
          <input type='password' placeholder='Must be atlist 8-characters long' {...register("password")}/>
          <p className='Error'>{errors.password?.message}</p>
         </div>
         <div className='Formgroups'>
          <input type='submit' value="SignUp"/>
         </div>
         <div className='Formgroups'>
          <p><b>NOTE:</b> Only for users who dont have an active account, if already have an account you can click below</p>
         </div>
         <div className='Formgroups'>
          <Link className="Button" onClick={(e) => 
            {
              e.preventDefault();
              setSigninSection(true);
            }}>Signin</Link>
         </div>
        </form>
       </div>


      : 

      // Signin template
       <div className='Leftsection'>
        <div><h1>Signin</h1></div>
        <form onSubmit={handleSubmit(onSignInUser)}>
         <div className='Formgroups'>
          <span>UserID</span>
          <input type='email' placeholder='Ex:-gtech21@gmail.com' {...register("username")}/>
          <p className='Error'>{errors.username?.message}</p>
         </div>
         <div className='Formgroups'>
          <span>Password</span>
          <input type='password' placeholder='Must be atlist 8-characters long' {...register("password")}/>
          <p className='Error'>{errors.password?.message}</p>
         </div>
         <div className='Formgroups'>
          <input type='submit' value="SignIn"/>
         </div>
         <div className='Formgroups'>
          <p><b>NOTE:</b> Only for users who have active account, if you dont have an existing account, Click below.</p>
         </div>
         <div className='Formgroups'>
          <Link className="Button" onClick={(e) => 
          {
            e.preventDefault();
            setSigninSection(false);
            }}>Signup</Link>
         </div>
        </form>
       </div>
      }
       <div className='Rightsection'>
        <div className='Title'><h1>Alternative ways to singin</h1></div>
        <div className='Alternatives' onClick={googleAuthentication}><p>SignIn with Google</p></div>
        <div className='Alternatives'><p>SignIn with Twitter</p></div>
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
