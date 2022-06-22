import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = (props) => {
  const { title, number, home } = props;
  const regions = [
    {
      name: 'Africa',
      value: 'africa',
    },
    {
      name: 'Asia',
      value: 'asia',
    },
    {
      name: 'Europe',
      value: 'europe',
    },
    {
      name: 'North America',
      value: 'north-america',
    },
    {
      name: 'Oceania',
      value: 'oceania',
    },
    {
      name: 'South America',
      value: 'south-america',
    },
  ];

  return (
    <div className={styles.heading}>
      <h1>{title}</h1>
      {
        (home) ? (
          <select defaultValue="all" className={styles.filter}>
            <option value="all" disabled>__Filter Countries by Region__</option>
            {regions.map((region) => (
              <option
                key={region.value}
                value={region.value}
              >
                {region.name}
              </option>
            ))}
          </select>
        ) : (
          <>
            <span>{number}</span>
          </>
        )
      }
    </div>
  );
};

export default Heading;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.bool,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Heading.defaultProps = {
  number: '',
  home: false,
};
