'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];

function CookieStore(minCustomers, maxCustomers, averageCookies, name) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.name = name;
  this.totalCookies = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];

  allStores.push(this);
}

  CookieStore.prototype.populateCustomers = function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(getRandomNumberCustomers(this.minCustomers, this.maxCustomers));
    }
  };
  
  CookieStore.prototype.calculateCookiesPerHour = function () {
    this.populateCustomers();
    for (var i in hours) {
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.averageCookies));
      this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    }
  };
    

  CookieStore.prototype.render = function () {
    this.calculateCookiesPerHour();

    var itemType = 'td';
    var rowValues = this.cookiesPerHour;

    var cookieTable = document.getElementById('cookieTable')
    var row = document.createElement('tr');
    addItemToRowWithText(row, itemType, this.name)

    for (var i in rowValues){
      var text = rowValues[i];
      addItemToRowWithText(row, itemType, text); 
    }
    addItemToRowWithText(row,itemType, this.totalCookies)
    cookieTable.appendChild(row);
  }


function addItemToRowWithText(row, itemType, text) {
  var item = document.createElement(itemType);
  item.textContent = text;
  row.appendChild(item);
}

function makeHeaderRow(hours) {
  var itemType = 'th';

  var cookieTable = document.getElementById('cookieTable');
  var row = document.createElement('tr');
  addItemToRowWithText(row, itemType, '');
  for (var i in hours) {
    addItemToRowWithText(row, itemType, hours[i]);
  }
  addItemToRowWithText(row, itemType, 'Daily Location Total');
  cookieTable.appendChild(row);
}

function getRandomNumberCustomers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
  
function renderAllStores() {
  var dailyTotal = 0;
  for (var i in allStores) {
    var store = allStores[i];
    store.render();
    dailyTotal = dailyTotal + store.totalCookies;
  } 
  var cookieTable = document.getElementById('cookieTable');
  var row = document.createElement('tr');
  addItemToRowWithText(row, 'td', 'Hourly Total');

  for (var j in hours) {
    var total = calculateTotalSalesByHour(j);
    addItemToRowWithText(row, 'td', total);
  }
  addItemToRowWithText(row, 'td', dailyTotal)
  cookieTable.appendChild(row);
}

function calculateTotalSalesByHour(index) {
  var total = 0;
  for (var i in allStores) {
    var store = allStores[i];
    total = total + store.cookiesPerHour[index];    
  }
  return total;
}

var pikePlaceMarket = new CookieStore(23, 65, 6.3, 'Pike Place Market');
var seaTac = new CookieStore(3, 24, 1.2, 'Sea-Tac');
var seaCenter = new CookieStore(11, 38, 3.7, 'Seattle Center');
var capHill = new CookieStore(20, 38, 2.3, 'Capitol Hill');
var alki = new CookieStore(2, 16, 4.6, 'Alki');


makeHeaderRow(hours);
renderAllStores();