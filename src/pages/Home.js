import React from 'react';
import Header from '../components/Header';
import Country from '../components/Country';
import jp from '../data/maps/jp.png';

const Home = () => (
  <>
    <Header heading="Weather" />
    <section>
      <div>This is the Home Page!</div>
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
