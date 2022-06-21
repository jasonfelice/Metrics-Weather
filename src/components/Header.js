import React from 'react';
import styles from './Header.module.scss';

const Header = (props) => {
  const { heading } = props;

  return (
    <header>
      <i className={styles.backButton} />
      <div className={styles.icon}>
        <i className={styles.mic} />
        <i className={styles.settings} />
      </div>
    </header>
  );
};

export default Header;
