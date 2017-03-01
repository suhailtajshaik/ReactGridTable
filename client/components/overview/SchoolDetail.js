import React, { Component } from 'react';

import { Modal } from 'react-bootstrap'
import FieldCell from '../common/FieldCell'
import '../style.css'

import { Grid, Row, Col, DropdownButton, MenuItem,Button } from 'react-bootstrap';


const ModelCell = (props) => {
  return(
    <div style={{paddingTop:'20px',paddingBottom:'10px'}}>
        <div className='col-md-4' style={{textAlign:'right',color: props.lValue.disable ? 'lightgrey' : 'black' }}>
            <label style={{fontWeight:'400'}}>{props.lValue.label} : </label>
        </div>
        <div className='col-md-7' style={{textAlign:'left',color: props.rValue.disable ? 'lightgrey' : 'black' }}>
            <label style={{fontWeight:'400'}}>{props.rValue.label}</label>
        </div>
        <div className='col-md-1'>
        </div>
    </div>
  )
}

class SchoolDetail extends Component {
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
            <div style={{textAlign:'center'}}>
              <div className = 'row center' style={{padding:'10px'}}>
                  <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
                      <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'18px',color:'grey'}}>PROJECT</label>
                  </div>
                  <div className= 'col-md-2 col-sm-2 col-xs-2'>
                      <span className="glyphicon glyphicon-remove-sign"  style= {{fontSize:20}} onClick={()=>{this.setState({showModal:false})}}/>
                  </div>
              </div>
              <div style={{height:'1.5px',background:'lightgrey',marginLeft:'10px',marginRight:'10px'}}/>
                  <div className ='row' style={{marginTop:'10'}}>
                      <ModelCell lValue = { {label: 'Project', disable:true} } rValue = { {label: '123455', disable:false} }/>
                      <ModelCell lValue = { {label: 'Project Name', disable:true} } rValue = { {label: '123455', disable:true} }/>
                      <ModelCell lValue = { {label: 'Year', disable:true} } rValue = { {label: '123455', disable:true} }/>
                      <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
                          <div className='col-md-4' style={{textAlign:'right',color:'lightgrey'}}>
                              <label style={{fontWeight:'400'}}>Enrollment</label>
                          </div>
                          <div className='col-md-7' style={{textAlign:'left',color:'black'}}>
                              <input/>
                          </div>
                          <div className='col-md-1'>
                          </div>
                      </div>
                      <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
                          <div className='col-md-4' style={{textAlign:'right',color:'lightgrey'}}>
                              <label style={{fontWeight:'400'}}>RegistrationType :</label>
                          </div>
                          <div className='col-md-7' style={{textAlign:'left',color:'black'}}>
                              <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                                  <MenuItem eventKey="1">Dropdown link</MenuItem>
                                  <MenuItem eventKey="2">Dropdown link</MenuItem>
                              </DropdownButton>
                          </div>
                          <div className='col-md-1'>
                          </div>
                      </div>
                      <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
                          <div className='col-md-4' style={{textAlign:'right',color:'lightgrey'}}>
                              <label style={{fontWeight:'400'}}>RegistrationType :</label>
                          </div>
                          <div className='col-md-7' style={{textAlign:'left',color:'black'}}>
                              <div className='row'>
                                <div className = 'col-md-12'>
                                    <input type='radio'/> <label style={{fontWeight:'400'}}>Enabled</label>
                                    <input type='radio' style={{marginLeft:'20px'}}/> <label style={{fontWeight:'400'}}>Disabled</label>
                                </div>
                              </div>
                          </div>
                          <div className='col-md-1'>
                          </div>
                      </div>
                      <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
                          <div className='col-md-4' style={{textAlign:'right',color:'lightgrey'}}>
                              <label style={{fontWeight:'400'}}>Enrollment</label>
                          </div>
                          <div className='col-md-7' style={{textAlign:'left',color:'black'}}>
                              <input/>
                          </div>
                          <div className='col-md-1'>
                          </div>
                      </div>
                      <ModelCell lValue = { {label: 'Delivery Season', disable:true} } rValue = { {label: '123455', disable:true} }/>
                      <ModelCell lValue = { {label: 'Sales Program', disable:true} } rValue = { {label: '123455', disable:true} }/>
                  </div>
            </div>
            <Modal.Footer>
                <div className = 'row'>
                    <div className='col-md-10'>

                    </div>
                    <div className='col-md-2'>
                        <Button>Save</Button>
                    </div>
                </div>
            </Modal.Footer>
          </Modal>
          <div className = 'row' style={{paddingTop:'10px'}}>
              <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
                  <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'18px',color:'grey'}}>SCHOOL</label>
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

module.exports = SchoolDetail
