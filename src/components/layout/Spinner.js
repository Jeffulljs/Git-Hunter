import React, { Fragment } from 'react';
import Spinner from './spinner.gif';

const spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner.gif}
        alt="Chargement"
        style={{
          width: '200 px',
          margin: 'auto',
          display: 'block'
        }}
      />
    </Fragment>
  );
};

export default spinner;
