import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtqX2HiaC5qWxt2Ghs1t-8pG-r3Ggu9ko',
  authDomain: 'msngr-chat.firebaseapp.com',
  projectId: 'msngr-chat',
  storageBucket: 'msngr-chat.appspot.com',
  messagingSenderId: '820547857353',
  appId: '1:820547857353:web:520c555218cdbc72739618',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
