import React from 'react';
import './ErrorPage.scss';

const ErrorPage = ({ details }) => {
  return <div className='error__container app__flex'>{details}</div>;
};

export default ErrorPage;
