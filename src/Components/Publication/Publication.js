import React from 'react';
import PropTypes from 'prop-types';
import style from './Publication.module.css';

const Publication = ({ text, title }) => {
  return (
    <article className={style.Publication}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Publication;
