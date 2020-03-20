import React from 'react';
import Home from './home';
import Rules from './rules';
import { HashRouter, Route} from 'react-router-dom';

class Router extends React.Component{

render(){
  return (
    <HashRouter>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Rules" component={Rules} />
    </div>
    </HashRouter>
  );
}
}

export default Router;