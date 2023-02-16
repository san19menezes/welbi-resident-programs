import React, { useEffect, useState } from 'react';
import Resident from '../../components/Resident/Resident';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { fetchResidentsList } from '../../utils/constants';
import './Residents.scss';

const Residents = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchResidentsList()
      .then((resp) => setResidents(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='residents-container page__container'>
      <PageHeader headerName=' All Residents' details='' />
      <div className='add-resident-btn_container'>
        <Link className='add-resident-Btn' to={'/addResident'}>
          + Add a new resident
        </Link>
      </div>
      <div className='residents-list-container'>
        {residents.map((resident) => {
          const { id } = resident;
          return (
            <Link to={`/residents/${id}`} key={id} className='router-link'>
              <Resident key={id} resident={resident} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Residents;
