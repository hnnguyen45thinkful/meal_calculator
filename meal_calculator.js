// A diner object with:
// Name
// list of dishes (what they ate, and how much it cost)
// A method to add the total of the dishes
// A method to calculate tax for this diner //
// A method to calculate the tip for this diner //


// A bill object with:
// list of diners
// method to total and print the total of all diners, including tax//
// method to total and print diners tips
// method to print a breakdown for each diner including their name, total, tax and tip
// Dummy data that creates:
// 1 bill
// 3 diners that are on the same bill
// 2 dishes for each diner
// Print the total for the bill
// Print the total tip for the waitress
// Print a breakdown for each person

//Creating a variable for DINER (diner)
var diner = function (name, dishes){
	this.name = name;
	this.dishes = dishes;
};
//Creating a variable for DISHES (dish)
var dish = function(name, price) {
	this.name = name;
	this.price = price;
};

var Pho = new dish('Pho', 15);
var EggRolls = new dish('EggRolls', 10);
var Noodles = new dish('Noodles', 9);
var Dumplings = new dish('Dumplings', 13);
var Cheese = new dish('Cheese', 8);
var Calamari = new dish('Calamari', 10);


var Hieu = new diner('Hieu', [Steak, Calamari]);
var Hanh = new diner('Hanh', [Fish, Ceviche]);
var Hong = new diner('Hong', [Cheese, Pasta]);


