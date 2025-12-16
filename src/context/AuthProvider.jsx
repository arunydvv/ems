import { createContext, useEffect, useState } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/LocalStorage';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [userData, setuserData] = useState(null);
    
    useEffect(() => {
         setLocalStorageItem();
        const { employees, admin } = getLocalStorageItem();
        setuserData({ employees, admin });
    }, []);
    
  return (
      <div>
          <AuthContext.Provider value={userData}>
              {children}
          </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider