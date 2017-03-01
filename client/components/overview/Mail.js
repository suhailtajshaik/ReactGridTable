import React, { Component } from 'react';

import * as AppActions from 'actions';
import { Modal } from 'react-bootstrap'
import FieldCell from '../common/FieldCell'
import '../style.css'

const SalesDetailHeader = () => {
  return (
    <div className='container-fluid' style={{marginTop:'10px'}}>
        <div className = 'row'>
            <div className = 'col-md-4 col-xs-4' style={{textAlign:'left'}}>
                <label style={{fontWeight:'400'}}>Store type : YearBook and Accessories</label>
            </div>
            <div className = 'col-md-3 col-xs-3' style={{textAlign:'left'}}>
                <label style={{fontWeight:'400'}}>Sales Tax : 8.25% included in the price</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'400'}}>Sales Start Date</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                  <label style={{fontWeight:'400'}}>8/01/2016</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'400'}}></label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'400'}}>Final Sales Date</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                  <label style={{fontWeight:'400'}}>12/01/2016</label>
            </div>
        </div>
    </div>
  )
}


const Headers = () => {
  return (
    <div className='container-fluid' style={{textAlign:'center',marginTop:'10px',background:'lightgrey',verticleAlign:'middle'}}>
        <div className = 'row'>
            <div className = 'col-md-4 col-xs-4' style={{textAlign:'left'}}>
                <label style={{fontWeight:'bold'}}>Product Name</label>
            </div>
            <div className = 'col-md-3 col-xs-3' style={{textAlign:'left'}}>
                <label style={{fontWeight:'bold'}}>Grade</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'bold'}}>Sales Price</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                  <label style={{fontWeight:'bold'}}>Tax</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'bold'}}>Final Price</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'bold'}}>Start</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                  <label style={{fontWeight:'bold'}}>End</label>
            </div>
        </div>
    </div>
  )
}

const EachRowDetail = (props) => {
  return (
    <div className='container-fluid' style={{textAlign:'center',verticleAlign:'middle',padding:'2px',marginLeft:'20px'}}>
        <div className = 'row'>
            <div className = 'col-md-4 col-xs-4' style={{textAlign:'left'}}>
                <label style={{fontWeight:'400'}}>Product Name</label>
            </div>
            <div className = 'col-md-3 col-xs-3' style={{textAlign:'left'}}>
                <label style={{fontWeight:'400'}}>Grade</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'400'}}>Sales Price</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                  <label style={{fontWeight:'400'}}>Tax</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'400'}}>Final Price</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                <label style={{fontWeight:'400'}}>Start</label>
            </div>
            <div className = 'col-md-1 col-xs-1'>
                  <label style={{fontWeight:'400'}}>End</label>
            </div>
        </div>
    </div>
  )
}

const CustomDetail = (props) => {
  return (
  <div style={{paddingBottom:'15px'}}>
    <div style={{display:'block',paddingTop:'10px',textAlign:'left',margin:0}}>
        <span className="glyphicon glyphicon-triangle-bottom" style={{fontSize:'10',color:'grey'}}></span>
        <label style={{marginLeft:'10px'}}>{props.headerTitle}</label>
    </div>
    <div style={{height:'1.5px',background:'lightgrey'}}/>
    <div style={{marginTop:'10px'}}>
        <EachRowDetail/>
        <EachRowDetail/>
        <EachRowDetail/>
        <EachRowDetail/>
        <EachRowDetail/>
    </div>
  </div>
  )
}


class Mail extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }
  render() {
    return (
      <div className='container-fluid' style={{background:'white'}}>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton onClick={()=>{this.setState({showModal:false})}}>
              <Modal.Title>Project Model</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>This is a Project Model</h4>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
          <div className = 'row' style={{paddingTop:'10px'}}>
              <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
                  <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'20px',color:'grey'}}>MAIL DETAILS</label>
              </div>
              <div className= 'col-md-2 col-sm-2 col-xs-2'>
                  <span className="glyphicon glyphicon-pencil" onClick={()=>{this.setState({showModal:true})}}/>
              </div>
          </div>
          <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
          <div className ='row' style={{paddingTop:'10px',paddingBottom:'20px'}}>
              <div className ='col-md-6'>
                    <FieldCell param={'someKey'} value={'someValue'}/>
                    <FieldCell param={'someKey'} value={'someValue someValue someValue someValue'}/>
                    <FieldCell param={'someKey'} value={'someValue'}/>
                    <FieldCell param={'someKey'} value={'someValue'}/>
              </div>
              <div className ='col-md-6'>
                    <FieldCell param={'someKey'} value={'someValue'}/>
                    <FieldCell param={'someKey'} value={'someValue someValue someValue someValue'}/>
                    <FieldCell param={'someKey'} value={'someValue'}/>
                    <FieldCell param={'someKey'} value={'someValue'}/>
              </div>
          </div>
      </div>
    );
  }
}

module.exports = Mail
