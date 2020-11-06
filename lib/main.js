"use strict";

// It is always helpful to use comments in your code!

//The number “212” immediately prints inside of the span with the ID "boiling-temp" using an arrow function
var boilingTemp = function boilingTemp() {
  document.getElementById("boiling-temp").innerHTML = 212;
};
boilingTemp();

//The number “32” immediately prints inside of the span with the ID "freezing-temp" using an arrow function
var freezingTemp = function freezingTemp() {
  document.getElementById("freezing-temp").innerHTML = 32;
};
freezingTemp();

//Any number of your choice immediately prints inside of the span with the ID "water-temp" using an arrow function
var waterTemp = 30;
document.getElementById("water-temp").innerHTML = waterTemp;

//Use a setTimeout() method to make the following occur after 3 seconds (3000 milliseconds):

//If the number stored in “water-temp” is above 212, remove the class “hide” and add the class “show” to the section with the ID “boiling” so that the message “The water is hot. I think it is boiling.” appears
setTimeout(function aboveBoilingPoint() {
  if (waterTemp > 212) {
    document.getElementById("boiling").classList.remove("hide");
    document.getElementById("boiling").classList.add("show");
  }
}, 3000);

//If the number stored in “water-temp” is below 32, remove the class “hide” and add the class “show” to the section with the ID “frozen” so that the message “The water is cold. I think it is frozen.” appears
setTimeout(function belowFreezingPoint() {
  if (waterTemp < 32) {
    document.getElementById("frozen").classList.remove("hide");
    document.getElementById("frozen").classList.add("show");
  }
}, 3000);

//If the number stored in “water-temp” is neither above 212 nor below 32, remove the class “hide” and add the class “show” to the section with the ID “good-temp” so that the message “The water is fine. Jump on in.” appears
setTimeout(function waterGoodTemp() {
  if (32 <= waterTemp <= 212) {
    document.getElementById("good-temp").classList.remove("hide");
    document.getElementById("good-temp").classList.add("show");
  }
}, 3000);