import { Button } from '@mui/material'
import React from 'react'
import './login.css'
import {auth, provider} from './Firebase'
import {  signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
function Login() {
    const dispatch = useDispatch();
    function signIn(){
        signInWithPopup(auth,provider).then(({user})=>{
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))

        }).catch((error)=>{console.error(error)})
    }
    return (
        <div className="login">
            <div className="login_container">
                <img alt='gmail' src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png"></img>
                <h2>Gmail clone</h2>
                <Button variant='contained' color='primary' onClick={signIn} >Login</Button>
            </div>
        </div>
    )
}

export default Login
