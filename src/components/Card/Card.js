import React from 'react';
import image from '../../assets/resident-image.jpg';
import './Card.scss';

const Card = ({ id, status }) => {
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={image} alt='logo' />
      </div>
      <div className='card-card'>
        <h3>{id}</h3>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Card;
