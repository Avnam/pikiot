import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


class Rules extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      age: '',
      name: 'hai',
    }
  }
change(event){
//alert(event.target.value)
}

handleChange = (event) => {
  this.setState({
    age: event.target.value,
    name: event.target.value,
  });
};

render(){
  return (
      <FormControl className={'formControl'}>
      <InputLabel htmlFor="age-native-helper">Name</InputLabel>
      <NativeSelect
        value={this.state.age}
        onChange={this.handleChange}
        inputProps={{
          name: 'name',
          id: 'age-native-helper',
        }}
      >
        <option aria-label="None" value="" />
        {
          this.props.options && this.props.options.map(function(x){
            return <option value={x.id}>{x.value}</option>
          })
        }
      </NativeSelect>
      <FormHelperText>{this.props.underlineText}</FormHelperText>
    </FormControl>
  );
}}

export default Rules;