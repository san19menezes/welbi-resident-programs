import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchResidentsList } from '../../utils/constants';
import {
  ErrorPage,
  LoadingSpinner,
  PageHeader,
  Resident,
} from '../../components';
import './Residents.scss';

const Residents = () => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllResidents = useCallback(async () => {
    const resp = await fetchResidentsList();
    if (resp.data) {
      setError(false);
      setLoading(false);
      setResidents(resp.data);
    } else if (resp.name === 'AxiosError') {
      setError(true);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getAllResidents();
  }, []);

  return (
    <div className='residents-container page__container'>
      <PageHeader headerName='Community Residents' details='' />
      <div className='add-resident-btn_container add-btn-container'>
        <Link className='add-resident-Btn' to={'/addResident'}>
          + Add a new resident
        </Link>
      </div>
      {loading && <LoadingSpinner />}
      {error ? (
        <ErrorPage details='Unable to load program data. Please try later.' />
      ) : (
        <div className='residents-list-container page-border'>
          {residents.map((resident) => {
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
