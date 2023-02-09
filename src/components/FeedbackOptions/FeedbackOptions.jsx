import React from 'react';
import PropTypes from 'prop-types';
import css from './feedback-options.module.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = Object.keys(options).map(element => {
    return (
      <button
        className={css.button}
        key={element}
        type="button"
        name={element}
        onClick={onLeaveFeedback}
      >
        {element}
      </button>
    );
  });

  return elements;
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
