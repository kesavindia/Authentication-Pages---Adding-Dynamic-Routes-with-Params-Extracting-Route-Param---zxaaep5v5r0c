import React, {useRef} from 'react';
import { useNavigate } from 'react-router';
import { signin } from '../api/auth';

export const Signin = ()=>{
    const [err, setErr] = React.useState('')
    const navigate = useNavigate()
    const emailref = useRef()
    const passref = useRef()
    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = emailref.current.value
        const password = passref.current.value
        signin({email,password}).then(()=>{localStorage.setItem('isLoggedIn', true)
        navigate('/home')
    }).catch(()=>setErr("wrong email or password"))
    }
    return(
        <div id="signin-page">
            <h1>Sign in page</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' ref={emailref} placeholder='email' required/><br/>
                <input type= 'password' ref={passref} placeholder='password' required/><br/>
                <button type='submit'>Signin</button>
            </form>
            <div className="error-txt">{err}</div>
        </div>
    )
}