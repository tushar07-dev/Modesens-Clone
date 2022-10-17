import React from 'react'
import { useRef, useState } from 'react'
import { signup, useAuth, provider, fireAuth } from '../firebase/firebase'
import { useNavigate } from "react-router-dom"
import "./auth.css"
import { useDispatch } from 'react-redux'
import { LoginActionSuccess } from '../Redux/PagesRedux/action'
import { AiOutlineClose } from 'react-icons/ai'


const Signup = () => {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const currentUser=useAuth()
    const emailRef=useRef()
    const passwordRef=useRef()


    const GoogleAuth = async(e) => {
        e.preventDefault();
        try {
            await fireAuth.signInWithPopup(provider);
            alert("Login successfully")
            await navigate("/")
        } catch (error) {
            alert(error.message)
        }
        
    };


    const handleSignin=async()=>{
        try {
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            alert("Signin Successful")
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
        <div className='box mt-5   container-fluid logdiv'>
            <div className="row">
                <div className="col">
                    <img src="https://www.linkpicture.com/q/Web-capture_15-6-2022_85521_modesens.com.jpeg" alt="" className='img'/>
                </div>
                <div className="col  pl-5 pb-5 pt-3 create-sign">
                    <p className=' lead text-text'>Create an account</p>
                    <p className='text-text1 pb-4'>Compare across 500+ stores<br/>
                    to find the best price.</p>
                    <input className='mb-2   text-center border height border-dark' type="text" ref={emailRef} placeholder='Email' />
                    <br />
                    <input className='mb-2 pl-5 pr-5 text-center border height border-dark' type="password" ref={passwordRef}placeholder='password'/>
                    <br />
                    <div className="form-group form-check ">
                        <input type="checkbox" className="form-check-input pointer" id="exampleCheck1"/>
                        <label className="form-check-label " htmlFor="exampleCheck1"><small>Subscribe to personalized sale offer & updates </small></label>
                    </div>
                    <p></p>
                    <button className='btn btn-primary pl-5 pr-5 button' disabled={loading || currentUser !== null} onClick={handleSignin}>Sign Up</button>
                    <p className='text-black-50 pt-4 pb-2'>or</p>
                    <div className="container-fluid logos pb-2">
                        <div className="row">
                            <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617google.svg" alt="google" onClick={GoogleAuth} /></div>
                            <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617facebook.svg" alt="facebook" onClick={GoogleAuth} /></div>
                            <div className="col pointer"><img src="https://cdn.modesens.com/static/img/login-icon/20210617apple.svg" alt="apple-store" onClick={GoogleAuth}/></div>
                            
                        </div>
                    </div>
                    <p className='text-black-50 pb-5 pointer' onClick={()=>navigate("/login")} ><u>Already have an account? Please sign in.</u></p>
                    <p className='text-black-50'>By creating an account, I agree to<br/> the  
                    <u className='pointer'>Terms Of Use</u> and the <u className='pointer'>Privacy Policy</u></p>
                </div>
                <AiOutlineClose style={{fontSize:"30px", marginTop:"15px"}} onClick={handleTrue}/>
            </div>
                
        </div> 
    </div>
  )
}
export default Signup