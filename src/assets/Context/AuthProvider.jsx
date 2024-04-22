import { createContext } from 'react'
import useFirebase from '../useFirebase/useFirebase';

export const MyContext = createContext();

function AuthProvider({ children }) {
  const AllContext = useFirebase();

  return (
    <div>
      <MyContext.Provider value={AllContext}>
        { children }
      </MyContext.Provider>
    </div>
  )
}

export default AuthProvider
