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

//Create a variable for meal with the parameters in the function tax, tip and diners into calculations.

var meal = function(tax,tip,diners){
 this.diners = diners;
 this.tip = tip;
 this.tax = tax;
 this.total = 0;
 this.subtotal = 0;
 var self = this;//common hack used to pass this to subscopes.
 this.calculatePrice = function(){
   this.diners.map(function(diner){
     diner.dishes.map(function(dish){
       self.subtotal += dish.price;
     });
   });
   this.total = this.subtotal + (this.tip * this.subtotal) + (this.tax * this.subtotal);
 };
};

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

//Creating a variables for each food dish 
var Pho = new dish('Pho', 10);
var EggRolls = new dish('EggRolls', 4);
var Noodles = new dish('Noodles', 12);
var Dumplings = new dish('Dumplings', 6);
var Stirfry = new dish('Stirfry', 10);
var Banh_mi = new dish('Banh_mi', 8);


//Creating a variable names with a new order from the diner variable from above.
//We went to a vietnamese restaurant that serves both chinese and vietnamese food varieties.
var Hieu = new diner('Hieu', [Noodles, Dumplings]);//Kung Fu Panda
var Hanh = new diner('Hanh', [Pho, EggRolls]);//Likes multiple flavors and fried egg rolls.
var Hong = new diner('Hong', [Stirfry, Banh_mi]);//Old School Food in Vietnam/China


//Here I make the calculations for the whole meal with all the subtotal(initial), tip percent, tax percent, and final total.
//Current sales tax in California is 8% (0.08) and the required tips for any restaurant is 15% (0.15)
meal = new meal(0.08,0.15,[Hieu,Hanh,Hong]);
meal.calculatePrice();
//Using console.log to show ALL the results
console.log('Subtotal:','$',meal.subtotal, 'dollars');
console.log('Tax:', meal.tax, '%');
console.log('Tip:', meal.tip, '%');
console.log('Final_Total of the whole meal:','$', meal.total, 'dollars');
