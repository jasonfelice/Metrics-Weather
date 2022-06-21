import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = (props) => {
  const { heading } = props;

  return (
    <header>
      <i className={styles.previous} />
      <h3>{ heading }</h3>
      <div className={styles.icons}>
        <i className={styles.mic} />
        <i className={styles.settings} />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
