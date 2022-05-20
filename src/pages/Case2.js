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

      <div>
        <h2>Background</h2>
        <p>
          Puff Notes is a web application of a bullet journal with the Power
          Puff Girl color aesthetic. The application allows users to write quick
          notes and stores the data into a database. This allows users to be
          able to refer back to their quick notes later on in the day to
          remember their notes and thoughts.
        </p>
      </div>

      <div>
        <h2>Problem Statement</h2>
        <p>
          College students need a way to quickly jot down notes and thoughts
          that they have throughout the day. There have been times where many
          quick thoughts and important notes are forgotten throughout the day.
          This way their quick thoughts and important notes can be remembered
          and referred to later.
        </p>
      </div>

      <div>
        <h2>WireFrames</h2>
        <p>
          We created a low fidelity model wireframe to map out our thoughts and
          ideas for designs on the app. We struggled with conceptualizing a
          design on how we group our tabs in our wireframes. Later on, we asked
          a few college students for their opinions of how we grouped our tasks
          and learned that there were more that preferred the sidebar options
          saying that it looked more aesthetically pleasing.
        </p>
        <img className="appImg" src={wf}></img>
      </div>

      <div>
        <h2>Main Page Design</h2>
        <p>
          After finalizing our low fidelity wireframe design, we started to move
          onto higher fidelity models on figma.
        </p>
        <img className="appImg" src={mp}></img>
      </div>

      <div>
        <h2>Connect to Database</h2>
        <p>
          Towards the end of production, we implemented the backend into the
          application, connecting it to the front end. The database we used was
          mongoDB to store the user data along with handling our creating new
          account situation.
        </p>
        <img className="appImg" src={nj}></img>
        <img className="appImg" src={np}></img>
      </div>

      <div>
        <h2>Calendar</h2>
        <p>
          We added the calendar feature to neatly display the user's notes and
          journals. This way the user has a way to view all of their important
          notes and journals without having to look for it.
        </p>
        <img className="appImg" src={calendar}></img>
      </div>
    </body>
  );
}

export default Case2;
