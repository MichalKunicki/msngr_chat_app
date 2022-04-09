import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
// import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'

export default function Login() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to MSNGR</h2>
        <div className="login-button google" onClick={signInWithGoogle}>
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div className="login-button facebook" onClick={signInWithFacebook}>
          <FacebookOutlined />
          Sign in with Facebook
        </div>
      </div>
    </div>
  )
}
