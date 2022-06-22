import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = (props) => {
  const { title, number } = props;

  return (
    <div className={styles.heading}>
      <h1>{title}</h1>
      <span>{number}</span>
    </div>
  );
};

export default Heading;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Heading.defaultProps = {
  number: '',
};
