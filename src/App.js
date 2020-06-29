import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './screens/main';
import Experience from './screens/experience';
import ExperienceDetail from './screens/experienceDetail';

import { AnimatedSwitch } from 'react-router-transition';
import './App.css';
import Clue1 from './screens/clue1';
import Clue1Detail from './screens/clue1detail';
import Test from './screens/test';
import clue2 from './screens/clue2';
import clue2detail from './screens/clue2detail';


class App extends Component {

  render() {
    return (
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Main} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/experience/1" component={ExperienceDetail} />
          <Route exact path="/experience/1/clue1" component={Clue1} />
          <Route exact path="/experience/1/clue1/detail" component={Clue1Detail} />
          <Route exact path="/experience/1/clue2" component={clue2} />
          <Route exact path="/experience/1/clue2/detail" component={clue2detail} />
          <Route exact path="/test" component={Test} />

        </AnimatedSwitch>
      </Router>

    );
  }
}

export default App;
