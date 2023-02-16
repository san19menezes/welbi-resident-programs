import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import PageHeader from '../../components/PageHeader/PageHeader';
import Program from '../../components/Program/Program';
import { useAuth } from '../../utils/Auth';
import './Programs.scss';
import { fetchProgramsList } from '../../utils/constants';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const { updatePrograms } = useAuth();

  useEffect(() => {
    fetchProgramsList()
      .then((resp) => {
        setPrograms(resp.data);
        updatePrograms(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='programs-container page__container'>
      <PageHeader headerName='Resident Programs' details='' />
      <div className='add-program-btn_container'>
        <Link className='add-Program-Btn' to={'/addProgram'}>
          + Add a new program
        </Link>
      </div>

      <div className='programs-list-container'>
        {programs.map((program) => {
          const { id } = program;
          return (
            <Link to={`/programs/${id}`} key={id} className='router-link'>
              <Program key={id} program={program} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
