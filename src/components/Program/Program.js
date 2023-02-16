import React from 'react';
import { GrLocation } from 'react-icons/gr';
import eventLogo from '../../assets/program-image.jpg';
import './Program.scss';

const Program = ({ program }) => {
  const { name, dimension, location, allDay, start, end } = program;
  const getFormattedDate = (date) => {
    let formattedDate = new Date(date).toDateString();
    return formattedDate;
  };
  const getFormattedTime = (date) => {
    let formattedTime = new Date(date).toLocaleTimeString('en-US');
    return formattedTime;
  };
  return (
    <div className='program-container'>
      <div className='program-card'>
        <img src={eventLogo} alt='logo' />
        <h3>{name}</h3>
        <p>{dimension}</p>
        <p className='program-date'>{getFormattedDate(start)}</p>
        {allDay ? (
          <div>All Day Event</div>
        ) : (
          <>
            <p>
              <b>Start:</b> {getFormattedTime(start)}
            </p>
            <p>
              <b>End:</b> {getFormattedTime(end)}
            </p>
          </>
        )}
        <div className='program-location'>
          <GrLocation className='program-location' />
          {location}
        </div>
      </div>
    </div>
  );
};

export default Program;
