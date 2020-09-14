import React, {useState, useRef} from 'react'
import Parut from '../../img/prticon.png'
import {Link} from 'react-router-dom'
import auth from '../protectedRoute/auth'

const Login = (props) => {
    return (
        <div className='con-flex '>
            <div className="arow">
                <div className="col text-light col-al">
                    <h1>Parut Play</h1>
                    <p>Make and organize playlist on your spotify account.</p>
                    {/* <a href="https://accounts.spotify.com/authorize?client_id=bea853eeaba941aba1a886538c9008a6&response_type=code&redirect_uri=%0Ahttps%3A%2F%2Fparut.netlify.com"> */}
                    {/* &scope=user-read-private%20user-read-email&state=34fFs29kd09" */}
                        <button className='shadow-none btn btn-outline-light rounded-0'
                            onClick={() =>{
                                auth.login(() => {
                                    props.history.push('/myhome')
                                })
                            }}
                        >Sign up with Spotify</button>
                    {/* </a> */}
                </div>
                <div className="col col-img">
                    <img className='img-center' src={Parut} alt='Brienz'/>
                </div>
            </div>
            
        </div>
    )
}

export default Login