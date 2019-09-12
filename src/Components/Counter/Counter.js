import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.module.css';

const Counter = ({ currentPublication, allPublication }) => {
  return (
    <p className={style.counter}>
      {currentPublication + 1}/{allPublication}
    </p>
  );
};

Counter.propTypes = {
  currentPublication: PropTypes.number.isRequired,
  allPublication: PropTypes.number.isRequired,
};

export default Counter;
