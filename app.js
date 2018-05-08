'use strict'
// The below is for 1st and Pike

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var averageCookies = 6.3;
var averageCustomers 
var cookiesSold = 657;
var testArray = []


var patsCookies /* This is the OBJECT NAME */ = {
    /* This is the variable for min */ minCustomers: 23, 
    /* This is the variable for max */ maxCustomers: 65,
    /* this is a property */ randomCustomers: /*this is the method attached to the object */ function() {
      /* this is the random math generator related to the variables above */  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }, 
    /* property for the average cookies number given in assignment */ averageCookies: 6.3, 
    /* total cookies array to push into */ totalCookies: [],
    /* customers per hour array to  push into */ customersPerHour: [],
    populateCustomers: function () {
       /* for loop */ for (var i = 0; i < 14; i++) {
            this.customersPerHour.push (this.randomCustomers ())
        }
    }
}

// Min Customers per hour 23
// Max customers per hour 65
// Average cookies sold 6.3


// Lots of stuff goes in here

// render () {
//     // grab parent element from DOM

//         for(hours){
            
//             // create li
//             // give li content
//             // append li
//         }
//         // create content append
// }




// return Math.floor(Math.random() * (max - min + 1)) + min;  // <--- Gonna need this to get the randomness for the cookies


// for(var i = 0; i < array.length -1; i++) <--- For loop?













// down the line think about making an array for all the store objects
