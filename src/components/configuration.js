import React from 'react';
import Rules from './compTypes/rules';

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
    value: "yeah right",
    id:0
  },
  {
    value: "multi",
    id:1
  }
]
render(){
  return (
    <div>
       <Rules 
        underlineText="choose a game type"
        options={this.gameTypeOptions}
       >
       </Rules>
       <br/>
       <Rules underlineText="skip options"
        options={this.skipOptions}
        ></Rules>
    </div>
  );
}}

export default Configuration;