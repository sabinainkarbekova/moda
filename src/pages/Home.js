import React from 'react';
import Header from '../home-components/Header';
import Maininfo from '../home-components/Maininfo';
import Style from '../home-components/Style';
import Time from '../home-components/Time';
import Footer from '../home-components/Footer';



function Home() {
  return (
    <div>
      <Header />
      <Maininfo />  
      <Time />
      <Style />
      <Footer />
    </div>
  );
}

export default Home;