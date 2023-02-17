import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Program from '../../components/Program/Program';
import { useAuth } from '../../utils/Auth';
import { fetchProgramsList } from '../../utils/constants';
import { ErrorPage, LoadingSpinner, PageHeader } from '../../components';
import './Programs.scss';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { updatePrograms } = useAuth();

  const getAllPrograms = useCallback(async () => {
    const resp = await fetchProgramsList();
    if (resp.data) {
      setError(false);
      setLoading(false);
      setPrograms(resp.data);
      updatePrograms(resp.data);
    } else if (resp.name === 'AxiosError') {
      setError(true);
      setLoading(false);
    }
  }, [updatePrograms]);

  useEffect(() => {
    getAllPrograms();
  }, []);
  return (
    <div className='programs-container page__container'>
      <PageHeader headerName='Resident Programs' details='' />

      <div className='add-program-btn_container add-btn-container'>
        <Link className='add-Program-Btn' to={'/addProgram'}>
          + Add a new program
        </Link>
      </div>
      {loading && <LoadingSpinner />}
      {error ? (
        <ErrorPage details='Unable to load program data. Please try later.' />
      ) : (
        <div className='programs-list-container page-border'>
          {programs.map((program) => {
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
