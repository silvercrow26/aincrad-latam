import { createContext, useContext, useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../../firebase/config'

export const AuthContext = createContext();
export const useAuth = () => {
   const context = useContext(AuthContext)
   if(!context) throw new error('There is no auth provider')
   return context
}


export const AuthProvider = ({children}) =>  {

    const [user, setUser] = useState(null)


    const signup = (email, password) => createUserWithEmailAndPassword(auth, email , password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])
 

    return <AuthContext.Provider value={{ signup, login, user, logout, auth}}>{children}</AuthContext.Provider>

}