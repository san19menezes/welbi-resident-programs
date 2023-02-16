import React from 'react';
import image from '../../assets/resident-image.jpg';
import './Resident.scss';

const Resident = ({ resident }) => {
  const { name, room, levelOfCare } = resident;
  return (
    <div className='resident-container'>
      <div className='resident-image'>
        <img src={image} alt='logo' />
      </div>
      <div className='resident-card'>
        <h3>{name}</h3>
        <p className='resident-room'>R: {room === '' ? 'Unknown' : room}</p>
        <p>{levelOfCare}</p>
      </div>
    </div>
  );
};

export default Resident;
