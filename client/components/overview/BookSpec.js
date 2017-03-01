import React, { Component } from 'react';

import { Modal } from 'react-bootstrap'
import FieldCell from '../common/FieldCell'
import '../style.css'

import { Grid, Row, Col } from 'react-bootstrap';

const Yearbook = () => {
  return(
    <div>
    <div className = 'row' style={{paddingTop:'5px',marginBottom:'5px'}}>
        <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
            <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'15px',color:'grey'}}>BOOK SPECIFICATION</label>
        </div>
    </div>
        <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
    </div>
  )
}

const Cover = () => {
  return(
    <div>
    <div className = 'row' style={{paddingTop:'5px',marginBottom:'5px'}}>
        <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
            <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'15px',color:'grey'}}>COVER</label>
        </div>
    </div>
        <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue someValue someValue someValue someValue'}/>
    </div>
  )
}

const EndSheet = () => {
  return(
    <div>
    <div className = 'row' style={{paddingTop:'5px',marginBottom:'5px'}}>
        <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
            <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'15px',color:'grey'}}>ENDSHEEET</label>
        </div>
    </div>
        <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
    </div>
  )
}

const EndBookBack = () => {
  return(
    <div>
    <div className = 'row' style={{paddingTop:'5px',marginBottom:'5px'}}>
        <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
            <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'15px',color:'grey'}}>ENDSHEEET - BK</label>
        </div>
    </div>
        <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
    </div>
  )
}

const AdditionalItems = () => {
  return(
    <div>
    <div className = 'row' style={{paddingTop:'5px',marginBottom:'5px'}}>
        <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
            <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'15px',color:'grey'}}>ADDITIONAL ITEMS</label>
        </div>
    </div>
        <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
        <FieldCell param={'someKey'} value={'someValue'}/>
    </div>
  )
}


class BookSpec extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }
  render() {
    var info = this.props.info
    console.log("props to BookSpec",this.props);
    return (
      <div className='container-fluid' style={{background:'white'}}>
            <Modal show={this.state.showModal} onHide={this.close}>
              <div style={{textAlign:'center'}}>
                <div className = 'row center' style={{padding:'10px'}}>
                    <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
                        <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'18px',color:'grey'}}>BOOK SPECIFICATION</label>
                    </div>
                    <div className= 'col-md-2 col-sm-2 col-xs-2'>
                        <span className="glyphicon glyphicon-remove-sign"  style= {{fontSize:20}} onClick={()=>{this.setState({showModal:false})}}/>
                    </div>
                </div>
                <div style={{height:'1.5px',background:'lightgrey',marginLeft:'10px',marginRight:'10px'}}/>
                    <div className ='row' style={{marginTop:'10'}}>
                        <div className='col-md-1'/>
                        <div className='col-md-10' style={{paddingBottom:'15px'}}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                          <div>
                                              <Yearbook/>
                                              <AdditionalItems/>
                                          </div>
                                    </div>
                                    <div className='col-md-6'>
                                              <Cover/>
                                              <EndSheet/>
                                              <EndBookBack/>
                                    </div>
                                </div>
                        </div>
                        <div className='col-md-1'/>
                    </div>
              </div>
          </Modal>
          <div className = 'row' style={{paddingTop:'10px'}}>
              <div className= 'col-md-10 col-sm-10 col-xs-10' style={{textAlign:'left'}}>
                  <label style={{fontWeight:'400',fontFamily:'calibri',fontSize:'18px',color:'grey'}}>BOOK SPECIFICATION</label>
              </div>
              <div className= 'col-md-2 col-sm-2 col-xs-2'>
                  <span className="glyphicon glyphicon-pencil" onClick={()=>{this.setState({showModal:true})}}/>
              </div>
          </div>
          <div style={{height:'1.5px',background:'lightgrey',width:'100%'}}/>
          <div style={{paddingTop:'10px',paddingBottom:'10px'}}>
            {
              Object.keys(info).map(function(key) {
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

module.exports = BookSpec
