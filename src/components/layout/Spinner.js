import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Chargement"
      style={{
        width: '200 px',
        margin: 'auto',
        display: 'block'
      }}
    />
  </Fragment>
);

export default Spinner;
