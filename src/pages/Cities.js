/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Header from '../components/Header';
import Heading from '../components/Heading';
import City from '../components/City';

const Cities = () => {
  const cities = useSelector((state) => state.updateCities);

  return (
    <>
      <Header previous=" " heading="Cities" />
      <Heading title="City" />
      <section>
        <div className="cities_wrapper">
          {
            cities.map((city) => (
              <City
                key={city.name}
                title={city.name}
                lat={city.lat}
                long={city.long}
              />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Cities;
