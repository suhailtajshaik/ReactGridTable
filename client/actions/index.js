export const SELECT_CUSTOMER = 'SELECT_CUSTOMER';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_REQUESTED = 'FETCH_REQUESTED';
export const DATA_FETCHED = 'DATA_FETCHED';

export function selectCustomer(customer) {
  console.log('customer',customer);
  return {
    type: SELECT_CUSTOMER,
    customer
  };
}

export function updateWithData(payLoad){
    console.log("Fetch Completed with Data",payLoad);
  return {
    type: DATA_FETCHED,
    payLoad
  }
}

export function fetchRequested(){
  console.log("Fetch Request Initiated");
  return {
    type: FETCH_REQUESTED,
  }
}



export function requestData() {
  return dispatch => {
    dispatch(fetchRequested())
    fetch(`https://api.myjson.com/bins/1566qh`)
         .then(response => response.json())
         .then(json =>
           dispatch(updateWithData(json))
         )
    }
}
