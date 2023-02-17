import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Button, PageHeader } from '../../components';
import { addNewProgramToList, PROGRAM_DIMENSION } from '../../utils/constants';
import { useAuth } from '../../utils/Auth';
import './AddProgram.scss';

const AddProgram = () => {
  let navigate = useNavigate();
  const { updatePrograms } = useAuth();

  // Function to add a new program
  const addNewProgram = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonBody = {};

    // Parse form data before API request
    for (let [key, value] of formData.entries()) {
      jsonBody[key] = value;
    }

    if (jsonBody['parentId'] === '') jsonBody['parentId'] = null;
    jsonBody['allDay'] === 'Yes'
      ? (jsonBody['allDay'] = true)
      : (jsonBody['allDay'] = false);
    jsonBody['tags'] === ''
      ? (jsonBody['tags'] = [])
      : (jsonBody['tags'] = jsonBody['tags'].split(','));

    jsonBody['facilitators'] === ''
      ? (jsonBody['facilitators'] = [])
      : (jsonBody['facilitators'] = jsonBody['facilitators'].split(','));

    jsonBody['levelOfCare'] === ''
      ? (jsonBody['levelOfCare'] = [])
      : (jsonBody['levelOfCare'] = jsonBody['levelOfCare']
          .toUpperCase()
          .split(','));

    jsonBody['hobbies'] === ''
      ? (jsonBody['hobbies'] = [])
      : (jsonBody['hobbies'] = jsonBody['hobbies'].split(','));

    if (jsonBody['recurrence'] === '') jsonBody['recurrence'] = 'NA';
    jsonBody['isRepeated'] === 'Yes'
      ? (jsonBody['isRepeated'] = true)
      : (jsonBody['isRepeated'] = false);
    if (jsonBody['applicantId'] === '') jsonBody['applicantId'] = null;

    addNewProgramToList(jsonBody)
      .then((resp) => routeBack())
      .catch((err) => console.log(err));
  };

  // Function to route back to the parent page
  const routeBack = () => {
    updatePrograms();
    navigate('/programs');
  };

  return (
    <div className='addProgram__container page__container'>
      <Button
        onClick={routeBack}
        displayText={
          <>
            <IoMdArrowBack /> Go back
          </>
        }
      ></Button>
      <PageHeader headerName='Add a new program' details='' />
      <form className='form__container page-border' onSubmit={addNewProgram}>
        <div className='program-input'>
          <div>
            <label htmlFor='name'>
              Program Name<span className='required'>*</span>
            </label>
            <input name='name' type='text' required />
          </div>
          <div>
            <label htmlFor='parentId'>Parent Id</label>
            <input name='parentId' type='text' />
          </div>
        </div>
        <div className='program-input'>
          <div>
            <label htmlFor='location'>
              Location <span className='required'>*</span>
            </label>
            <input name='location' type='text' required />
          </div>
          <div>
            <label htmlFor='recurrence'>Recurrence</label>
            <input name='recurrence' type='text' />
          </div>
        </div>
        <div className='program-input'>
          <div>
            <label htmlFor='start'>
              Start Date <span className='required'>*</span>
            </label>
            <input name='start' type='datetime-local' required />
          </div>
          <div>
            <label htmlFor='end'>
              End Date <span className='required'>*</span>
            </label>
            <input name='end' type='datetime-local' required />
          </div>
        </div>
        <div className='program-input'>
          <div>
            <label htmlFor='allDay'>All Day</label>
            <select name='allDay'>
              {[true, false].map((status) => (
                <option key={status} value={status}>
                  {status === true ? 'Yes' : 'No'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='dimension'>Choose dimension</label>
            <select name='dimension'>
              {PROGRAM_DIMENSION.map((careLevel) => (
                <option key={careLevel} value={careLevel}>
                  {careLevel}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='program-input'>
          <div>
            <label htmlFor='tags'>
              Tags <span className='required'>*</span>
            </label>
            <small>Please enter tags separated by comma</small>
            <input name='tags' type='text' required />
          </div>
          <div>
            <label htmlFor='facilitators'>
              Facilitators <span className='required'>*</span>
            </label>
            <small>Please enter facilitator names separated by comma</small>
            <input name='facilitators' type='text' required />
          </div>
        </div>
        <div className='program-input'>
          <div>
            <label htmlFor='levelOfCare'>
              Level of care <span className='required'>*</span>
            </label>
            <small>Please enter levels separated by comma</small>
            <input name='levelOfCare' type='text' required />
          </div>
          <div>
            <label htmlFor='hobbies'>Hobbies</label>
            <small>Please enter hobbies names separated by comma </small>
            <input name='hobbies' type='text' />
          </div>
        </div>
        <div className='program-input'>
          <div>
            <label htmlFor='isRepeated'>Repeated</label>
            <input name='isRepeated' type='text' />
          </div>
          <div>
            {/* <label htmlFor='applicantId'>Applicant Id</label>
            <input name='applicantId' type='text' /> */}
          </div>
        </div>
        <div className='program-input'>
          {/* <div>
            <label htmlFor='attendance'>Attendees</label>
            <select name='attendance' className='attendees-multiple' multiple>
              {residents.map((resident) => (
                <option key={resident.id} value={resident.id}>
                  {resident.name}
                </option>
              ))}
            </select>
          </div> */}
          <div></div>
        </div>
        <div>
          <Button type='submit' displayText='Submit'></Button>
        </div>
      </form>
    </div>
  );
};

export default AddProgram;
