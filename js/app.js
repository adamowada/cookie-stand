'use strict';

var cookieStoreLocations = [];

function CreateCookieStoreLocation(location, minCust, maxCust, avgSale, openAt, closeAt) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.openAt = openAt;
  this.closeAt = closeAt;
  cookieStoreLocations.push(this);
}

CreateCookieStoreLocation.prototype.predictSalesInHour = function() {
  var cookiesSold = [];
  var runningTotal = 0;
  for (var i = 0; i < (this.closeAt - this.openAt); i++) {
    let amount = Math.round(Math.round((Math.random()*(this.maxCust-this.minCust))+this.minCust)*this.avgSale);
    cookiesSold.push(`${amount} cookies`);
    runningTotal += amount;
  }
  cookiesSold.push(`${runningTotal} cookies`);
  return cookiesSold;
};

CreateCookieStoreLocation.prototype.renderDOM = function() {
  //Automate tr creation:
  //---------------------
  var tableLocation = document.getElementById('salesTable'); //tie to table salesTable
  var tableRow = document.createElement('tr'); // create tr
  tableRow.setAttribute('id', `${this.location}Location`); // set tr id='(this.location)Location'
  tableLocation.appendChild(tableRow); // appends tr to salesTable
  //---------------------
  var targetLocation = document.getElementById(`${this.location}Location`);
  var locationEl = document.createElement('td');
  locationEl.textContent = this.location;
  targetLocation.appendChild(locationEl);
  for (let i = 0; i < this.predictSalesInHour().length; i++) {
    var tableEl = document.createElement('td');
    tableEl.setAttribute('class', i); // sets class for all like hours for easy summing
    tableEl.textContent = this.predictSalesInHour()[i];
    targetLocation.appendChild(tableEl);
  }
};

function renderSalesData() {
  for (var i = 0; i < cookieStoreLocations.length; i++) {
    cookieStoreLocations[i].renderDOM();
  }
}

function renderHeader() {
  var businessHours = [''];
  for (var i = 6; i < 20; i++) {
    if (i === 12) {
      businessHours.push(`${i}pm:`);
    } else if (i > 12) {
      businessHours.push(`${i-12}pm:`);
    } else if (i < 12) {
      businessHours.push(`${i}am:`);
    }
  }
  businessHours.push('Daily Total:');
  //Automate tr creation:
  //---------------------
  var tableLocation = document.getElementById('salesTable'); //tie to table salesTable
  var tableRow = document.createElement('thead'); // create thead
  tableRow.setAttribute('id', 'tableHeader'); // set thead id='tableHeader'
  tableLocation.appendChild(tableRow); // appends thead to salesTable
  //---------------------
  var headerLocation = document.getElementById('tableHeader');
  for (var j = 0; j < businessHours.length; j++) {
    var headerElement = document.createElement('th');
    headerElement.textContent = businessHours[j];
    headerLocation.appendChild(headerElement);
  }
}

function renderFooter() {
  var hourlyTotals = ['Total'];
  for (var i = 0; i < 15; i++ ) {
    var sum = 0;
    for (var j = 0; j < document.getElementsByClassName(i).length; j++) {
      sum += Number(document.getElementsByClassName(i)[j].textContent.split(' ')[0]);
    }
    hourlyTotals.push(sum);
  }
  //Automate tr creation:
  //---------------------
  var tableLocation = document.getElementById('salesTable'); //tie to table salesTable
  var tableRow = document.createElement('tr'); // create tr
  tableRow.setAttribute('id', 'tableFooter'); // set tr id='tableFooter'
  tableLocation.appendChild(tableRow); // appends tr to salesTable
  //---------------------
  var footerLocation = document.getElementById('tableFooter');
  for (var k = 0; k < hourlyTotals.length; k++) {
    var footerElement = document.createElement('td');
    footerElement.textContent = `${hourlyTotals[k]} cookies`;
    footerLocation.appendChild(footerElement);
  }
}


new CreateCookieStoreLocation('Seattle', 23, 65, 6.3, 6, 20);
new CreateCookieStoreLocation('Tokyo', 3, 24, 1.2, 6, 20);
new CreateCookieStoreLocation('Dubai', 11, 38, 3.7, 6, 20);
new CreateCookieStoreLocation('Paris', 20, 38, 2.3, 6, 20);
new CreateCookieStoreLocation('Lima', 2, 16, 4.6, 6, 20);

//for new store functionality look at adding a slider for the opening/closing times. same family as checkbox

renderHeader();
renderSalesData();
renderFooter();



//Form to create new store:
var newStoreData = document.getElementById('newStore');
newStoreData.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  var location = event.target.newStoreName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgSale = event.target.avgSale.value;

  //form validation
  if (formValidation(location, minCust, maxCust, avgSale) === false) {
    return;
  }

  //remove displayed sales data trs and table footer tr
  for (let i = 0; i < cookieStoreLocations.length; i++){
    var tableRow = document.getElementById(cookieStoreLocations[i].location+'Location');
    tableRow.parentNode.removeChild(tableRow);
  }
  var tableRow = document.getElementById('tableFooter');
  tableRow.parentNode.removeChild(tableRow);
  //------------------------
  new CreateCookieStoreLocation(location, Number(minCust), Number(maxCust), Number(avgSale), 6, 20);
  renderSalesData(); // re-render the sales data with updated cookieStoreLocations
  renderFooter(); // re-render the footer with updated sales data
}

//form validation function
function formValidation(location, minCust, maxCust, avgSale) {
  if (location === '' || minCust === '' || maxCust === '' || avgSale === '') {
    alert('Please fill out all fields before submiting.');
    return false;
  }
  for (let i = 0; i < cookieStoreLocations.length; i++) {
    if (cookieStoreLocations[i].location === location) {
      alert(`You already have a store named ${location} please choose a new name.`);
      return false;
    }
  }
  if (Number.isInteger(Number(minCust)) === false || Number(minCust) < 1) {
    alert('For Minimum Customers please enter a whole number greater than 0.');
    return false;
  }
  if (Number.isInteger(Number(maxCust)) === false || Number(maxCust) < 1) {
    alert('For Maximum Customers please enter a whole number greater than 0.');
    return false;
  }
  if (Number(minCust) > Number(maxCust)) {
    alert('Please make sure Minimum Customers is less than or equal to Maximum Customers.');
    return false;
  }
  if (Number.isNaN(Number(avgSale)) === true || Number(avgSale) < 1) {
    alert('For Average Sale please enter a number that is greater than or equal to 1.');
    return false;
  }
  return true;
}
