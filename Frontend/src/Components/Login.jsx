import React from 'react'
import { useRef, useState } from 'react'
import {  useAuth, login, provider, fireAuth } from '../firebase/firebase'
import { useNavigate } from "react-router-dom"
import "./auth.css"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { LoginActionSuccess } from '../Redux/PagesRedux/action'


const Login = () => {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const currentUser=useAuth()
    const emailRef=useRef()
    const passwordRef=useRef()

    const GoogleAuth = async(e) => {
        e.preventDefault();
        try {
            await fireAuth.signInWithPopup(provider);
            await navigate("/")
        } catch (error) {
            alert(error.message)
        }
    };

    const handleLogin=async()=>{
        try {
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            alert("Login successfully")
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
        setLoading(false)
    }
    const dispatch=useDispatch()
    const handleTrue=()=>{
        dispatch(LoginActionSuccess(true))
        navigate("/")
    }

  return (
    <div className='logindiv'>
        <div className='box mt-5 container-fluid logdiv'>
            <div className="row">
                <div className="col">
                    <img src="https://www.linkpicture.com/q/Web-capture_15-6-2022_85521_modesens.com.jpeg" alt="" className='img'/>
                </div>
                <div className="col pl-5 pb-5 pt-3 create-sign">
                    <p className='lead text-text'>Log in to your account</p>
                    <p className='text-black text-text1 pb-4'>Compare across 500+ stores<br/>
                        to find the best price.</p>
                    <input className='mb-2 pl-5 pr-5 text-center border border-dark height' type="email"  ref={emailRef} placeholder='Email' />
                    <br />
                    <input className='mb-2 pl-5 pr-5 text-center border border-dark height' type="password" ref={passwordRef}placeholder='password'/>
                    <br />
                    <p className='text-black-50 pointer pb-2'><small>Forgot Password ?</small></p>
                    <button className='btn btn-primary  button' disabled={loading || currentUser !==null} onClick={handleLogin}>Log In</button>
                    <p className='text-black-50 pt-4 pb-4'>or</p>
                    <div className="container-fluid logos">
                        <div className="row">
                            <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617google.svg" alt="google" onClick={GoogleAuth} /></div>
                            <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617facebook.svg" alt="facebook" onClick={GoogleAuth}/></div>
                            <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617apple.svg" alt="apple-store" onClick={GoogleAuth}/></div>                    </div>
                    </div>
                    <p className='text-black-50 pt-3 pointer' onClick={()=>navigate("/")} ><u>Don't have an account? Please sign up.</u></p>
                </div>
                <AiOutlineClose style={{fontSize:"30px", marginTop:"15px"}} onClick={handleTrue}/>
            </div>
        </div>
    </div>

  )
}

export default Login