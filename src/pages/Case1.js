import React from 'react';
import { Link } from 'react-router-dom';

function Case1() {
  return (
    <body>
      <Link to={'/Portfolio'}>Go Back</Link>
      <h1>TrackMyTasks</h1>
      <h2>Low Fidelity</h2>
    </body>
  );
}

export default Case1;
