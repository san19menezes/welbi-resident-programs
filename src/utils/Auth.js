import { useState, createContext, useContext, useEffect } from 'react';
import { BEARER_TOKEN_API } from './constants';
import { useBearerTokenFromLocalStorage } from '../hooks/useBearerToken';
import { request } from './axios-utils';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useBearerTokenFromLocalStorage('Bearer', '');
  const [programsList, setProgramsList] = useState([]);

  // API call to fetch the bearer token
  // This will then be stored in local storage as well as in react context
  const fetchBearerToken = async () => {
    const data = await fetch(BEARER_TOKEN_API);
    const json = await data.json();
    return json;
  };

  const updatePrograms = (progList = []) => {
    setProgramsList(progList);
  };
  useEffect(() => {
    const jsonBody = {
      email: process.env.REACT_APP_USER_EMAIL_ID,
    };

    //const response = fetchBearerToken().catch((error) => console.log(error));
    //setToken(response);
    // To Do - fetch bearer token from api
  }, [setToken]);

  return (
    <AuthContext.Provider value={{ token, programsList, updatePrograms }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
