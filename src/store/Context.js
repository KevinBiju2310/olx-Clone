import React, { createContext, useState } from "react";
import { auth, db, storage } from "../firebase/config";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState(null);

  return (
    <FirebaseContext.Provider value={{ auth, db, storage }}>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
}
