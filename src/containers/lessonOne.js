import React from 'react';
import './styles.css';

class LessonOne extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
          <div className="App">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
          </div>
        );
      }
    }

export default LessonOne;
