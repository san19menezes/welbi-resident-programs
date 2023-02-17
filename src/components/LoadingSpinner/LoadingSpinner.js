import React from 'react';
import ReactLoading from 'react-loading';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className='loading-spinner'>
      <ReactLoading type='spokes' color='#00add8' height={574} width={120} />
    </div>
  );
};

export default LoadingSpinner;
