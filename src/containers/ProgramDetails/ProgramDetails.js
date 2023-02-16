import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import PageHeader from '../../components/PageHeader/PageHeader';
import eventLogo from '../../assets/prog-details.jpg';
import Card from '../../components/Card/Card';
import { useAuth } from '../../utils/Auth';
import './ProgramDetails.scss';
import Button from '../../components/Button/Button';

const ProgramDetails = () => {
  const { id } = useParams();
  const { programsList } = useAuth();
  const navigate = useNavigate();
  const [programDetail, setProgramDetail] = useState({});

  const getProgramDetails = (id) => {
    return programsList.filter((program) => id === program.id);
  };

  useEffect(() => {
    const progDetail = getProgramDetails(id);
    setProgramDetail(progDetail[0]);
  }, [id]);
  const routeBack = () => {
    console.log('navigate');
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
      <PageHeader headerName='Program Details' details='' />
      <div className='program-details-page__container'>
        <div>
          <img src={eventLogo} alt='logo' />
        </div>

        <h2>{programDetail.name}</h2>
        <div className='program-details'>
          <div>
            <p className='detail-label'>Location: </p>
            <p>{programDetail.location}</p>
          </div>
          <div>
            <p className='detail-label'>Dimension: </p>
            <p>{programDetail.dimension}</p>
          </div>
          <div>
            <p className='detail-label'>Date: </p>
            <p>{new Date(programDetail.start).toDateString()}</p>
          </div>
          <div>
            <p className='detail-label'>All Day: </p>
            <p>{programDetail.allDay ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className='detail-label'>Start: </p>
            <p>{new Date(programDetail.start).toLocaleTimeString('en-US')}</p>
          </div>
          <div>
            <p className='detail-label'>End: </p>
            <p>{new Date(programDetail.end).toLocaleTimeString('en-US')}</p>
          </div>
          <div>
            <p className='detail-label'>Level of care: </p>
            <p>{programDetail?.levelOfCare?.map((level) => level + ', ')}</p>
          </div>
          <div>
            <p className='detail-label'>Hobbies: </p>
            <p>{programDetail?.hobbies?.map((hobby) => hobby + ', ')}</p>
          </div>
          <div>
            <p className='detail-label'>Repeated: </p>
            <p>{programDetail.isRepeated ? 'Yes' : 'No'}</p>
          </div>
        </div>
        <div>Attendees</div>
        <div className='attendees-list'>
          {programDetail?.attendance?.map((attendee) => (
            <Card
              id={attendee.residentId}
              status={attendee.status}
              key={attendee.residentId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
