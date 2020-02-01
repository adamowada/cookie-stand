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

CreateCookieStoreLocation.prototype.hoursOpen = function() {
  var businessHours = [];
  for (var i = this.openAt; i < this.closeAt; i++) {
    if (i === 12) {
      businessHours.push(`${i}pm: `);
    } else if (i > 12) {
      businessHours.push(`${i-12}pm: `);
    } else if (i < 12) {
      businessHours.push(`${i}am: `);
    }
  }
  return businessHours;
};

CreateCookieStoreLocation.prototype.predictSalesInHour = function() {
  var cookiesSold = [];
  //var runningTotal = 0;
  for (var i = 0; i < this.hoursOpen().length; i++) {
    let amount = Math.round(Math.round((Math.random()*(this.maxCust-this.minCust))+this.minCust)*this.avgSale);
    cookiesSold.push(`${this.hoursOpen()[i]}${amount} cookies`);
    //runningTotal += amount;
  }
  //cookiesSold.push(`Total: ${runningTotal} cookies`);
  return cookiesSold;
};

CreateCookieStoreLocation.prototype.renderDOM = function() {
  var targetLocation = document.getElementById(`${this.location.toLowerCase()}Location`); //TODO make more general instead of relying on html hooks
  for (let i = 0; i < this.predictSalesInHour().length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = this.predictSalesInHour()[i];
    targetLocation.appendChild(liEl);
  }
};

function renderPage() {
  for (var i = 0; i < cookieStoreLocations.length; i++) {
    cookieStoreLocations[i].renderDOM();
  }
}

new CreateCookieStoreLocation('Seattle', 23, 65, 6.3, 6, 20);
new CreateCookieStoreLocation('Tokyo', 3, 24, 1.2, 6, 20);
new CreateCookieStoreLocation('Dubai', 11, 38, 3.7, 6, 20);
new CreateCookieStoreLocation('Paris', 20, 38, 2.3, 6, 20);
new CreateCookieStoreLocation('Lima', 2, 16, 4.6, 6, 20);

renderPage();
