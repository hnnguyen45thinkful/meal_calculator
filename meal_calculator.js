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
var diner = function (person, foods){
	this.person = person;
	this.foods = foods;
};
//Creating a variable for DISHES (dish)
var dish = function(person, cost_price) {
	this.person = person;
	this.cost_price = cost_price;
};
//Creating a variables for each food dish 
var Pho = new dish('Pho', 10);
var EggRolls = new dish('EggRolls', 4);
var Noodles = new dish('Noodles', 12);
var Dumplings = new dish('Dumplings', 6);
var Stirfry = new dish('Stirfry', 10);
var CurrySoup = new dish('CurrySoup', 8);

//Creating a variable names with a new order from the diner variable from above.
var Hieu = new diner('Hieu', [Pho, EggRolls]);
var Hanh = new diner('Hanh', [Noodles, Dumplings]);
var Hong = new diner('Hong', [Stirfry, CurrySoup]);


