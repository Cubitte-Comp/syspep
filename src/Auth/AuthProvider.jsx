import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({
    isAuthenticated: false,
    saveUser: (userData) => {},
    getUser: () => {}
}) 
export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {  
      checkAuth();

    }, [])

    function checkAuth(){
        const user = getUser()
        if(user){
            setIsAuthenticated(true)
        }
    } 
    
    function getUser(){
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    }
    function saveUser(userData){
    //    setAccessToken(userData.token)
       localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true)
    }
  return (
    <AuthContext.Provider value={{ isAuthenticated, saveUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}


