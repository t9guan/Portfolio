import './App.css';
import logo1 from './pics/TrackMyTasks.png';
import logo2 from './pics/PuffNotes.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <body>
      <div>
        <Link to={'/Case1'}>Case1</Link>
        <h1>TrackMyTasks</h1>
        <p>
          This is a web application that my team and I created for Cogs 120 to
          help the user focus more on what they are currently doing. It is
          intended as a to-do app with additional features to help the user stay
          focused and on task for the duration of their work session.
        </p>
        <img className="appImg" src={logo1}></img>
      </div>
      <div>
        <Link to={'/Case2'}>Case2</Link>
        <h1>Puff Notes</h1>
        <p>
          This is a web application that my team and I created for Cse 110. This
          app is our version of a bullet journal. The main purpose is to help
          the user store quick thoughts and notes in this app, so that they can
          refer back to it later on in the day.
        </p>
        <img className="appImg" src={logo2}></img>
      </div>
    </body>
  );
}

export default App;
