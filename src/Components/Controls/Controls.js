import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({
  onPreviousArticle,
  onNextArticle,
  currentPublication,
  allPublication,
}) => {
  return (
    <section className={style.controls}>
      <button
        type="button"
        className={style.button}
        onClick={onPreviousArticle}
        disabled={currentPublication === 0 ? 'disabled' : null}
      >
        Назад
      </button>
      <button
        type="button"
        className={style.button}
        onClick={onNextArticle}
        disabled={currentPublication === allPublication - 1 ? 'disabled' : null}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onPreviousArticle: PropTypes.func.isRequired,
  onNextArticle: PropTypes.func.isRequired,
  currentPublication: PropTypes.number.isRequired,
  allPublication: PropTypes.number.isRequired,
};

export default Controls;
