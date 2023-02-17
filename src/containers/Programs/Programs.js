import React from 'react';
import { Link } from 'react-router-dom';
import Program from '../../components/Program/Program';
import { useAuth } from '../../utils/Auth';
import { ErrorPage, LoadingSpinner, PageHeader } from '../../components';
import './Programs.scss';

const Programs = () => {
  const { programsList, programsLoading, programsError } = useAuth();

  return (
    <div className='programs-container page__container'>
      <PageHeader headerName='Resident Programs' details='' />

      <div className='add-program-btn_container add-btn-container'>
        <Link className='add-Program-Btn' to={'/addProgram'}>
          + Add a new program
        </Link>
      </div>
      {programsLoading && <LoadingSpinner />}
      {programsError ? (
        <ErrorPage details='Unable to load program data. Please try later.' />
      ) : (
        <div className='programs-list-container page-border'>
          {programsList.map((program) => {
            const { id } = program;
            return (
              <Link to={`/programs/${id}`} key={id} className='router-link'>
                <Program key={id} program={program} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Programs;
