import React, { Component } from 'react';

/*
  This component is React Stateless component, this purely depends on props passed to it.

  Sample Usage :
        <FieldCell name = {'someKey'} value = {'someValue'}/>

  Optional Props:
    if the field values is  double lined use the prop call multiLine = {true}

      <FieldCell name = {'someKey'} value = {'someValue'} multiLine = {true}/>

*/
const FieldCell = (props) => {
  return(
    <div className = 'row' style={{margin:2}}>
        <div className = 'col-md-6 col-sm-6 col-xs-6' style={{textAlign:'right'}}>
            <label style={{fontWeight:'400'}}>{props.param} :</label>
        </div>
        <div className = 'col-md-6 col-sm-6 col-xs-6' style={{textAlign:'left',overflowWrap:'break-word'}}>
            <label style={{fontWeight:'400'}}>{props.value}</label>
        </div>
    </div>
  )
}

module.exports = FieldCell
