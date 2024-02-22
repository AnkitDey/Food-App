import React from 'react';
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyle.css"
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';




const Home = () =>{
  return (
    <>
    <Layout>
    { /* home section banner*/}
    <Section1 />
    {/* about section banner */}
  <Section2/>
  {/* menu section */}
  <Section3/>
  {/* home section promotion */}
 <Section4/>
 {/* home ection shop */}
 <Section5/>
 {/* home blog */}
 <Section6/>
 {/* home contact */}
 <Section7/>
    </Layout>
    
   </>
  );
};

export default Home;
