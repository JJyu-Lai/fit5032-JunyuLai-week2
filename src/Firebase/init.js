// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxmaWVd0LXIQ3-ku0AeoX4JkywvWdk3yE',
  authDomain: 'week7-junyulai.firebaseapp.com',
  projectId: 'week7-junyulai',
  storageBucket: 'week7-junyulai.appspot.com',
  messagingSenderId: '422046342878',
  appId: '1:422046342878:web:32245ffce122907bf56c4f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
export default db
