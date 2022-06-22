import React from 'react';
import Header from '../components/Header';
import Country from '../components/Country';
import jp from '../data/maps/jp.png';
import Heading from '../components/Heading';

const Home = () => (
  <>
    <Header heading="Weather" />
    <section>
      <Heading title="Weather" />
      <div className="countries">
        <Country number={4} name="Japan" vector={jp} />
        <Country number={4} name="Japan" vector={jp} />
        <Country number={4} name="Japan" vector={jp} />
        <Country number={4} name="Japan" vector={jp} />
      </div>
    </section>
  </>
);

export default Home;
