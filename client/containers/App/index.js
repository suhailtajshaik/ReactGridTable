import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



import * as AppActions from 'actions';
console.log("**",AppActions);
import './style.css';
import { Grid, Row, Col } from 'react-bootstrap';
const OverviewHome = require('../OverviewHome')
const Header = require('../../components/common/Header')
const Tabs = require('../../components/common/Tabs')
class App extends Component {

  render() {

    return (
        <div className='App'>
            <div className='row'>
                <OverviewHome projectInfo = {this.props.project} selectCustomer = {this.props.actions.selectCustomer} requestData = {this.props.actions.requestData}/>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      project : state.projectDetails.project
      //Component State
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
