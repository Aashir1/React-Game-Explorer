import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
let DateList = (props) => {
    return (
      <DropDownMenu maxHeight={300} value={props.value} onChange={props._onChange}>
      {
          props.listItems.map((eachItem, i)=>{
              return(
                <MenuItem value={eachItem} key={i} primaryText={eachItem} />
              )
          })
      }
      </DropDownMenu>
    );
  }

export default DateList;