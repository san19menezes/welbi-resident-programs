import React from 'react';
import { GrLocation } from 'react-icons/gr';
import eventLogo from '../../assets/program-image.jpg';
import { getFormattedDate, getFormattedTime } from '../../utils/constants';
import './Program.scss';

const Program = ({ program }) => {
  const { name, dimension, location, allDay, start, end } = program;

  return (
    <div className='program-container'>
      <div className='program-card'>
        <img src={eventLogo} data-testid='program-image' alt='logo' />
        <h3 data-testid='program-name'>{name}</h3>
        <p data-testid='program-dimension'>
          <b>Dimension: </b>
          {dimension}
        </p>
        <p className='program-date' data-testid='program-date'>
          {getFormattedDate(start)}
        </p>
        {allDay ? (
          <div>All Day Event</div>
        ) : (
          <>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1, textAlign: 'right', marginRight: '1px' }}>
                <b>Start: </b>
              </div>
              <div style={{ flex: 3 }}>{getFormattedTime(start)}</div>
            </div>

            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1, textAlign: 'right', marginRight: '1px' }}>
                <b>End: </b>
              </div>
              <div style={{ flex: 3 }}>{getFormattedTime(end)}</div>
            </div>
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
