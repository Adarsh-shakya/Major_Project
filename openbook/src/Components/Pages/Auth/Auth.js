import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom'
import './Auth.css'
import AboutAuth from "./AboutAuth";

import { signup,login } from "../../../actions/Auth.js";


const Auth=()=>{
    const [ isSignup,setIsSignup]=useState(false)
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')


    const dispatch =useDispatch('')
    const navigate=useNavigate()

     const handleSwitch=()=>{
         setIsSignup(!isSignup)
     }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!email && !password )
        {
            alert('Enter email and password')
        }
        if(isSignup){
            if(!name)
            {
                alert("Enter a name to continue")
            }
          dispatch(signup({name,email,password}, navigate))
        }else{
           dispatch(login({email,password},navigate))
        }
        console.log(name, email,password);
    }


    return(
    <section className="auth-section">
        {
            isSignup && <AboutAuth/>
        }
   <div className="auth-container-2 logo">
    {!isSignup && <img src="https://th.bing.com/th/id/OIP.Vd4JHVC-H25ltfHhThg2BwHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7" alt="logo" />}
    <form onSubmit={handleSubmit}>
        {
            isSignup && (
                <label htmlFor="name">
                   <h4>Display Name</h4>
                  <input type="name" name='name' id='name' onChange={(e) =>{setName(e.target.value)}}/>
               </label>
            )
        }
        <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email'onChange={(e) =>{setEmail(e.target.value)}}/>
        </label>
        <label htmlFor="password">
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4>Password</h4>
               {!isSignup && <p style={{color:"#007ac6", fontSize:"13px"}}>forgot password</p>}
            </div>
            <input type="password" name='password' id='password' onChange={(e) =>{setPassword(e.target.value)}}/>
            {isSignup && <p style={{color:"#666767" ,fontSize:"13px"}}>
                Password must contain at least eight <br/>
                characters, including at least 1 letter and 1<br/>
                number. 
                </p>}
        </label>
        {
            isSignup && (
            <label htmlFor="check">
            <input  type="checkbox"  id='check'/>
            <p style={{fontSize:"13px"}}>Opt-in to receive occasion at <br/>
            product update own research invitation <br/>
            Company announcement ,and digits</p>
            </label>
            )
        }
        <button type="submit" className="auth-btn">{isSignup? 'Sign Up':'Log In'}</button>
        { isSignup &&
        <p style={{color:"#666767" ,fontSize:"13px"}}>By clicking "Sign up", you agree to our
           <span style={{color:"#007ac6"}}> term of<br/> service</span>, 
            <span style={{color:"#007ac6"}}>privacy policy</span> and 
            <span style={{color:"#007ac6"}}> Cookie policy</span>
        </p>
        }
    </form>
    <p>
        {isSignup ? 'already have an account':"Don't have an account"}
        <button type="button" className="handle-switch-btn" onClick={handleSwitch}>{isSignup? 'Lon in':'Sign up'}</button>
    </p>
   </div>
    </section>
    )
}

export default Auth;