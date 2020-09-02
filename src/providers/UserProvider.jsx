import React, { useState,useEffect, createContext } from 'react';
import { auth, generateUserDocument } from '../firebase';

export const UserContext = createContext({ user: null });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      setUser(user);
    });
    return unsubscribe;
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>);
};

export default UserProvider;
