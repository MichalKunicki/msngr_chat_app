import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyBtqX2HiaC5qWxt2Ghs1t-8pG-r3Ggu9ko',
    authDomain: 'msngr-chat.firebaseapp.com',
    projectId: 'msngr-chat',
    storageBucket: 'msngr-chat.appspot.com',
    messagingSenderId: '820547857353',
    appId: '1:820547857353:web:520c555218cdbc72739618',
  })
  .auth()
