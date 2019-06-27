import React from 'react';
import './styles.css';

class LessonOne extends React.Component{


    render(){
        return (
          <div>
              <p>
               {this.props.name}
              </p>
<button className="buttonStyle">button one</button>
          </div>
        );
      }
    }

export default LessonOne;
