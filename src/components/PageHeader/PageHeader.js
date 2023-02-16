import React from 'react';
import './PageHeader.scss';

const PageHeader = ({ headerName, details }) => {
  return (
    <div className='page-heading'>
      <h2>{headerName}</h2>
      <p>{details}</p>
    </div>
  );
};

export default PageHeader;
