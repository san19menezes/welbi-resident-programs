import React from 'react';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/PageHeader/PageHeader';
import {
  RESIDENT_AMBULATION,
  RESIDENT_LEVEL_OF_CARE,
  RESIDENT_STATUS,
} from '../../utils/constants';
import './AddResident.scss';

const AddResident = () => {
  const addNewResident = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
    <div className='addResident__container page__container'>
      <PageHeader headerName='Add a new resident' details='' />
      <form className='form__container' onSubmit={addNewResident}>
        <div className='resident-input'>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input name='firstName' type='text' />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input name='lastName' type='text' />
          </div>
        </div>
        <div className='resident-input'>
          <div>
            <label htmlFor='preferredName'>Preferred Name</label>
            <input name='preferredName' type='text' />
          </div>
          <div>
            <label htmlFor='room'>Room</label>
            <input name='room' type='text' />
          </div>
        </div>

        <div className='resident-input'>
          <div>
            {' '}
            <label htmlFor='status'>Choose a status</label>
            <select name='status'>
              {RESIDENT_STATUS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='levelOfCare'>Choose level of care</label>
            <select name='levelOfCare'>
              {RESIDENT_LEVEL_OF_CARE.map((careLevel) => (
                <option key={careLevel} value={careLevel}>
                  {careLevel}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='resident-input'>
          <div>
            <label htmlFor='ambulation'>Choose level of ambulation</label>
            <select name='ambulation'>
              {RESIDENT_AMBULATION.map((ambulation) => (
                <option key={ambulation} value={ambulation}>
                  {ambulation}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='applicantId'>Applicant Id</label>
            <input name='applicantId' type='text' />
          </div>
        </div>

        <div className='resident-input'>
          <div>
            <label htmlFor='birthDate'>Date of birth</label>
            <input name='birthDate' type='date' />
          </div>
          <div>
            <label htmlFor='moveInDate'>Move in date</label>
            <input name='moveInDate' type='date' />
          </div>
        </div>

        <div>
          <Button type='submit' displayText='Submit'></Button>
        </div>
      </form>
    </div>
  );
};

export default AddResident;
