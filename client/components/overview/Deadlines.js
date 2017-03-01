import React, { Component } from 'react';

import { Modal } from 'react-bootstrap'
import FieldCell from '../common/FieldCell'
import '../style.css'

import { Grid, Row, Col } from 'react-bootstrap';

class Deadlines extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }
  render() {
    var info = this.props.info
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
                  <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'18px',color:'grey'}}>DEADLINES</label>
              </div>
              <div className= 'col-md-2 col-sm-2 col-xs-2'>
                  <span className="glyphicon glyphicon-pencil" onClick={()=>{this.setState({showModal:true})}}/>
              </div>
          </div>
          <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
          <div style={{paddingTop:'10px',paddingBottom:'10px'}}>
          {
            Object.keys(info).map(function(key) {
              console.log("Each",info[key]);
              if(typeof(info[key]) == 'object'){
                return null
              }else {
                return  <FieldCell param={key} value={info[key]} key = {key}/>
              }

            })
          }
          </div>
      </div>
    );
  }
}

module.exports = Deadlines
