import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './utils/Auth';
import {
  AddProgram,
  AddResident,
  Footer,
  Header,
  Programs,
  ProgramDetails,
  Residents,
  ResidentDetails,
} from './containers';
import './App.scss';

const LazyLoadPrograms = React.lazy(() =>
  import('./containers/Programs/Programs')
);

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <AuthProvider>
          <Header />          
            <Routes>
              <Route exact path='/' element={<LazyLoadPrograms />}></Route>
              <Route path='/programs' element={<Programs />}></Route>
              <Route path='/programs/:id' element={<ProgramDetails />}></Route>
              <Route path='/residents' element={<Residents />}></Route>
              <Route
                path='/residents/:id'
                element={<ResidentDetails />}
              ></Route>
              <Route path='/addProgram' element={<AddProgram />}></Route>
              <Route
                exact
                path='/addResident'
                element={<AddResident />}
              ></Route>
            </Routes>         

          <hr />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
