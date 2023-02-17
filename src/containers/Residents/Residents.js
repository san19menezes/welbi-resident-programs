import React from 'react';
import { Link } from 'react-router-dom';

import {
  ErrorPage,
  LoadingSpinner,
  PageHeader,
  Resident,
} from '../../components';
import './Residents.scss';
import { useAuth } from '../../utils/Auth';

const Residents = () => {
  const { residentsList, residentsError, residentsLoading } = useAuth();

  return (
    <div className='residents-container page__container'>
      <PageHeader headerName='Community Residents' details='' />
      <div className='add-resident-btn_container add-btn-container'>
        <Link className='add-resident-Btn' to={'/addResident'}>
          + Add a new resident
        </Link>
      </div>
      {residentsLoading && <LoadingSpinner />}
      {residentsError ? (
        <ErrorPage details='Unable to load program data. Please try later.' />
      ) : (
        <div className='residents-list-container page-border'>
          {residentsList.map((resident) => {
            const { id } = resident;
            return (
              <Link to={`/residents/${id}`} key={id} className='router-link'>
                <Resident key={id} resident={resident} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Residents;
