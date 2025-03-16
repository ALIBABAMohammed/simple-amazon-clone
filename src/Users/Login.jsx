import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';  
import { createUserWithEmailAndPassword } from 'firebase/auth';  


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {  
        e.preventDefault();  
        try {  
          await signInWithEmailAndPassword(auth, email, password);  
          window.location.href = '/';
          alert('Logged in successfully!');  
        } catch (error) {  
          const errorCode = error.code;  
    const errorMessage = error.message;  

    switch (errorCode) {  
      case 'auth/wrong-password':
      alert('Invalid Credetial. Please try again.');  
        console.error('Wrong password. Please try again.');  
        break;  
      case 'auth/user-not-found': 
      alert('No user found with this email.'); 
        console.error('No user found with this email.');  
        break;  
      case 'auth/invalid-email':  
      alert('Invalid email format.');
        console.error('Invalid email format.');  
        break;  
      default:
      alert(errorMessage);  
        console.error('Login error:', errorMessage);  
    }
          console.error("Error logging in:", error); 
          alert(error.message);
        }  
      };  
    // const signIn = e => {
    //     e.preventDefault();

    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             window.location('/');
    //         })
    //         .catch(error => alert(error.message))

    // }

    const register = async (e) => {  
        e.preventDefault();  
        try {  
          await createUserWithEmailAndPassword(auth, email, password); 
          window.location.href = '/'; 
          alert('User created successfully!');  
        } catch (error) { 
          const errorCode = error.code;  
    const errorMessage = error.message;  

    switch (errorCode) {  
      case 'auth/email-already-in-use':
      alert('Email already Exist. Please try again.');  
        console.error('Wrong password. Please try again.');  
        break;  
      case 'auth/weak-password': 
      alert('Password should be at least 6 characters'); 
        break;  
      case 'auth/invalid-email':  
      alert('Invalid email format.');
        console.error('Invalid email format.');  
        break;  
      default:
      alert(errorMessage);  
        console.error('Login error:', errorMessage);  
    }
        }  
      };  

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             if (auth) {
    //                 window.location('/');
    //             }
    //         })
    //         .catch(error => alert(error.message))

    // }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                  <StorefrontIcon className="login__logoImage" fontSize="large" />
                {/* <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /> */}
                <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <Link to="/">
                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                    </Link>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to='/register' style={{ textDecoration: "none" }}>
                <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;