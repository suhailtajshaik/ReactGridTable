export const SELECT_CUSTOMER = 'SELECT_CUSTOMER';

export function selectCustomer(customer) {
  console.log('customer',customer);
  return {
    type: SELECT_CUSTOMER,
    customer
  };
}
//
// export function deleteTransaction(id) {
//   return {
//     type: DELETE_TRANSACTION,
//     id
//   };
// }
//
// export function requestSum(data) {
//   return {
//     type: REQUEST_SUM,
//     data
//   };
// }
//
// export function addTransaction(transaction) {
//   return (dispatch, getState) => {
//     const addedResult = dispatch(createTransaction(transaction));
//     dispatch(requestSum(getState().transactions.transactions));
//     return addedResult;
//   };
// }
