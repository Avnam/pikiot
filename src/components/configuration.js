import React from 'react';
import Config from './compTypes/config';

class Configuration extends React.Component{
gameTypeOptions = [
  {
    value: "single",
    id:0
  },
  {
    value: "multi",
    id:1
  }
]

skipOptions = [
  {
    value: "yeah rights",
    id:0
  },
  {
    value: "multi",
    id:1
  }
]
render(){
  // debugger;
  return (
    <div>
       <Config 
        title="game type"
        underlineText="choose a game type"
        options={this.gameTypeOptions}
       >
       </Config>
       <br/>
       <Config 
        title="name"
        underlineText="skip options"
        options={this.skipOptions}
        ></Config>
    </div>
  );
}}

export default Configuration;