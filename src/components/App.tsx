import React from 'react';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className='circleContainer'>
        <div className='circle'><div className='circleContent'></div></div>
        <div className='lineContainer' ><div className='line'></div></div>
        <div className='circle' id='circle2'><div className='circleContent2'></div></div>
        <div className='lineContainer' id='lineContainer2' ><div className='line2'></div></div>
        <div className='circle' id='circle3'><div className='circleContent3'></div></div>
        <div className='lineContainer' id='lineContainer3' ><div className='line3'></div></div>
        <div className='circle' id='circle4'><div className='circleContent4'></div></div>
        <div className='lineContainer' id='lineContainer4' ><div className='line4'></div></div>
        <div className='circle' id='circle5'><div className='circleContent5'></div></div>
        <div className='lineContainer' id='lineContainer5' ><div className='line5'></div></div>
        <div className='circle' id='circle6'><div className='circleContent6'></div></div>
        <div className='lineContainer' id='lineContainer6' ><div className='line6'></div></div>
      </div>
    </div>
  );
}

export default App;
