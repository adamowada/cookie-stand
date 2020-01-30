'use strict';

var seattleStore = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  openAt: 6,
  closeAt: 20,
  hoursOpen: function() {
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
  },
  predictedSales: function() {
    var cookiesSold = [];
    var runningTotal = 0;
    for (var i = 0; i < this.hoursOpen().length; i++) {
      let amount = Math.round(Math.round((Math.random()*(this.maxCust-this.minCust))+this.minCust)*this.avgSale);
      cookiesSold.push(`${this.hoursOpen()[i]}${amount} cookies`);
      runningTotal += amount;
    }
    cookiesSold.push(`Total: ${runningTotal} cookies`);
    return cookiesSold;
  },
};

var seattleLocation = document.getElementById('seattleLocation');

for (let i = 0; i < seattleStore.predictedSales().length; i++) {
  var seattleElement = document.createElement('li');
  seattleElement.textContent = seattleStore.predictedSales()[i];
  seattleLocation.appendChild(seattleElement);
}


var tokyoStore = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  openAt: 6,
  closeAt: 20,
  hoursOpen: function() {
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
  },
  predictedSales: function() {
    var cookiesSold = [];
    var runningTotal = 0;
    for (var i = 0; i < this.hoursOpen().length; i++) {
      let amount = Math.round(Math.round((Math.random()*(this.maxCust-this.minCust))+this.minCust)*this.avgSale);
      cookiesSold.push(`${this.hoursOpen()[i]}${amount} cookies`);
      runningTotal += amount;
    }
    cookiesSold.push(`Total: ${runningTotal} cookies`);
    return cookiesSold;
  },
};

var tokyoLocation = document.getElementById('tokyoLocation');

for (let i = 0; i < tokyoStore.predictedSales().length; i++) {
  var tokyoElement = document.createElement('li');
  tokyoElement.textContent = tokyoStore.predictedSales()[i];
  tokyoLocation.appendChild(tokyoElement);
}


var dubaiStore = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  openAt: 6,
  closeAt: 20,
  hoursOpen: function() {
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
  },
  predictedSales: function() {
    var cookiesSold = [];
    var runningTotal = 0;
    for (var i = 0; i < this.hoursOpen().length; i++) {
      let amount = Math.round(Math.round((Math.random()*(this.maxCust-this.minCust))+this.minCust)*this.avgSale);
      cookiesSold.push(`${this.hoursOpen()[i]}${amount} cookies`);
      runningTotal += amount;
    }
    cookiesSold.push(`Total: ${runningTotal} cookies`);
    return cookiesSold;
  },
};

var dubaiLocation = document.getElementById('dubaiLocation');

for (let i = 0; i < dubaiStore.predictedSales().length; i++) {
  var dubaiElement = document.createElement('li');
  dubaiElement.textContent = dubaiStore.predictedSales()[i];
  dubaiLocation.appendChild(dubaiElement);
}


var parisStore = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  openAt: 6,
  closeAt: 20,
  hoursOpen: function() {
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
  },
  predictedSales: function() {
    var cookiesSold = [];
    var runningTotal = 0;
    for (var i = 0; i < this.hoursOpen().length; i++) {
      let amount = Math.round(Math.round((Math.random()*(this.maxCust-this.minCust))+this.minCust)*this.avgSale);
      cookiesSold.push(`${this.hoursOpen()[i]}${amount} cookies`);
      runningTotal += amount;
    }
    cookiesSold.push(`Total: ${runningTotal} cookies`);
    return cookiesSold;
  },
};

var parisLocation = document.getElementById('parisLocation');

for (let i = 0; i < parisStore.predictedSales().length; i++) {
  var parisElement = document.createElement('li');
  parisElement.textContent = parisStore.predictedSales()[i];
  parisLocation.appendChild(parisElement);
}


var limaStore = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  openAt: 6,
  closeAt: 20,
  hoursOpen: function() {
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
  },
  predictedSales: function() {
    var cookiesSold = [];
    var runningTotal = 0;
    for (var i = 0; i < this.hoursOpen().length; i++) {
      let amount = Math.round(Math.round((Math.random()*(this.maxCust-this.minCust))+this.minCust)*this.avgSale);
      cookiesSold.push(`${this.hoursOpen()[i]}${amount} cookies`);
      runningTotal += amount;
    }
    cookiesSold.push(`Total: ${runningTotal} cookies`);
    return cookiesSold;
  },
};

var limaLocation = document.getElementById('limaLocation');

for (let i = 0; i < limaStore.predictedSales().length; i++) {
  var limaElement = document.createElement('li');
  limaElement.textContent = limaStore.predictedSales()[i];
  limaLocation.appendChild(limaElement);
}
