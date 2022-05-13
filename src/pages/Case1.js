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

      <div>
        <h2>Background</h2>
        <p>
          TrackMyTasks is a web application that allows a user to utilize their
          time more efficiently by being able to write down the tasks that the
          user would like to finish. While the user is doing their tasks, the
          application allows the user to keep track of how long they have done
          the task for a later analysis.
        </p>
      </div>

      <div>
        <h2>Problem Statement</h2>
        <p>
          I have had many occasions where I would be going about my day, and in
          the middle feel like I have forgotten something. Then towards the end
          of the day, I would all of a sudden have a rude awakening to the thing
          that I forgot about. Being around other college students, I have
          noticed that they also have similar tendencies to forgetting about
          certain things in the day. After some contemplation, having written
          down what I need to do throughout the day would have lessened the
          chance of forgetting a possible important meeting or assignment to
          finish.
        </p>
      </div>

      <div>
        <h2>Low Fidelity</h2>
        <p>
          We created our low fidelity models with paper and markers. Using this
          method we were able to test out the application with a physical
          prototype instead of conceptualization. We were able to learn about
          certain areas that we had forgotten about and even areas that we
          didn't need to include.
        </p>
        <h3>Prototype 1</h3>
        <img className="appImg" src={prototype1}></img>
        <h3>Prototype 2</h3>
        <img className="appImg" src={prototype2}></img>
      </div>

      <div>
        <h2>High Fidelity Prototype</h2>
        <p>
          After testing with our low fidelity prototype, we then proceeded to
          create a higher fidelity model on figma. We did our research on what
          color scheme to use by interviewing more people.
        </p>
        <img className="appImg" src={firstiter}></img>
      </div>

      <div>
        <h2>Main Page</h2>
        <p>
          We learned that a white to blue gradient had a calming effect on the
          interviewing group which could possibly lead to more focused behavior.
        </p>
        <img className="appImg" src={mp}></img>
      </div>

      <div>
        <h2>Timer</h2>
        <p>
          We added the timer feature to allow the user to focus on a task for a
          certain amount of time set by the user. We learned that most people
          found it useful and helpful to be able to keep track of time when we
          showed this idea to the group of people that helped us test our app.
        </p>
        <img className="appImg" src={timer}></img>
      </div>

      <div>
        <h2>Logs</h2>
        <p>
          With this page, this allows the ability for the user to look back onto
          their tasks done throughout the day.
        </p>
        <img className="appImg" src={logs}></img>
      </div>

      <div>
        <h2>FAQ</h2>
        <p>
          We added this frequently asked question page to lessen the confusion
          about the usage of our app. We felt that it was important for the user
          to be able to quickly understand the functionality of our app along
          with what everything does.
        </p>
        <img className="appImg" src={faq}></img>
      </div>
    </body>
  );
}

export default Case1;
