import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { fetchProgramsList, fetchResidentsList } from './constants';

// Context API to store login related info in general
const AuthContext = createContext(null);

// Since the API for programs/id is non functional, the programs list is stored in the context to access
// in the program details page
export const AuthProvider = ({ children }) => {
  const [programsList, setProgramsList] = useState([]);
  const [residentsList, setResidentsList] = useState([]);
  const [programsError, setProgramsError] = useState(false);
  const [programsLoading, setProgramsLoading] = useState(true);
  const [residentsError, setResidentsError] = useState(false);
  const [residentsLoading, setResidentsLoading] = useState(true);

  // Function to fetch all resident programs
  const getAllPrograms = useCallback(async () => {
    const resp = await fetchProgramsList();
    if (resp.data) {
      setProgramsError(false);
      setProgramsLoading(false);
      setProgramsList(resp.data);
    } else if (resp.name === 'AxiosError') {
      setProgramsError(true);
      setProgramsLoading(false);
    }
  }, []);

  // Function to fetch all residents
  const getAllResidents = useCallback(async () => {
    const resp = await fetchResidentsList();
    if (resp.data) {
      setResidentsError(false);
      setResidentsLoading(false);
      setResidentsList(resp.data);
    } else if (resp.name === 'AxiosError') {
      setResidentsError(true);
      setResidentsLoading(false);
    }
  }, []);
  useEffect(() => {
    getAllPrograms();
    getAllResidents();
  }, []);

  // Expose the below functions to fetch data on addition of programs and residents
  const updatePrograms = () => {
    getAllPrograms();
  };
  const updateResidents = () => {
    getAllResidents();
  };
  return (
    <AuthContext.Provider
      value={{
        programsList,
        updatePrograms,
        residentsList,
        updateResidents,
        programsError,
        programsLoading,
        residentsError,
        residentsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
