import React, { Component } from 'react';
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');
const ReactDataGrid = require('react-data-grid');
const { Row } = ReactDataGrid;
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

class OverviewHome extends Component {
  constructor(props){
    super(props)
    this.gridRef = null
    this._columns = [
      {
        key: 'name',
        name: 'Name',
        filterable: true,
        resizable: true
      },
      {
        key: 'type',
        name: 'Type',
        filterable: true,
        sortable: true,
        resizable: true
      },
      {
        key: 'city',
        name: 'City',
        filterable: true,
        sortable: true,
        resizable: true
      },
      {
        key: 'state',
        name: 'State',
        filterable: true,
        sortable: true,
        resizable: true
      },
      {
        key: 'sites',
        name: 'Sites',
        filterable: true,
        sortable: true,
        resizable: true
      }
    ];
    this.state = {
      rows: this.createRows(1000), filters: {}, sortColumn: null, sortDirection: null
    }
  }

  rowGetter = (rowIdx) => {
    const rows = this.getRows()
    return rows[rowIdx];
  }

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  }

  getRows = () => {
    return Selectors.getRows(this.state);
  }

  getSize = () => {
    return this.getRows().length;
  }

  onClearFilters = () => {
    this.setState({ filters: {} });
  }

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  }

  getRandomDate = (start, end) => {
     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
   }


  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        name: 'some Name',
        type: i,
        sites: 'Task ' + i,
        city: Math.min(100, Math.round(Math.random() * 110)),
        state: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)]
      });
    }
    return rows;
  }

  componentDidMount = () =>{
    console.log("Grid Refer",this.gridRef);
    this.gridRef.onToggleFilter()
  }

  render() {
    // console.log("Props to OverviewHome",this.props);
    return (
      <div className ='container-fluid'>
        <div className = 'row'>
              <div className = 'col-md-4' style={{height:'100VH'}}>
                <ReactDataGrid
                  ref = {(gridRef)=>{if(gridRef !=null){
                    this.gridRef = gridRef
                  }}}
                  style={{height:'100VH'}}
                  onGridSort={this.handleGridSort}
                  enableCellSelect={true}
                  columns={this._columns}
                  rowGetter={this.rowGetter}
                  rowsCount={this.getSize()}
                  minHeight={'900'}
                  enableFilter ={true}
                  //toolbar={<Toolbar enableFilter={true}/>}
                  onAddFilter={this.handleFilterChange}
                  onClearFilters={this.onClearFilters}
                  rowRenderer={<RowRenderer selectCustomer = {this.props.selectCustomer} />}/>
              </div>
              <div className = 'col-md-4' style={{background:'tan'}}>
                  <div onClick ={()=>{this.props.requestData()}}>
                      <label>This should be center </label>
                  </div>
              </div>
              <div className = 'col-md-4' style={{backgroundColor:'coral',height:'100VH'}}>

              </div>
        </div>
      </div>
    )
  }
}

class RowRenderer extends Component {

  setScrollLeft = (scrollBy) => {
   // if you want freeze columns to work, you need to make sure you implement this as apass through
   this.refs.row.setScrollLeft(scrollBy);
 }

 render(){
  //  console.log("Props to RowRenderer",this.props);
   return (
     <div onClick ={()=>{this.props.selectCustomer(this.props)}}>
       <Row ref="row" {...this.props}/>
    </div>
   )
 }
}

module.exports = OverviewHome
