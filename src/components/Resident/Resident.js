import React from 'react';
import image from '../../assets/resident-image.jpg';
import './Resident.scss';

const Resident = ({ resident }) => {
  const { name, room, levelOfCare } = resident;

  return (
    <div className='resident-container'>
      <div className='resident-image'>
        <img src={image} data-testid='resident-image' alt='logo' />
      </div>
      <div className='resident-card'>
        <h3 data-testid='resident-name'>{name}</h3>
        <p className='resident-room' data-testid='resident-room'>
          Room: {room === '' ? 'Unknown' : room}
        </p>
        <p data-testid='resident-care'>Care: {levelOfCare}</p>
      </div>
    </div>
  );
};

export default Resident;
