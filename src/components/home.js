import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{

render(){

    return (
        <div>
            <Link to="/configuration">start new game</Link><br></br>
            <Link to="/Start">join an existing game</Link>
        </div>
        );
    }
}
export default Home;