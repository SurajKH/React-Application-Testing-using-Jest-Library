import React from 'react';
//import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import JestCards from './Components/CardTemplates/JestCards';
//import PropsTestComponent from './Components/PropsTestComponent';
import Details from './Components/Details';
import Footer from './Components/Footer';
import DemoCarousel from './Components/DemoCarousel';

function App() {
  return (
    <div className="App">
      {/* <h1>Testing using ReactJS and Typescript.</h1>
      <h2>Jest : the ReactJS Testing Library</h2> */}
      <First/>
      {/* <PropsTestComponent name="Props Testing in Jest ReactJS Library."/> */}
      <Details/>
      <DemoCarousel/>
      <JestCards/>
      <Footer/>
    </div>
  );
}

export default App;
