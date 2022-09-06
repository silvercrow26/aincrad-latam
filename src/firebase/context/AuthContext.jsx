import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../firebase/config'
import { useEffect } from "react";
export const AuthContext = createContext();

export const useAuth = () => {
   const context = useContext(AuthContext)
   if(!context) throw new error('There is no auth provider')
   return context
}



export const AuthProvider = ({children}) =>  {

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email , password)
    
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
        })
    }, [])



    return <AuthContext.Provider value={{ signup, login }}>{children}</AuthContext.Provider>

}