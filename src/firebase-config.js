// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getAuth}from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB_rM-bgfhCohr3LE-7s0dWqHHbNn-Twcw',
  authDomain: 'project-db-4634b.firebaseapp.com',
  projectId: 'project-db-4634b',
  storageBucket: 'project-db-4634b.appspot.com',
  messagingSenderId: '269797756734',
  appId: '1:269797756734:web:5b4ad399ba6744203f666f',
  measurementId: 'G-C2CF7LPG90'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth =getAuth(app)
export const db = getFirestore(app)
