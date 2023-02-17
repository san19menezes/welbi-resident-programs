import { useState, createContext, useContext } from 'react';

// Context API to store login related info in general
const AuthContext = createContext(null);

// Since the API for programs/id is non functional, the programs list is stored in the context to access
// in the program details page
export const AuthProvider = ({ children }) => {
  const [programsList, setProgramsList] = useState([]);

  const updatePrograms = (progList = []) => {
    setProgramsList(progList);
  };
  return (
    <AuthContext.Provider value={{ programsList, updatePrograms }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
