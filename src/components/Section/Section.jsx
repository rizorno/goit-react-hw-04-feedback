import React from 'react';
import PropTypes from 'prop-types';
import css from './section.module.scss';

function Section({ title, children }) {
  return (
    <div className={css.box}>
      <h2 className={css.title}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
