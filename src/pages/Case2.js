import React from 'react';
import { Link } from 'react-router-dom';
import mp from '../pics/pnmp.png';
import calendar from '../pics/pncalendar.png';
import nj from '../pics/pnnj.png';
import np from '../pics/pnnp.png';
import wf from '../pics/pnwf.png';

function Case2() {
  return (
    <body>
      <Link to={'/'}>Go Back</Link>
      <h1>PuffNotes</h1>
      <h2>WireFrames</h2>
      <img className="appImg" src={wf}></img>
      <h2>Main Page Design</h2>
      <img className="appImg" src={mp}></img>
      <h2>Connect to Database</h2>
      <img className="appImg" src={nj}></img>
      <img className="appImg" src={np}></img>
      <h2>Calendar</h2>
      <img className="appImg" src={calendar}></img>
    </body>
  );
}

export default Case2;
