/* Your code goes here */
var customerName = 'bob';

function upperCaseCustomerName () {
  customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer () {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'random';
function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'bob';
}

let favoriteCustomer = 'me';
function attemptTwoFavoriteCustomers () {
  let favoriteCustomer = 'you';
}
