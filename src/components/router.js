import React from 'react';
import Home from './home';
import Configuration from './configuration';
import Start from './start';
import Petek from './game/pitkiot/petek';
import Player from './game/players/player';
import PlayerCards from './game/players/playerCards';
import { HashRouter, Route} from 'react-router-dom';

class Router extends React.Component{

render(){
  return (
    <HashRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Configuration" component={Configuration} />
        <Route exact path="/Start" component={Start} />
        <Route exact path="/Petek" component={Petek} />
        <Route exact path="/Player" component={Player} />
        <Route exact path="/PlayerCards" component={PlayerCards} />
    </div>
    </HashRouter>
  );
}
}

export default Router;