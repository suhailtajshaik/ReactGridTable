import React, { Component } from 'react';

/*
  This component is React Stateless component, this purely depends on props passed to it.

  Sample Usage :
        <FieldCell name = {'someKey'} value = {'someValue'}/>

  Optional Props:
    if the field values is  double lined use the prop call multiLine = {true}

      <FieldCell name = {'someKey'} value = {'someValue'} multiLine = {true}/>

*/
const ModelCell = (props) => {
  return(
    <div style={{paddingTop:'20px',paddingBottom:'10px'}}>
        <div className='col-md-3' style={{textAlign:'right',color: props.lValue.disable ? 'lightgrey' : 'black' }}>
            <label style={{fontWeight:'400'}}>{props.lValue.label}</label>
        </div>
        <div className='col-md-7' style={{textAlign:'left',color: props.rValue.disable ? 'lightgrey' : 'black' }}>
            <label style={{fontWeight:'400'}}>{props.rValue.label}</label>
        </div>
        <div className='col-md-2'>
        </div>
    </div>
  )
}

module.exports = ModelCell
