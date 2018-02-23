import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


let SearchButton =(props) =>{
        return (
            <div>
                <RaisedButton disabled={props.disable} label={props.btnText} primary={true} onClick={props._onClick} style={props.styles}/>
            </div>
      )
}
export default SearchButton;