import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { Button, PageHeader } from '../../components';
import {
  addNewResidentToList,
  RESIDENT_AMBULATION,
  RESIDENT_LEVEL_OF_CARE,
  RESIDENT_STATUS,
} from '../../utils/constants';
import './AddResident.scss';

const AddResident = () => {
  let navigate = useNavigate();
  useEffect(() => {}, []);
  const addNewResident = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonBody = {};
    for (let [key, value] of formData.entries()) {
      jsonBody[key] = value;
    }
    jsonBody['name'] = `${jsonBody['firstName']} ${jsonBody['lastName']}`;
    if (jsonBody['room'] === '') jsonBody['room'] = null;
    if (jsonBody['preferredName'] === '') jsonBody['preferredName'] = null;
    console.log(jsonBody);

    addNewResidentToList(jsonBody)
      .then((resp) => routeBack())
      .catch((err) => console.log(err));
  };
  const routeBack = () => {
    console.log('navigate');
    navigate('/residents');
  };
  return (
    <div className='addResident__container page__container'>
      <Button
        onClick={routeBack}
        displayText={
          <>
            <IoMdArrowBack /> Go back
          </>
        }
      ></Button>
      <PageHeader headerName='Add a new resident' details='' />
      <form className='form__container page-border' onSubmit={addNewResident}>
        <div className='resident-input'>
          <div>
            <label htmlFor='firstName'>
              First Name<span className='required'>*</span>
            </label>
            <input name='firstName' type='text' required />
          </div>
          <div>
            <label htmlFor='lastName'>
              Last Name<span className='required'>*</span>
            </label>
            <input name='lastName' type='text' required />
          </div>
          <div>
            <label htmlFor='preferredName'>Preferred Name</label>
            <input name='preferredName' type='text' />
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
            <label htmlFor='room'>
              Room<span className='required'>*</span>
            </label>
            <input name='room' type='text' />
          </div>
        </div>

        <div className='resident-input'>
          <div>
            <label htmlFor='birthDate'>
              Date of birth <span className='required'>*</span>
            </label>
            <input name='birthDate' type='date' required />
          </div>
          <div>
            <label htmlFor='moveInDate'>
              Move in date<span className='required'>*</span>
            </label>
            <input name='moveInDate' type='date' required />
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
