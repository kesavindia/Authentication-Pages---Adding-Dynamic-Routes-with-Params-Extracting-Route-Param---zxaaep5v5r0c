import React from 'react';
import { useNavigate } from 'react-router';

export const Home = () =>{
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const navigate = useNavigate()
    React.useEffect(()=>{
        if(!isLoggedIn || isLoggedIn !='true'){
            //console.log(isLoggedIn)
            navigate('/signin')
        }
    },[])
    function handleLogOut(){
        localStorage.removeItem('isLoggedIn')
        navigate('/signin')
    }
    return(
        <div id="home-page">
            Home page
            <button onClick={handleLogOut} id= "logout-btn">Logout</button>
        </div>
    )
}