// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCt8Npz76pGlL8M1QaLjxa3GLgqWnj4Pc",
  authDomain: "chat-app-6d088.firebaseapp.com",
  projectId: "chat-app-6d088",
  storageBucket: "chat-app-6d088.firebasestorage.app",
  messagingSenderId: "390940025876",
  appId: "1:390940025876:web:3b989cdef29f8e4953f301",
  measurementId: "G-DT8VCM2NFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
    try{
        const res =await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using Chat app",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    }
    catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));
    }

}

const login = async(email,password) =>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));
    }
}

const logout = async() =>{
    try{
        await signOut(auth);
    }
    catch(error)
    {
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));
    }
    
}

export {signup,login,logout,auth,db}