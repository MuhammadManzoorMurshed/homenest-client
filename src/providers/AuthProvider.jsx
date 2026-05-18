import React, { useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from './../firebase/firebase.config.js'

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = async (email, password, name, photoURL) => {
        setLoading(true);
        
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL
        });

        return result;
    }

    const signIn = async (email, password) => {
        setLoading(true);
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = async () => {
        setLoading(true);
        return await signInWithPopup(auth, googleProvider);
    }

    const logOut = async () => {
        setLoading(true);
        await signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const value = {
        loading,
        setLoading,
        signUp,
        user,
        logOut,
        signIn,
        signInWithGoogle
    };

    return (
        <AuthContext.Provider value={value}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;