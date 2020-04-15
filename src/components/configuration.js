import React from 'react';
import '../styles/configuration.css'
class Rules extends React.Component{



change(event){
//alert(event.target.value)
}

render(){
  return (
    
    <div>
      {/* <input onChange={this.change}>
      </input> */}

      <div class="dropdown">
        <button class="dropbtn">DropdownX</button>
        <div class="dropdown-content">
          <a href="#">i'm using 1 phone</a><br></br>
          <a href="#">we each have a phone</a><br></br>
        </div>
      </div><br></br>
        my rules<br></br>
        is skipping allowd
    </div>
  );
}}

export default Rules;