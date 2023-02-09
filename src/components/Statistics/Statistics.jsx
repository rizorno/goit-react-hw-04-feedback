import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.scss';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.box}>
      <ul className={css['list-name']}>
        <li>Good: </li>
        <li>Neutral: </li>
        <li>Bad: </li>
        <li>Total: </li>
        <li>Positive feedback: </li>
      </ul>

      <ul className={css['list-data']}>
        <li>{good}</li>
        <li>{neutral}</li>
        <li>{bad}</li>
        <li>{total}</li>
        <li>{positivePercentage}%</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
