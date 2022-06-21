/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Country.module.scss';

const Country = (props) => {
  const { name, number, vector } = props;

  return (
    <div className={styles.wrapper}>
      <i className={styles.right_arrow} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <span>{number}</span>
      </div>
    </div>
  );
};

export default Country;

Country.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  vector: PropTypes.string.isRequired,
};
