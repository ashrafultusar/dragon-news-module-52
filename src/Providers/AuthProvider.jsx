import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
const  [loading, setLoading]=useState(true)

  const creatUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  const logOut = () => {
    setLoading(true)
  return signOut(auth)
}

  useEffect(() => {
   const unSubscribe =onAuthStateChanged(auth, currentUser => {
      console.log('user auth change vai', currentUser)
     setUser(currentUser)
     setLoading(false)
   })
    return ()=> {
      unSubscribe();
    }
},[])


  const authInfo = {
    user,
    loading,
    creatUser,
    logOut,
    signIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
