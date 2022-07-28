import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';

export const AuthContext = createContext();

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error('There is no auth provider');
    return context;
}

const AuthProvider = ({children}) => {

    const signup = (email,password) => 
        createUserWithEmailAndPassword(auth,email,password);

    return(
        <AuthContext.Provider value={{signup}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;