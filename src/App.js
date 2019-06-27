import React from 'react';
import './App.css';
import LessonOne from "./containers/lessonOne";
import Component from "./functional/component";

function App() {
  return (
    <div className="App">
    <LessonOne name="Sharanagouda"/>
    <Component name="Sharanagouda" price={2500}/>
    </div>
  );
}

export default App;
