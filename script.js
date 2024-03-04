var randomizedNum = Math.floor(Math.random()*1000);

var hundredthsplace = Math.floor(randomizedNum / 100);
var tenthsplace = Math.floor((randomizedNum % 100)/10);
var onesplace =  randomizedNum % 10;

var date = new Date(2024, 3, 4, 8, 53, 20);

document.getElementById("randomizednum").innerHTML = "Randomly generated number: " + randomizedNum + "<br>Breakdown: " + hundredthsplace * 100 + ", " + tenthsplace * 10 + ", " + onesplace + "<br>Current Date of Printing: " + date;

