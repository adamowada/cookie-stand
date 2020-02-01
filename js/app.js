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
  var targetLocation = document.getElementById(`${this.location.toLowerCase()}Location`); //TODO make more general instead of relying on html hooks
  var locationEl = document.createElement('td');
  locationEl.textContent = this.location;
  targetLocation.appendChild(locationEl);
  for (let i = 0; i < this.predictSalesInHour().length; i++) {
    var tableEl = document.createElement('td');
    tableEl.setAttribute('class', i); // sets class for all like times for easy summing
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

renderHeader();
renderSalesData();
renderFooter();
