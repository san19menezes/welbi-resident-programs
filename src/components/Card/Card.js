import React from 'react';
import image from '../../assets/resident-image.jpg';
import { useAuth } from '../../utils/Auth';
import './Card.scss';

const Card = ({ id, status }) => {
  const { residentsList } = useAuth();

  const getResidentFullName = (id) => {
    const resident = residentsList.filter((resident) => {
      console.log(resident);
      return id == resident.id;
    });
    return resident[0].name;
  };
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={image} alt='logo' />
      </div>
      <div className='card-detail'>
        <h3>{getResidentFullName(id)}</h3>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Card;
