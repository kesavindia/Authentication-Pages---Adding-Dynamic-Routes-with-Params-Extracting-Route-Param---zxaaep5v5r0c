import React, {useRef} from 'react';
import {signup} from   '../api/auth';
import { useNavigate } from 'react-router';

export const Signup = () =>{
    const navigate = useNavigate()
    const emailref = useRef()
    const passref =  useRef()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = emailref.current.value;
        const password = passref.current.value;
        signup({email,password}).then(()=>navigate('/signin'))
    }
    return(
        <div id="signin-page">
            <h1>Sign Up page</h1>
            <form onSubmit={handleSubmit}>
                <input type ="email" ref={emailref} placeholder='email' required/>
                <br/>
                <input type ="password" ref={passref} placeholder='password' required/>
                <br/>
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}