import React from 'react';
import Home from './home';
import Configuration from './configuration';
import Start from './start';
import { HashRouter, Route} from 'react-router-dom';

class Router extends React.Component{

render(){
  return (
    <HashRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Configuration" component={Configuration} />
        <Route exact path="/Start" component={Start} />
    </div>
    </HashRouter>
  );
}
}

export default Router;