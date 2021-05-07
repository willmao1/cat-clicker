import React from 'react';
import cursor from './cursor.png';

// import './Cursor.css';

export default class Cursor extends React.Component {
  render() {
        return (<div className="cursors" >
            <img src={cursor}></img>
    </div>)
  }
}

