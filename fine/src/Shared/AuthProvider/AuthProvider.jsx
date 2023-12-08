import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.config";






export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
       
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth)
    }

     const googleSignIn = () =>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)
    
     }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, userId => {
            setUser(userId)
            console.log('observing current user', userId)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signInUser,
        googleSignIn
      
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
