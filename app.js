'use strict';
// The below is for 1st and Pike

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

// var averageCookies = 6.3;
// var cookiesSold = 657;
// var averageCustomers = [];
// var testArray = [];

//constructors always start with capital. Only thing usually
//maxcustomers = ...Parameter helps to differentiate

function CookieStore(minCustomers, maxCustomersParameter, averageCookies) {

    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomersParameter;
    this.averageCookies = averageCookies;
    this.totalCookies = 0;
    this.customersPerHour = [];
    this.cookiesPerHour = []; 
}

// CMD + D to multi select

CookieStore.prototype.populateCustomers = function () {     
    for (var i = 0; i < 14; i++) {
       this.customersPerHour.push (randomCustomers (this.minCustomers, this.maxCustomers)) //populatecustomers is pushing the array of 14 numbers up into customers per hour []
   }
}

CookieStore.prototype.calculateCookiesPerHour = function () {
    this.populateCustomers ();
    for (var i = 0; i < 14; i++) {
        this.cookiesPerHour.push (Math.ceil (this.customersPerHour[i] * this.averageCookies));
        this.totalCookies = this.totalCookies + this.cookiesPerHour [i]; 
    }
}

// ulEl (unordered list, Element)

CookieStore.prototype.render = function () {
    this.calculateCookiesPerHour();
    var ulEl = document.getElementById ('firstPike') 

for (var i = 0; i <14; i++) {
    var liEl = document.createElement ('li')
    liEl.textContent = hours[i] + ': ' + this.cookiesPerHour [i] + ' cookies.' // This says that i moves together with hours and cookies as one unit.
    ulEl.append (liEl) 
    }
};

// The below creates tables header and content
hours.prototype.render = function {

// create tr
var trEl = document.createElement('tr');

// create td
var tdEl = document.createElement('td');
// give td content (Name for an individual cat)
tdEl.textContent = this.minCookies;
// append the td to the tr
trEl.appendChild(tdEl);

// create td
tdEl = document.createElement('td');
// give td content (Color for an individual cat)
tdEl.textContent = this.maxCookies;
// append the td to the tr
trEl.appendChild(tdEl);

// create td
tdEl = document.createElement('td');
// give td content (Tail Size for an individual cat)
tdEl.textContent = this.customersPerHour;
// append the td to the tr
trEl.appendChild(tdEl);

// append the tr to the table
cookieTable.appendChild(trEl);
}

function makeHeaderRow() {
    var trEl = document.createElement('tr');  

    var thEl = document.createElement('th');  
    thEl.textContent = 'Minimum Customers per Hour';  
    trEl.appendChild(thEl);  
    thEl = document.createElemenet('th');  
    thEl.textContent = 'Maximum Customers per Hour';  
    trEl.appendChild(thEl);   
    thEl = document.createElement('th');   
    thEl.textContent = 'Total Customers per Hour';   
    trEl.appendChild(thEl);    
    cookieTable.appendChild(trEl);   
}  




  function randomCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function renderallCookiesArray() {
    for (var i in allCookiesArray) {
        allCookiesArray[i].render();
    }
}

makeHeaderRow();
renderallCookiesArray();

// down the line think about making an array for all the store objects