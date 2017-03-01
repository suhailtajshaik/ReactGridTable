import React, { Component } from 'react';

import * as AppActions from 'actions';
import { Modal } from 'react-bootstrap'
import FieldCell from '../common/FieldCell'
import '../style.css'
import { Grid, Row, Col } from 'react-bootstrap';

const conts = [
  {
    name : 'Mr Jhon Doe',
    designation : 'Sales Representative',
    email : 'John.doe@email.com',
    number: '987-654-3210'
  },
  {
    name : 'Mr Jhon Doe',
    designation : 'Sales Representative',
    email : 'John.doe@email.com',
    number: '987-654-3210'
  },
  {
    name : 'Mr Jhon Doe',
    designation : 'Sales Representative',
    email : 'John.doe@email.com',
    number: '987-654-3210'
  },
  {
    name : 'Mr Jhon Doe',
    designation : 'Sales Representative',
    email : 'John.doe@email.com',
    number: '987-654-3210'
  }
]

const ContactCard = (props) =>{
  console.log("props to Each ContactCard",props);
  return (
      <div className='text-left row' style={{padding:10}}>
          <div className = 'col-md-2 col-lg-2'>
            <div className = 'center-block'>
                <div className = 'col-md-4'>
                    <span className="glyphicon glyphicon-user" style={{fontSize:20}}/>
                </div>
            </div>
          </div>
          <div className = 'col-md-10 col-lg-10'>
              <label style={{fontWeight:'400'}}>{props.contacInfo.name}</label>
              <label style={{fontWeight:'400'}}>{props.contacInfo.desg}</label>
              <label style={{fontWeight:'400'}}>{props.contacInfo.email}</label>
              <label style={{fontWeight:'400'}}>{props.contacInfo.phone}</label>
          </div>
      </div>
  )
}

class KeyContacts extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }
  render() {
    console.log("props to KeyContacts is",this.props.info);
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
                  <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'18px',color:'grey'}}>KEY CONTACTS</label>
              </div>
              <div className= 'col-md-2 col-sm-2 col-xs-2'>
                  <span className="glyphicon glyphicon-pencil" onClick={()=>{this.setState({showModal:true})}}/>
              </div>
          </div>
          <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
          {
            this.props.info.map((item,info)=>{
                return <ContactCard contacInfo = {item}/>
            })
          }
      </div>
    );
  }
}

module.exports = KeyContacts
