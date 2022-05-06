import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import prototype1 from '../pics/tmtprototype.jpg';
import prototype2 from '../pics/tmtprototype2.png';
import firstiter from '../pics/tmtfirstproto.png';
import mp from '../pics/tmtmp.png';
import timer from '../pics/tmttimer.png';
import logs from '../pics/tmtlog.png';
import faq from '../pics/tmtfaq.png';

function Case1() {
  return (
    <body>
      <Link to={'/'}>Go Back</Link>
      <h1>TrackMyTasks</h1>
      <h2>Low Fidelity</h2>
      <h3>Prototype 1</h3>
      <img className="appImg" src={prototype1}></img>
      <h3>Prototype 2</h3>
      <img className="appImg" src={prototype2}></img>
      <h2>High Fidelity Prototype</h2>
      <img className="appImg" src={firstiter}></img>
      <h2>Main Page</h2>
      <img className="appImg" src={mp}></img>
      <h2>timer</h2>
      <img className="appImg" src={timer}></img>
      <h2>logs</h2>
      <img className="appImg" src={logs}></img>
      <h2>faq</h2>
      <img className="appImg" src={faq}></img>
    </body>
  );
}

export default Case1;
