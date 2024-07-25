// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "sonner";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW6CxOm1n8542dEff62UeNt4F6LRXkQv4",
  authDomain: "movie-flix-94460.firebaseapp.com",
  projectId: "movie-flix-94460",
  storageBucket: "movie-flix-94460.appspot.com",
  messagingSenderId: "1030118680980",
  appId: "1:1030118680980:web:7ca5018ddd446e9d1dc781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup =async (name,email,password)=>{
try {
 const response =  await createUserWithEmailAndPassword(auth,email,password)
 const user =response.user;
 await addDoc(collection(db,"user"),{
  uid:user.uid,
  name,
  authProvider:'local',
  email,
 })
} catch (error) {
  console.log(error);
 toast.error(error.code.split('/')[1].split('-').join(" "))
}

}
const login =async(email,password)=>{
  try {
   await signInWithEmailAndPassword(auth,email,password)

  } catch (error) {
   
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const logout =()=>{
  signOut(auth)
}

export{auth,db,login,signup,logout}